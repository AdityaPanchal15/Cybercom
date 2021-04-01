<script>
export default {
  render: function (createElement) {
    if (this.items.length) {
      return createElement(
        "ul",
        this.items.map((item) => {
          return createElement("li", item);
        })
      );
    }else{
        return createElement('p','not found');
    }
  },
  data() {
    return {
      items: ["a", "b", "c", "d", "e"],
    };
  },
};
</script>
