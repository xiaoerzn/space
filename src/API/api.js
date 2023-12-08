//我要用到的一些接口
import request from "../utils/request";
 
 
// 商品列表接口
export function getGoodsList(){
    return request({
        url: "/getGoodsList",
        method: "GET"
    })
}
 
// 用户列表接口
export function getUserList(){
    return request({
        url: "/getUserList",
        method: "GET"
    })
}
 
// 角色列表接口
export function getRoleList(){
    return request({
        url: "/getRoleList",
        method: "GET"
    })
}
 
// 权限列表接口
export function getAuthorityList(){
    return request({
        url: "/getAuthorityList",
      method: "GET",
    })
}
// 使用
// import { getUserinfoAPI } from '../api/userinfo.js'
// async getArticleListAPI(){
//     const {data:res} = await getUserinfoAPI()
// console.log(res)
// },