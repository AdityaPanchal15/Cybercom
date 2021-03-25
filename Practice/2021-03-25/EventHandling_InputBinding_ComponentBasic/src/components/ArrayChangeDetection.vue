<template>
  <div>
    <input type="button" value="push" @click="pushItem" />
    <input type="button" value="pop" @click="popItem" />
    <input type="button" value="shift" @click="shiftItem" />
    <input type="button" value="unshift" @click="unshiftItem" />
    <input type="button" value="splice" @click="spliceItem" />
    <input type="button" value="sort" @click="sortItem" />
    <input type="button" value="reverse" @click="reverseItem" />
    <input type="button" value="concat" @click="concatItem" />
    <input type="button" value="slice" @click="sliceItem" />
    <input type="button" value="filterByL" @click="filterByL" />

    <p>Simple Array</p>
    <li v-for="items in ToDoItems" :key="items.id">
      {{ items.id }}
    </li>

    <p>Concated Array</p>
    <li v-for="items in ToDoItemsConcated" :key="items.id">
      {{ items.id }}
    </li>

    <p>Filter Item</p>
    <p>{{ filterItem }}</p>

    <p>Display Filtered/Sorted Result</p>
    <p>{{ evenNumbers }}</p>

    <p>v-for with a Range</p>
    <div>
      <span v-for="n in 10" :key="n">{{ n }} </span>
    </div>

    <p>v-for on a template</p>
    <ul>
      <template v-for="item in ToDoItems">
        <li :key="item.id">{{ item.label }}</li>
      </template>
    </ul>

    <p>v-for with v-if</p>
    <ul v-if="ToDoItems.length">
      <li v-for="todo in ToDoItems" :key="todo.id">
        {{ todo.label }}
      </li>
    </ul>
    <p v-else>No todos left!</p>


  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";
export default {
  data() {
    return {
      ToDoItemsConcated: [{ id: "a" }, { id: "b" }, { id: "c" }],
      filterItem: [],
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter((number) => {
        return number % 2 === 0;
      });
    },
  },
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
    reverseItem() {
      this.ToDoItems.reverse();
    },
    concatItem() {
      this.ToDoItemsConcated = this.ToDoItems.concat(this.ToDoItemsConcated);
    },
    sliceItem() {
      this.ToDoItems = this.ToDoItems.slice(1, 3);
    },
    filterByL() {
      this.filterItem = this.ToDoItems.filter((item) => {
        return item.label.match(/L/);
      });
    },
  },
  props: {
    ToDoItems: Array,
  },
};
</script>
