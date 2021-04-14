import { get, post } from "../../../utils/request";

//新增收货地址
export const reqAddress = (data) => post("/api/v1/addresses", data);

//收货地址列表
