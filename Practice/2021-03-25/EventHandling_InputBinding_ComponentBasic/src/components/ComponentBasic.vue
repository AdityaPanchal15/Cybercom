<template>
<div>
    <h1>Component</h1>
    <slot></slot>
    <input :value="value" @input="handleInput($event.target.value)" />
    <p>{{content}}</p>
    </div>  
</template>

<script>
export default {
  props: {
      value:String
  },
  data () {
    return {
        content: this.value
    }
  },
  methods: {
      handleInput(value){
          this.$emit('input', value)
      }
  },
}
</script>
