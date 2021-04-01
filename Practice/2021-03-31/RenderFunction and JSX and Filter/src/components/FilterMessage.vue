<template>
  <div>
    {{ message | capitalize}}
  </div>
</template>

<script>
export default {
  props: {
      message:String
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>
