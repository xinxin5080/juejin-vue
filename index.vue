<template>
  <div class="box">
    <ul class="indexul">
      <li class="indexli"><router-link to="/home">首页</router-link></li>
      <li class="indexli"><router-link to="/activities">动态</router-link></li>
      <li class="indexli"><router-link to="/books">小册</router-link></li>
    </ul>
    <!-- 占坑 -->
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.indexul{
  overflow: hidden;
}
.indexli{
  list-style: none;
  float: left;
  margin: 20px;
  background-color:burlywood;
  font-size: 24px;
  border: 1px solid blue;
}
</style>

