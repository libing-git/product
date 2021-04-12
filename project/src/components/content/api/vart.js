import { post } from '../../../utils/request'

export const reqAddcart = (data) => post('/api/v1/shop_carts',data)