import { DeliveryDate} from './DeliveryDate';
import {CartItemDetails} from './CartItemDetails';
import { DeliveryOptions} from './deliveryOptions';


export function OrderSummary({cart ,deliveryOptions, loadCart}) {
    return (
        <div className="order-summary">
            {/* if statement to check if if deliveryoptions are present then proced further */}
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                
                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions}/>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <CartItemDetails cartItem={cartItem}/>

                            <DeliveryOptions  cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

                        </div>
                    </div>
                )
            })}

        </div>
    );
}