
<script>
export default {
  props: {
    value: String,
  },
  render: function (createElement) {
    var self = this;
    return createElement("div", [
      createElement("p", this.value),
      createElement("input", {
        domProps: {
          value: self.value,
        },
        on: {
          input: function (event) {
            self.$emit("input", event.target.value);
          },
        },
      }),
    ]);
  },
};
</script>
