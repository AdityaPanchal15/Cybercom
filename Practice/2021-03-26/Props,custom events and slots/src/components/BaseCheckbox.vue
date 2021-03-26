<template>
  <div>
    <label>Base Checkbox</label>
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  props: {
    checked: Boolean,
  },
  model: {
    prop: "checked",
    event: "change",
  },
};
</script>
