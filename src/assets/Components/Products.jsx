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
    if (Categorys === "all product") {
      setProducts(products);
    } else {
      const filterCategoryProduct = products.filter(
        (product) => Categorys === product.category
      );
      setProducts(filterCategoryProduct);
    }
    //     console.log(filterCategoryProduct);
  };
  return (
    <div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {products.length < 1 ? (
          <div>
            {" "}
            <div className=" text-center md:w-fit  col-span-2">
              <h4 className=" mb:mt-28 text-2xl font-semibold mb-2 opacity-40">
                No Data Found
              </h4>
            </div>
          </div>
        ) : (
          products.map((product) => (
            <Card key={product.product_id} product={product}></Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
