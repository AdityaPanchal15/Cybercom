<template>
  <div>
    <input type="button" value="push" @click="pushItem" />
    <input type="button" value="pop" @click="popItem" />
    <input type="button" value="shift" @click="shiftItem" />
    <input type="button" value="unshift" @click="unshiftItem" />
    <input type="button" value="splice" @click="spliceItem" />
    <input type="button" value="sort" @click="sortItem" />
    <input type="button" value="reverse" @click="reverseItem" />

    <li v-for="items in ToDoItems" :key="items.id">
      {{ items.id }}
    </li>
  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";
export default {
  methods: {
    pushItem() {
      this.ToDoItems.push({
        id: uniqueId("todo-"),
        label: "newItem",
        done: false,
      });
    },
    popItem() {
      this.ToDoItems.pop();
    },
    shiftItem() {
      this.ToDoItems.shift();
    },
    unshiftItem() {
      this.ToDoItems.unshift({
        id: uniqueId("todo-"),
        label: "newItem",
        done: false,
      });
    },
    spliceItem() {
      this.ToDoItems.splice(2, 0, {
        id: uniqueId("todo-"),
        label: "newItem",
        done: false,
      });
    },
    sortItem() {
      this.ToDoItems.sort(compare);
      function compare(a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      }
    },
    reverseItem(){
        this.ToDoItems.reverse();
    }
  },
  props: {
    ToDoItems: Array,
  },
};
</script>
