import request from '@/utils/request.js'

export const articleCategoryListService = () => {
    return request.get('/category')
}  

//添加文章分类
export const articleCategoryAddService = (categoryModel) => {
    return request.post('/category', categoryModel)
}
//修改分类
export const articleCategoryUpdateService = (categoryModel)=>{
    return request.put('/category',categoryModel)
}
//删除分类
export const articleCategoryDeleteService = (id)=>{
    return request.delete('/category?id='+id)
}
//文章列表查询
export const articleListService = (params) => {
    return request.get('/article', { params })
}
//添加文章
export const articleAddService = (articleModel)=>{
    return request.post('/article',articleModel)
}
//编辑文章
export const articleUpdateService = (articleModel)=>{
    return request.put('/article',articleModel)
}
//删除文章
export const articleDeleteService = (id)=>{
    return request.delete('/article?id='+id)
}