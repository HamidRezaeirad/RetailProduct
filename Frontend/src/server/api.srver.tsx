import axios, { Method, AxiosResponse } from "axios";

/**
 *
 * @returns axios Create a axios instans
 */
const api = axios.create({
  baseURL: "http://localhost:3000/api", // later need to read from process.env REACT_APP_HOST_BACKEND,
});

// https://dev.to/djamaile/how-i-structure-my-react-ts-applications-160g

// const request = <T,>(
//   method: Method,
//   url: string,
//   params: any
// ): Promise<AxiosResponse<T>> => {
//   return api.request<T>({
//     method,
//     url,
//     params,
//   });
// };

export default api;
