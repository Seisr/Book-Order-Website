import axios from "axios";
import { url, get_header } from "../settings";

export const BookDataService = {
  getAllAuthors: () => {
    return axios.get(`${url}/authors/`, {
      headers: get_header(),
    });
  },
  getAuthorsById: (id) => {
    return axios.get(`${url}/authors/${id}`, {
      headers: get_header(),
    });
  },
  getAllProducts: () => {
    return axios.get(`${url}/products`, {
      headers: get_header(),
    });
  },
  getProductsById: (id) => {
    return axios.get(`${url}/products/${id}`, {
      headers: get_header(),
    });
  },
  getWishList: () => {
    return axios.get(`${url}/wishlist`, {
      headers: get_header(),
    });
  },
  getCart: async () => {
    return await axios.get(`${url}/carts`, {
      headers: get_header(),
    });
  },
  getOrders: () => {
    return axios.get(`${url}/orders`, {
      headers: get_header(),
    });
  },
  postCarts: (data) => {
    return axios.post(`${url}/carts`, data, {
      headers: get_header(),
    });
  },
  postWishList: (data) => {
    return axios.post(`${url}/wishlist`, data, {
      headers: get_header(),
    });
  },

  logIn: async (data) => {
    return await axios.post(`${url}/auth/login`, data);
  },
};

export default BookDataService;
