<template>
  <div>
    <input v-focus />
    <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>

    <div id="baseexample">
      <p>Scroll down the page</p>
      <p v-pin:[direction]="200">Stick me 200px from the top of the page</p>
    </div>

    <p>--------------Object Literals------------------</p>
    <div v-demo1="{ color: 'white', text: 'hello!' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello",
      direction: "right",
    };
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus();
      },
    },
    demo: {
      bind: function (el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
          "name: " +
          s(binding.name) +
          "<br>" +
          "value: " +
          s(binding.value) +
          "<br>" +
          "expression: " +
          s(binding.expression) +
          "<br>" +
          "argument: " +
          s(binding.arg) +
          "<br>" +
          "modifiers: " +
          s(binding.modifiers) +
          "<br>" +
          "vnode keys: " +
          Object.keys(vnode).join(", ");
      },
    },
    pin: {
      bind: function (el, binding) {
        el.style.position = "fixed";
        var s = binding.arg == "left" ? "left" : "top";
        el.style[s] = binding.value + "px";
      },
    },
    demo1: {
      bind: function (el, binding) {
        console.log(binding.value.color); // => "white"
        console.log(binding.value.text); // => "hello!"
      },
    },
  },
};
</script>

