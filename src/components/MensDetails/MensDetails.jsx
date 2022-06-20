import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { mensContext } from "../../contexts/mensContext";
import Loader from "../Loader/Loader";

const MensDetails = ({ item }) => {
  const { getOneProduct, oneProduct } = useContext(mensContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/mens">
          Mens
        </Link>
        <Typography color="text.primary">Info</Typography>
      </Breadcrumbs>

      {oneProduct ? (
        <Box className="m-d-box">
          <img
            className="mens-detail-img"
            src={oneProduct.image}
            width="100%"
            alt="product"
          />
          <div className="string-m-detail">
            <h1 variant="h4">{oneProduct.title}</h1>
            <p>{oneProduct.description}</p>
            <p variant="h4">{oneProduct.price}</p>
          </div>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default MensDetails;
