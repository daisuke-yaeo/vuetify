<template>
  <div class="box">
    <div class="gif">
      <img src="../assets/loding2.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
 .box {
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   z-index: 9999;
   opacity: 0.5;
   background-color: #f5f5f5;
 }
 .gif {
   position: relative;
   top: 50%;
   left: 50%;
 }
 .gif img {
   width: 80px;
   height: 80px;
 }
 .remove {
   opacity: 0;
   visibility: hidden;
   pointer-events: none;
 }
</style>
