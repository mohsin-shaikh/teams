import * as t from "@/redux/types";
// import axios from "axios";
// import { request } from "../../util/request";

export const setInfo = (name) => dispatch => {
  dispatch({
    type: t.SET_NAME,
    payload: name
  });
}