import styled from "styled-components";
import Images from "./Images";

const Card = ({ products }) => {
  return (
    <>
      <DisplayCard>
        <div className="product_display_box">
          <h1>{products.title}</h1>
          {/* <img src={products.image} alt="images" /> */}
          <Images imgSrc={products.image} />
        </div>
      </DisplayCard>
    </>
  );
};

export default Card;

const DisplayCard = styled.div`
  .product_display_box {
    max-width: 320px;
    height: 400px;
    border: radius 10px;
    box-shadow: 3px 5px 5px rgb(1, 1, 1, 0.2);
    transition: 0.2s ease-in-out;
  }

  .product_display_box:hover {
    transform: scale(1.04);
    box-shadow: 3px 5px 5px rgb(1, 1, 1, 0.4);
    transition: 0.2s ease-in-out;
  }
  .product_display_box h1 {
    font-size: 14px;
  }
`;
