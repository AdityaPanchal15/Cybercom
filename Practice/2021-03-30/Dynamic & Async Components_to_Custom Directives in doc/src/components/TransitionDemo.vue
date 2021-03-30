<template>
  <div>
    <p>----------------Transition with animate.css and Mixin property----------------</p>
    <button v-on:click="show = !show">Toggle</button>
    <!-- <transition name="fade">
    <p v-if="show">hello</p>
  </transition> -->

    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">hello</p>
    </transition>

  </div>
</template>

<script>
import {transitionMixin} from '../mixin/transitionMixin';
export default {
  mixins:[transitionMixin]
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>