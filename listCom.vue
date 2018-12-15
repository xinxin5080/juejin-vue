
<template>
  <div>
   <ul>
     <li @click="add(item.id)" v-for="(item,index) in list[0].articles" :key="index">
       <h3>{{item.title}}</h3>
       <p>{{item.content}}</p>
     </li>
   </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      list:[{articles:[],type:''}]
    }
  },
  watch: {
    '$route':{
      handler(to,from){
        let str = to.params.type
        // console.log(str)
        axios.get('http://localhost:3000/list/?type='+str)
        .then(res=>{
          // console.log(res.data[0].articles)
          this.list=res.data
        })

      },
      // 页面加载就执行
      immediate:true
    }
  },
  methods: {
    add(id){
      // console.log(id)
      // 重定项,携带id
      this.$router.push({name:'detailCom',params:{id:id}})
    }
  }
}
</script>
<style>
div{
  margin-top: 50px;
}
</style>
