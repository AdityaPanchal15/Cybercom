
<script>
export default {
  methods: {
    getChildrenTextContent: function (children) {
      return children
        .map(function (node) {
          return node.children
            ? this.getChildrenTextContent(node.children)
            : node.text;
        })
        .join("");
    },
  },
  render: function (createElement) {
    // var headingId = this.getChildrenTextContent(this.$slots.default)
    //   .toLowerCase()
    //   .replace(/\W+/g, "-")
    //   .replace(/(^-|-$)/g, "");

    // return createElement("h" + this.level, [
    //   createElement(
    //     "a",
    //     {
    //       attrs: {
    //         name: headingId,
    //         href: "#" + headingId,
    //       },
    //     },
    //     this.$slots.default
    //   ),
    // ]);

    // -------------FOR COSTRAINT VNODE SHOULD BE UNIQUE-----------
    return createElement(
      "div",
      Array.apply(null, { length: 5 }).map(()=> {
        return createElement("p", "hi");
      })
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>