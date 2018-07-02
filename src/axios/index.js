import Jsonp from "jsonp";
import axios from "axios";
import { Modal } from "antd";

export default class Axios{

  //基于JsonP插件的请求跨域的问题
  static jsonp(options){
    return new Promise((resolve,reject)=>{
      Jsonp(options.url,{
        param:'callback'
      },function(err,response) {
        if(response.status === 'success'){
          resolve(response);
        }else{
          reject(response.message);
        }
      });
    });
  }

  static ajax(options){
    let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    let loading;
    if(options.data && options.data.isShowLoading !== false){
      loading = document.getElementById("ajaxLoading");
      loading.style.display='block';
    }
    return new Promise((resolve,reject)=>{
      axios({
        url:options.url,
        method:options.method,
        baseURL:baseApi,
        timeout:5000,
        params:(options.data && options.data.params)||''
      }).then((response)=>{
        if(options.data && options.data.isShowLoading !== false){
          loading = document.getElementById("ajaxLoading");
          loading.style.display='none';
        }
        if(response.status===200){
          let res = response.data;
          if(res.code === 0 || res.code === '0'){
            resolve(res);
          }else{
            Modal.info({
              title:'系统信息',
              content:res.message,
            });
          }
        }else{
          reject(response.data);
        }
      })
    });
  }


}