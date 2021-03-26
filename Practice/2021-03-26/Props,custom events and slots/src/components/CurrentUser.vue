<template>
  <div>
    <slot :user="user">
      {{ user.lastName }}
    </slot>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
        user:{firstName:'Aditya',lastName:'Panchal'}
    }
  },
    
};
</script>
