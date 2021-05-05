/* esling-disable */

import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe("pk_test_51IktV1LXV2qaKeg2QAaqxmqHgidJUedazxriTkS9ScxbSyc8nafLgl5JSMRyUAwjr7k0yfITkIf0rpbqWnWtMayW00krQhxs0l");

export const bookTour = async tourId => {
    try {
        // (1) Get checkout session from API/endpoint
        const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`);
        console.log(session);

        // (2) Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });


    } catch (err) {
        console.log(err);
        showAlert("error", err);
    }
};