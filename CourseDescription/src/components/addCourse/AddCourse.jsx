import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

import axios, { Post } from "axios";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Product || Sandeep Mart";
  }, []);

  const [product, setProduct] = useState({});
  const handleChanges = (e) => {
    let updatedValue = {};
    updatedValue = {
      id: e.target[0].value,
      name: e.target[1].value,
      price: e.target[2].value,
    };
    setProduct((product) => ({
      ...product,
      ...updatedValue,
    }));

    console.log("before ", product);
    axios.post("http://192.168.0.103:8081/api/products", product).then(
      (response) => {
        console.log(response);
        console.log("success!!!!!!");
      },
      (error) => {
        console.error(error);
      }
    );
    console.log("after :: ", product);
    e.preventDefault();
  };

  return (
    <Fragment>
      <h1 className="text-center my-3"> Add Product Details</h1>
      <Form onSubmit={handleChanges}>
        <FormGroup>
          <label>Product Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="productId"
            id="productId"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="product_name">Product Name</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="product_name"
            id="product_name"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="price">Price</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="price"
            id="price"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label>Description</label>
          <Input
            type="textarea"
            placeholder="Enter descritpion here"
            id="description"
            style={{ helight: 400 }}
          ></Input>
        </FormGroup>
        <Container>
          <Button color="success">Add Product</Button>
          <Button color="warning">Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};
export default AddCourse;
