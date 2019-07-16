import axios from "axios";
import Url from "../../../support/url";

const getBuku = () => {
  return {
    type: "GET_BUKU",
    payload: axios.get(Url)
  };
};

export default getBuku