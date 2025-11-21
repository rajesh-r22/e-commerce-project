import axios from 'axios';
import { useState, useEffect } from 'react'
import { OrderSummary } from './orderSummary'
import { PaymentSummary } from './PaymentSummary'
import { CheckoutHeader} from './CheckoutHeader';
import './CheckoutHeader.css';
import './CheckoutPage.css';



export function CheckoutPage({ cart ,loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)



    useEffect(() => {

        const fetchCheckoutData=async ()=>{
            let response= await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);

            response=await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        }
        fetchCheckoutData();
    }, [cart])

    return (
        <>
            <title>Checkout</title>
            <a rel="icon" type="image/svg+xml" href="cart-favicon.png" />

             <CheckoutHeader cart={cart}/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart}/>

                    <PaymentSummary paymentSummary={paymentSummary} />

                </div>
            </div>
        </>
    )
}

