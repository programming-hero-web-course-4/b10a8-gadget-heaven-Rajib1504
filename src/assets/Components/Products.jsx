import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 ">
        {products.map((product) => (
          <Card key={product.product_id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
