import axios from "axios";
import Url from "../../../support/url";

export const getUser = () => {
  return {
    type: "GET_USER",
    payload: axios.get(Url + `user`)
  };
};

export const postUser = (data) => {
  return {
    type: "POST_USER",
    payload: axios.post(Url + `user`, data)
  };
};

export const deleteUser = (id_user) => {
  return {
    type: "DELETE_USER",
    payload: axios.delete(Url + `user/${id_user}`)
  }
}