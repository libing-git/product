import { get } from '../../../utils/request'

export const reqProductlist = (params) => get('/api/v1/shop_carts',{params})

export const reqProductlistDetail = (params) => get('/api/v1/products/',{params})

