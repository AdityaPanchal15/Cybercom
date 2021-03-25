<template>
  <div>
    <h1>Forms</h1>
    <p>Text</p>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>

    <p>CheckBox</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <br /><br />
    <p>Multiple checkboxes, bound to the same Array:</p>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>

    <br /><br />
    <p>Radio</p>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>

    <br /><br />
    <p>Select</p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>

    <br /><br />
    <p>Multiple select (bound to Array):</p>
    <select v-model="selectedMultiple" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <span>Selected: {{ selectedMultiple }}</span>

    <br /><br />
    <p>Dynamic options rendered with v-for:</p>
    <select v-model="selectedDynamic">
      <option
        v-for="(option, index) in options"
        v-bind:value="option.value"
        :key="index"
      >
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selectedDynamic }}</span>

    <br /><br /><br />
    <h1>Value Binding</h1>

    <p>checkbox</p>
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <p>{{ toggle }}</p>

    <p>radio</p>
    <input type="radio" v-model="pick" :value="a" />
    <p>{{ pick }}</p>

    <p></p>
    <select v-model="selected">
      <!-- inline object literal -->
      <option :value="{ number: 123 }">123</option>
    </select>
    <p>{{selected}}</p>

    <h1>Modifiers</h1>
    <p>1.lazy</p>
    <input v-model.lazy="msg">
    <p>{{msg}}</p>

    <p>2.number</p>
    <input v-model.number="age" type="number">

    <p>3.trim</p>
    <input v-model.trim="msg">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      checked: false,
      checkedNames: [],
      picked: "",
      selected: "",
      selectedMultiple: [],
      selectedDynamic: "",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      toggle: "no",
      pick: false,
      a: "a",
      msg:'',
      age:''
    };
  },
};
</script>
