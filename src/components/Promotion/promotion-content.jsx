import React from "react";
import "./promotion-content.css";
import Side from "./side.jsx";

const objectsArray = [
  {
    id: 1,
    imgUrl: require("../../assets/promotion-dec-banner.jpg"),
    title: "Chirstmas Sale",
    author: "Người viết : BaBook - ",
    content: `<b>BaBook</b> khuyến mãi dịp Giáng sinh, nhiều ưu đãi hấp dẫn. Giảm
    tới 50% các sản phẩm của cửa hàng.
    <br />
    Giáng sinh nhiều ưu đãi hấp dẫn. Các tựa sách chủ đề Giáng sinh đang
    chờ bạn ở BaBook. Cùng nhau mua sắm dịp cuối năm làm đầy tủ sách
    nào.`,
  },
  {
    id: 2,
    imgUrl: require("../../assets/promotion-birthday-banner.jpg"),
    title: "BaBook Sale Birthday",
    author: "Người viết : BaBook - ",
    content: `Để tri ân những khách hàng đã ủng hộ Nhà sách <b>BaBook</b> trong suốt thời gian qua, chúng tôi xin gửi đến quý khách hàng chương trình khuyến mãi giảm giá 10% cho tất cả sách trong dịp sinh nhật này.
    Chương trình áp dụng từ ngày 15/12/2023 đến hết ngày 20/12/2023.
    Nhanh tay đến Nhà sách <b>BaBook</b> để tận hưởng ưu đãi hấp dẫn này nhé!`,
  },
  {
    id: 3,
    imgUrl: require("../../assets/promotion-banner.jpeg"),
    title: "BaBook Share Hobby - Share Money",
    author: "Người viết : BaBook - ",
    content: `Hãy cùng chia sẻ quyển sách yêu thích của bạn với <b>BaBook</b>. Cơ hội mua những đấu sách hot hiện nay với giá <b>1đ</b>.`,
  },
  {
    id: 4,
    imgUrl: require("../../assets/promotion-banner1.jpeg"),
    title: "BaBook - Bookworm",
    author: "Người viết : BaBook - ",
    content: `Tháng của mọt sách,<b>BaBook</b> khuyến mãi với hoá đơn từ 100.000VND.`,
  },
];

const today = new Date();
let date =
  today.getDate().toString() +
  "/" +
  (today.getMonth() + 1).toString() +
  "/" +
  today.getFullYear().toString();

let url = window.location.pathname;

const PromotionContent = () => {
  let content = [];
  for (let i of objectsArray) {
    if (i.id == url.slice(-1)) {
      content.push(
        <div>
          <div className="row container-component">
            <div className="col-4 aside-div">
              <Side />
            </div>
            <div className="col-1"></div>
            <div className="col-7 content-promotion">
              <h2>{i.title}</h2>
              <div className="img-div">
                <img src={i.imgUrl} alt="promotion" />
                <img
                  src={require("../../assets/promotion-banner2.jpeg")}
                  alt="promotion"
                />
              </div>
              <p>{i.content}</p>
              <div className="author">
                <p>
                  BaBook - {date} - {url.slice(-1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return <div>{content}</div>;
};

export default PromotionContent;
