<template>
  <div>
    <!-- class binding -->
    <p :class="classObject">class binding</p>
    <button class="btn" :class="classObject">2</button>
    <button class="btn" :class="[activeClass, errorClass]">
      list class binding
    </button>

    <!-- style binding -->
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      Style Binding
    </div>
    <div v-bind:style="[baseStyles, overridingStyles]">array style binding</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      error: { type: "fatal" },
      activeColor: "red",
      fontSize: 30,
      activeClass: "active",
      errorClass: "text-danger",
      baseStyles: {color: "red",fontSize:"13px"},
      overridingStyles: { }
    };
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        textDanger: this.error && this.error.type === "fatal",
      };
    },
  },
};
</script>

<style>
.active {
  background-color: green;
}
.textDanger {
  color: red;
}
.strikeout {
  text-decoration: line-through;
}
</style>