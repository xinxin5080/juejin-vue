<template>
  <div>
    <ul class="homeul">
      <li class="homeli"><router-link to="/home/front">前端</router-link></li>
      <li class="homeli"><router-link to="/home/android">Android</router-link></li>
      <li class="homeli"><router-link to="/home/back">后端</router-link></li>
      <li class="homeli"><router-link to="/home/ios">ios</router-link></li>
    </ul>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.homeul{
  overflow: hidden;
}
.homeli{
  list-style: none;
  float: left;
  margin: 20px;
  font-size: 18px;
  border: 1px solid pink;
}
</style>
