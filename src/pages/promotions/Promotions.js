import React from "react";
import "./promotions.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

const today = new Date();
let date =
  today.getFullYear().toString() +
  "/" +
  (today.getMonth() + 1).toString() +
  "/" +
  today.getDate().toString();

const Promotions = () => {
  return (
    <div>
      <h1>Promotions</h1>
      <div className="container">
        <NavLink to="/promotions/1" className={"navlink"}>
          <div className="card">
            <div className="card-img">
              <img
                src={require("../../assets/promotion-dec-banner.jpg")}
                alt="promotion-dec"
              />
            </div>
            <div className="card-content-title">
              <h5>Chirstmas Sale</h5>
              <p className="content-author">Người viết : BaBook - {date} </p>
              <p className="content-body">
                <b>BaBook</b> khuyến mãi dịp Giáng sinh, nhiều ưu đãi hấp dẫn.
                Giảm tới 50% các sản phẩm của cửa hàng.
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/promotions/2" className={"navlink"}>
          <div className="card">
            <div className="card-img">
              <img
                src={require("../../assets/promotion-birthday-banner.jpg")}
                alt="promotion"
              />
            </div>
            <div className="card-content-title">
              <h5>BaBook Sale Birthday</h5>
              <p className="content-author">Người viết : BaBook - {date} </p>
              <p className="content-body">
                <b>BaBook</b> khuyến mãi dịp Sinh nhật, nhiều ưu đãi hấp dẫn.
                Đăng kí thành viên, được tặng quà hấp dẫn.
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/promotions/3" className={"navlink"}>
          <div className="card">
            <div className="card-img">
              <img
                src={require("../../assets/promotion-banner.jpeg")}
                alt="promotion"
              />
            </div>
            <div className="card-content-title">
              <h5>BaBook Share Hobby - Share Money</h5>
              <p className="content-author">Người viết : BaBook - {date} </p>
              <p className="content-body">
                Hãy cùng chia sẻ quyển sách yêu thích của bạn với <b>BaBook</b>.
                Cơ hội mua những đấu sách hot hiện nay với giá <b>1đ</b>.
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/promotions/4" className={"navlink"}>
          <div className="card">
            <div className="card-img">
              <img
                src={require("../../assets/promotion-banner1.jpeg")}
                alt="promotion"
              />
            </div>
            <div className="card-content-title">
              <h5>BaBook - Bookworm</h5>
              <p className="content-author">Người viết : BaBook - {date} </p>
              <p className="content-body">
                Tháng của mọt sách,<b>BaBook</b> khuyến mãi với hoá đơn từ
                100.000VND.
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Promotions;
