import { Product } from './Product';

export function ProductsGrid({ products, loadCart }) {

    return (
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <Product key={product.id} loadCart={loadCart} product={product} />
                )
            })}
        </div>
    );

}