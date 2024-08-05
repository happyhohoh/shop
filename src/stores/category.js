import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCatogoryAPI } from '@/apis/layout';

export const categeoryStore = defineStore('category', () => {
    const categeoryList = ref([])
    const getCatogory = async ()=>{
        const res = await getCatogoryAPI();
        categeoryList.value = res.result
    }
    return {categeoryList , getCatogory}
})

