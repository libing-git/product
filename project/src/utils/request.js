// 封装axios
import axios from 'axios'
import {getToken} from './auth'

import {serverUrl} from './common'

const instance = axios.create({
    baseURL:serverUrl, //url域名
    timeout:5000 // 请求超时时间
});
instance.interceptors.request.use(
    function(config) {
      if (getToken()) {
        config.headers.authorization = "Bearer " + getToken();
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  
  instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  

//get请求封装
export const get =(url,params)=> instance.get(url,{params})

//post请求封装
export const post = (url,data)=>instance.post(url,data)
