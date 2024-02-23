<script>
import Navbar from '../src/components/navbar.vue';
import dayjs from 'dayjs';
export default {
  name : 'App',
  components : {
    Navbar
  },
  data(){
    return{
      activeComponent: 'home'
    }
  }
}
</script>

<template>
  <div id="app">
    <Navbar/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style></style>
