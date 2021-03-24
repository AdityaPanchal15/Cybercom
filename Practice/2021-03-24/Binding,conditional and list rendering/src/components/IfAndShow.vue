<template v-if="awesome">
  <div>
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>

    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>

    <h1 v-show="ok">Hello!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: false,
      type: null,
      ok: false,
    };
  },
};
</script>
