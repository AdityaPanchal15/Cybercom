<template>
  <v-app>
      <v-main class="ma-3">
        <v-alert elevation="16" border="top" type="success"
          >I'm an Alert Usage Example</v-alert
        >
        <v-alert border="top" color="red lighten-2" dark>
          I'm an alert with a top border and red color
        </v-alert>
        <v-alert
          border="right"
          type="error"
          colored-border
          color="blue-grey"
          elevation="2"
          dismissible
        >
          I'm an alert with a right border and blue-grey color
        </v-alert>
        <v-alert border="bottom" color="pink darken-1" dark>
          I'm an alert with a bottom border and pink color
        </v-alert>
        <v-alert outlined color="purple">
          <div class="title">
            Lorem Ipsum
          </div>
          <div>
            Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
            nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at
            velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean
            posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
            sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum eu
            pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante
            odio sit amet eros.
          </div>
        </v-alert>
        <v-chip
          color="red lighten-4"
          class="ml-0 mr-2 black--text"
          label
          small
        >
          5 new
        </v-chip>
         <v-btn
          ref="button"
          block
          color="primary"
          @click="$vuetify.goTo(0,{
            duration:2000
          })"
        >
          scroll
        </v-btn>
      </v-main>
    </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>