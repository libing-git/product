import {
  get,
  post
} from "../../../utils/request";

//添加购物车
export const reqAddcart = (data) => post("/api/v1/shop_carts", data);

//获取购物车列表
export const reqCartlist = () => get("/api/v1/shop_carts");

/* 调用购物车接口 */
/* 商品和商品id */
export function addToCart(product, num) {
  return post('/api/v1/shop_carts', {
    product,
    quantity: num,
  });
}
// 根据id删除商品
export function delpro(id) {
  return delete('/api/v1/shop_carts/' + id);
}

/* 加载购物车 */
export function loadCarts() {
  return get('/api/v1/shop_carts');
}