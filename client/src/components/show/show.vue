<template>
    <div class="show">
      <div class="img-mark">
        <img src="../../common/images/1-1.png" width="100%" height="100%">
      </div>
      <div class="snow-mark"></div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
  .img-mark {
    position: fixed;
    width: 100%;
    height: 0;
    padding-top: 100%;
    left: 0;
    top: 0;
    opacity: .5;
    z-index: -1;
  }
  .img-mark img {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  @keyframes snow {
    0% {
      background-position: 0 0,0 0;
    }
    100% {
      background-position: 500px 500px, 1000px 500px;
    }
  }
  .snow-mark {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url('../../common/images/snow1.png'), url('../../common/images/snow2.png');
    animation: 10s snow linear infinite;
    pointer-events: none;
  }
</style>
