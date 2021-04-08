<template>
<div class="container">
  <table>
      <span v-for="(imgDetail,index) in imgDetails" :key="index">
      <tr v-if="index%2==0">
          <td><img :src="imgDetail.url" alt=""></td>
          <td><h2>{{imgDetail.title}}</h2> <br>{{imgDetail.content}}</td>
      </tr>
      <tr v-else>
          <td><h2>{{imgDetail.title}}</h2> <br>{{imgDetail.content}}</td>
          <td><img :src="imgDetail.url" alt=""></td>
      </tr>
      </span>
  </table>
  </div>
</template>

<script>
export default {
  props: {
      imgDetails:Array
  },

}
</script>

<style scoped>
td{
    padding: 20px 10px 40px 10px;
    vertical-align: top;
}
img{
    width: 550px;
}
</style>