import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);


export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Get the request body
  const { amount } = body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });

    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    return { error: error.message };
  }
});