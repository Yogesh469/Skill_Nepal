
import axios from "axios"
import crypto from "crypto"
import Payment from "../models/PaymentSchema.js"

export const initiatePayment = async (req, res) => {
    try {

        // 1. Get the selected plan
        const { plan } = req.body;

        // 2. Define plan prices on the backend (in paisa)
        // Temporary example prices: change these to match your Pricing page.
        const planPrices = {
            Pro: {
                Monthly: 449,  
                Yearly: 4490   
            },
            Premium: {
                Monthly: 999,  
                Yearly: 9990   
            }
        };

        // 3. Validate the selected plan
        if (!planPrices[plan]) {
            return res.status(400).json({
                message: "Invalid subscription plan"
            });
        }

        // 4. Get the logged-in user's ID
        const userId = req.user._id || req.user.id;

        // 5. Generate a unique order ID
        const purchaseOrderId = `SKILL-${crypto.randomUUID()}`;

        // 6. Get the amount from our backend price list
        const amount = planPrices[plan];

        // 7. Save a pending payment in MongoDB
        const payment = await Payment.create({
            userId,
            plan,
            amount,
            purchaseOrderId,
            status: "Pending"
        });

        // 8. Prepare the data for Khalti
        const paymentData = {
            return_url: `${process.env.FRONTEND_URL}/payment/verify`,
            website_url: process.env.FRONTEND_URL,
            amount,
            purchase_order_id: purchaseOrderId,
            purchase_order_name: `SkillNepal ${plan} Plan`
        };

        // 9. Send the payment request to Khalti
        const khaltiResponse = await axios.post(
            `${process.env.KHALTI_BASE_URL}epayment/initiate/`,
            paymentData,
            {
                headers: {
                    Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        // 10. Save Khalti's pidx in our database
        payment.pidx = khaltiResponse.data.pidx;
        await payment.save();

        // 11. Send the payment URL to the frontend
        return res.status(200).json({
            message: "Payment initiated successfully",
            payment_url: khaltiResponse.data.payment_url,
            pidx: payment.pidx,
            purchaseOrderId
        });

    } catch (error) {

        console.error(
            "Payment initiation error:",
            error.response?.data || error.message
        );

        return res.status(500).json({
            message: "Failed to initiate payment",
            error: error.response?.data || error.message
        });
    }
};
