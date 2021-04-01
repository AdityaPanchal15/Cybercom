<script>
import AnchoredHeadingVue from './AnchoredHeading.vue';
export default {
  data () {
    return {
        h:this.$createElement
    }
  },
  render: function (h) {
      console.log(h);
    return (
      <AnchoredHeadingVue level={1}>
        <span>Hello</span> world!
      </AnchoredHeadingVue>
    );
  },
};
</script>
