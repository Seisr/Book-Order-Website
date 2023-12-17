import React, { useEffect, useRef, useState, useMemo } from "react";
import BookDataService from "../../services/BookDataService";
import { Button, Input } from "antd";
import "./Cart.css";
import { Spinner } from "reactstrap";
import { url } from "../../settings";

const Products = () => {
  const [carts, setCarts] = useState();
  useEffect(() => {
    BookDataService.getCart().then((res) => setCarts(res.data));
  }, []);

  console.log(carts);

  if (!carts) {
    return <Spinner />;
  }

  return (
    <>
      {carts &&
        carts.map((cart) => {
          return (
            <div class="row">
              <div class="col-md-12">
                <div class="basketDescription">
                  <div class="row">
                    <div class="col-3">
                      <img src={cart.product?.imageUrl} />
                    </div>
                    <div class="col-9">
                      <div class="productDescription">
                        <p>
                          <a href={`/products/${cart.product?._id}`}>
                            {cart.product?.name}
                          </a>
                        </p>
                        <div class="row">
                          <div class="col-12 col-sm-10">
                            <div class="d-flex justify-content-between">
                              <p class="bookType col-5 px-0">
                                {cart.product && `Ebook`}
                              </p>
                              <p class="bookType other">
                                <br />{" "}
                                {cart.product && `${cart.product?.price}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

const Cart = () => {
  return (
    <div className="body">
      <div className="header">
        <div className="headerTitle">
          <h1>Basket</h1>
        </div>
      </div>
      <div className="basketBody"></div>
      <Products />
    </div>
  );
};

export default Cart;
