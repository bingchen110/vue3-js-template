import request from '@/utils/request'

export const userRegisterService = (params) => {
    // 借助UrlSearchParams 完成传递
    const temp = new URLSearchParams()
    for(let key in params) {
        temp.append(key, params[key])
    }
    return request.post('/user/register', temp)
}

export const userLoginService = (params) => {
    // 借助UrlSearchParams 完成传递
    const temp = new URLSearchParams()
    for(let key in params) {
        temp.append(key, params[key])
    }
    return request.post('/user/login', temp)
}
//获取个人信息
export const userInfoService = ()=>{
    return request.get('/user/userInfo');
}
//修改个人信息
export const userInfoUpdateService = (userInfo)=>{
    return request.put('/user/update',userInfo)
}
//修改头像
export const userAvatarUpdateService=(avatarUrl)=>{
    let params = new URLSearchParams();
    params.append('avatarUrl',avatarUrl)
    return request.patch('/user/updateAvatar',params)
}