<template>
  <!-- <a
  :href="url"
  class="nav-link"
>
  <slot></slot>
</a> -->
<button type="submit">
  <slot>Submit</slot>
</button>
</template>

<script>
export default {
  props: {
      url:String
  },

}
</script>
