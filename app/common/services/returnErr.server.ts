import { data } from "@remix-run/node";
import { ServiceResp } from "../types";
import { AxiosError } from "axios";

export function returnErr(error: AxiosError): ServiceResp {
  console.log(error.config);
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (
      error.response.data &&
      typeof error.response.data === "object" &&
      "meta" in error.response.data &&
      error.response.data.meta &&
      typeof error.response.data.meta === "object" &&
      "key" in error.response.data.meta &&
      typeof error.response.data.meta.key === "string"
    ) {
      return { status: error.response.status, ok: false, data: null, key: error.response.data.meta.key };
    }

    throw new Error("There is no key in response");
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js

    throw data("", {
      status: 500,
    });
  } else {
    // Something happened in setting up the request that triggered an Error
    throw data("", {
      status: 500,
    });
  }
}
