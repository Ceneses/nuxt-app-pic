// @ts-ignore
import {defineEventHandler} from "h3";
// @ts-ignore
import {useServerStripe} from "#stripe/server";

export default defineEventHandler(async (event: any) => {
    const stripe = await useServerStripe(event);
    const {id, url} = await stripe.checkout.sessions.create({
        line_items: [
            {
                quantity: 3,
                price: "price_1PEBjTHdnG2TSZs4foXT49ES"
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });
    return url;
});
