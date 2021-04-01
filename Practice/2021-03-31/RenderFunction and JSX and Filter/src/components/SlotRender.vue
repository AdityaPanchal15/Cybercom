<script>
export default {
  data() {
    return {
      message: "hii",
    };
  },
  render: function (createElement) {
    // `<div><slot :text="message"></slot></div>`
    return createElement("div", [
      this.$scopedSlots.default({
        text: this.message,
      }),
    ]);
  },
};
</script>

<style>
</style>