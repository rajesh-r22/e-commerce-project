import dayjs from 'dayjs';

export function DeliveryDate({ deliveryOptions, cartItem }) {

    {/* if statement to check if if deliveryoptions are present then proced further */ }
    
    const selectedDeliveryOption = deliveryOptions
        .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
        });

    return (
        <div className="delivery-date">
            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>
    );

}