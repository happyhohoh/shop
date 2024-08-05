<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';

// 获取触发导航列别的action
import { categeoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const category = categeoryStore();

onMounted(()=>{
  category.getCatogory()
  console.log(typeof(category.categeoryList))
})
</script>

<template>
  <div>
    <LayoutFixed :CategeoryList="category.categeoryList" />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
  </div>
</template>