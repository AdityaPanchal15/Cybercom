<template>
  <div>
    <h1>List Rendering</h1>
    <!-- <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li> -->
    <ul>
      <li v-for="(item, index) in items" :key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>

    <h4>v-for with an Object</h4>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name, index) in object" :key="value">
        {{ index }}.{{ name }}:{{ value }}
      </li>
    </ul>
    <p>{{ FooItem }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" },{ message: "Bartool" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
  computed: {
    FooItem: {
      get() {
         return this.items.filter((item)=> {return item.message.match(/B/)});
      },
    },
  },
};
</script>
