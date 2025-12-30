<!-- eslint-disable vue/multi-word-component-names -->
 <script setup>
  import LayoutNav from './components/LayoutNav.vue';
  import LayoutHeader from './components/LayoutHeader.vue';
  import LayoutFooter from './components/LayoutFooter.vue';
  import LayoutFix from './components/LayoutFix.vue';
 </script>
<template>
  <div>
    <LayoutFix />
    <LayoutNav />
    <LayoutHeader />
    <router-view />
    <LayoutFooter />
  </div>
</template>
