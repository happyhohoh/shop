// 封装分类数据
import { ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryAPI } from '@/apis/category'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
    // 这个是获取当前路由的所有信息，注意是当前的，所以可以去对应的路由组件中查看
    const route = useRoute()
    const categoryData = ref({})
    const getCategory = async (id=route.params.id) => {
        const res = await getCategoryAPI(id)
        console.log(res)
        categoryData.value = res.result
    }

    onMounted(() => {
        getCategory()
    })

    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}