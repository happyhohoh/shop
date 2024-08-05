import httpInstance from "@/utils/http.js"

// 获取首页轮播图数据
export const getBannerAPI = () => {
  return httpInstance({
    url: '/home/banner'
  })
}