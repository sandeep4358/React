import React, { useEffect, useState } from "react";
import Courses from "./components/courses/Courses";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import AllCourses from "./components/allcourses/AllCourses";
import AddCourse from "./components/addCourse/AddCourse";
import { Col, Container, Row } from "reactstrap";
import Menu from "./components/menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import CountiesTables from "./components/Countries/CountiesTables";

const App = () => {
  

  return (
    <div>
      <Container>
        <Header></Header>
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/view-products" element={<AllCourses />} />
              <Route path="/add-product" element={<AddCourse />} />
              <Route path="/show-countires" element={<CountiesTables />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
