import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../card/Card";

const Products = () => {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    console.log("Product component load..");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductArray(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <ProductContainer>
        <h1>Vani Product!!!</h1>
        <div className="product_list">
          {productArray.map((product, i) => {
            return (
              // <div className="product_display_box">
              //   <h1>{product.title}</h1>
              //   <img src={product.image} alt="images" />
              // </div>
              <Card key={i} products={product} />
            );
          })}
        </div>
      </ProductContainer>
    </>
  );
};
export default Products;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  .product_list {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 50px;
  }
`;
