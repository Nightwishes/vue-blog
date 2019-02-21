<template>
  <div class="mofang">
    <ul class="ul">
      <li>
        <img src="../../common/images/1.png" width="100%" height="100%"/>
      </li>
       <li>
        <img src="../../common/images/2.png" width="100%" height="100%"/>
      </li>
        <li>
        <img src="../../common/images/3.png" width="100%" height="100%"/>
      </li>
        <li>
        <img src="../../common/images/4.png" width="100%" height="100%"/>
      </li>
      <li>
        <img src="../../common/images/5.png" width="100%" height="100%"/>
      </li>
        <li>
        <img src="../../common/images/6.png" width="100%" height="100%"/>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.ul {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: 18s move linear infinite;
  transform-origin: center center -100px;
  -webkit-transform-origin: center center -100px;
}
.ul li {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-origin: center center -100px;
  -webkit-transform-origin: center center -100px;
  opacity: .9;
}
.ul li:nth-of-type(1) {
  transform: rotateY(90deg);
  -webkit-transform: rotateY(90deg);
}
.ul li:nth-of-type(2) {
  transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
}
.ul li:nth-of-type(3) {
  transform: rotateY(270deg);
    -webkit-transform: rotateY(270deg);
}
.ul li:nth-of-type(4) {
  transform: rotateY(360deg);
    -webkit-transform: rotateY(360deg);
}
.ul li:nth-of-type(5) {
  transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
}
.ul li:nth-of-type(6) {
  transform: rotateX(-90deg);
    -webkit-transform: rotateX(-90deg);
}
@keyframes move {
  0% {
    transform: rotateY(0deg)
  }
  100% {
    transform: rotateY(360deg)
  }
}
</style>
