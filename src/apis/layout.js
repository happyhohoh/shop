import httpInstance from "@/utils/http";

export function getCatogoryAPI() {
    return httpInstance({
        url:'/home/category/head'
    })
}