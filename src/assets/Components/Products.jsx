import { useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Products = () => {
  const { Categorys } = useParams();
  //   console.log(Categorys);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/gudget.json")
      .then((res) => res.json())
      .then((data) => handelProductCategory(data));
  }, [Categorys]);

  const handelProductCategory = (products) => {
    const filterCategoryProduct = products.filter(
      (product) => Categorys === product.category
    );
    setProducts(filterCategoryProduct);
    //     console.log(filterCategoryProduct);
  };
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
