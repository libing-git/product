import { get, post } from "../utils/request";
/* 修改用户密码 */
export function onChange(oldPassword, password) {
  return post("/api/v1/users/change_pwd", {
    oldPassword,
    password,
  });
}
/* 获取用户信息 */
export function loadUserInfo() {
  return get("/api/v1/users/info");
}
