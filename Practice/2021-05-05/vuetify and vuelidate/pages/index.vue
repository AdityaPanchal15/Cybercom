<template>
  <div>
    <p>{{ $auth.$state }}</p>
    <v-btn @click="loginWithGoogle">Login</v-btn>
    <p>
      URL from ngrok:
      <a :href="this.$config.ngrok.url">{{ this.$config.ngrok.url }}</a>
    </p>
    <button @click="$router.push({ path: '/', query: { foo: foo + 1 } })">
      Bump foo
    </button>
    
    <!-- <form-1/> -->
    <!-- <Form/> -->
    <!-- <async-validation/> -->
    <!-- <delay-validation-error/> -->
    <dynamic-validation />
    <vuetify-component/>
  </div>
</template>

<script>
import form1 from "../components/form1.vue";
import Form from "../components/form.vue";
import AsyncValidation from "~/components/asyncValidation.vue";
import DelayValidationError from "~/components/delayValidationError.vue";
import DynamicValidation from "~/components/dynamicValidation.vue";
import VuetifyComponent from '~/components/vuetifyComponent.vue';
export default {
  components: {
    form1,
    Form,
    AsyncValidation,
    DelayValidationError,
    DynamicValidation,
    VuetifyComponent
  },
  watchQuery: ["foo"],
  data() {
    return {
      foo: 1
    };
  },
  asyncData({ query }) {
    if (query.foo) {
      return { foo: parseInt(query.foo, 10) };
    }

    return {};
  },

  created() {
    console.log(this.$auth.loggedIn);
  },
  methods: {
    loginWithGoogle() {
      this.$auth.loginWith("google", { params: { prompt: "select_account" } });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
