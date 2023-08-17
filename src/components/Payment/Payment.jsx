import React, { useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const MolliePayment = () => {
    const [paymentLink, setPaymentLink] = useState('');
    const a = useParams();
    console.log('some',a)
    const createPaymentOrder = async () => {
        try {
            const response = await axios.post(
                'https://api.mollie.com/v2/payments',
                {
                    amount: {
                        currency: 'EUR',
                        value: '10.00',
                    },
                    description: 'Example payment',
                    redirectUrl: 'https://yourwebsite.com/redirect',
                    // Other required parameters...
                },
                {
                    headers: {
                        'Authorization': 'test_96m24F3ncSJyj7nFpmKP5pjSn3RzrD',
                    },
                }
            );

            setPaymentLink(response.data.links.checkout.href);
        } catch (error) {
            console.error('Error creating payment:', error);
        }
    };

    return (
        <div>
            <button onClick={createPaymentOrder}>Create Payment</button>
            {paymentLink && (
                <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                    Proceed to Payment
                </a>
            )}
        </div>
    );
};

export default MolliePayment;
