import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const lazyPlugin = {
    install(app){
        // 懒加载指令
        app.directive('img-lazy', {
            mounted(el, binding){
              // el:指令所在的元素 img
              // binding:指令的参数 binging.value
              console.log(el, binding.value)
          
              const {stop} = useIntersectionObserver(
              el,
              ([{ isIntersecting }]) => {
                  console.log(isIntersecting)
                  if(isIntersecting){
                      el.src = binding.value
                      stop()
                  }
                  },
              )
            }
              
          })
          
    }

}