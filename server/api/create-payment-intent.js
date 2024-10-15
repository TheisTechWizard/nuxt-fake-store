import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export default async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount, // Amount in cents
            currency: 'usd' // Can be changed to other currencies like dkk if needed
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}