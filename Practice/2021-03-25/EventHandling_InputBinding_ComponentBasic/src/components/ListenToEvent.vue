<template>
  <div>
    <button @click="counter += 1" class="btn">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    
    <button
      @keyup.enter="warn('Form cannot be submitted yet.', $event)"
      class="btn"
    >
      Say hi
    </button>


    <br /><br />

    <!-- Alt + C -->
    <input @keyup.alt.67="clear" v-model="name" />
    <br /><br />
    
    <!-- Ctrl + Click -->
    <p>press Ctrl+Click</p>
    <div @click.ctrl="clear">Clear Input Box</div>
  </div>
</template>

<script>
export default {
  methods: {
    clear() {
      this.name = "";
    },
    warn: function (message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
};
</script>
