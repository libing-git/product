const TOKEN = 'token'
export function isLogined(){
    if(localStorage.getItem(TOKEN)){
        return true
    } 
    return false
}
// 生成token
export function setToken(token){
    localStorage.setItem(TOKEN,token)
}
// 获取token
export function getToken(){
    return localStorage.getItem(TOKEN)
}

// 移除token

export function removeToken(){
    localStorage.removeItem(TOKEN)
}

