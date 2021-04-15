<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="display-1">All Question</h1>
            <v-spacer></v-spacer>
            <nuxt-link
              class="text-decoration-none"
              to="/admin/questions/create"
            >
              <v-btn small class="grey darken-2" dark>Add</v-btn>
            </nuxt-link>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="questions"
              class="elevation-1"
            >
              <template #item="props">
                <tr>
                  <td class="pa-3">{{ props.item.question }}</td>
                  <td class="pa-3">{{ props.item.option1 }}</td>
                  <td class="pa-3">{{ props.item.option2 }}</td>
                  <td class="pa-3">{{ props.item.option3 }}</td>
                  <td class="pa-3">{{ props.item.option4 }}</td>
                  <td class="pa-3">
                    <v-icon small color="red">mdi-delete</v-icon>
                    <nuxt-link
                      class="text-decoration-none"
                      :to="`/admin/questions/${props.item.id}`"
                    >
                      <v-icon small color="green">mdi-pencil</v-icon>
                    </nuxt-link>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Question', value: 'question' },
        { text: 'Option 1', value: 'option1' },
        { text: 'Option 2', value: 'option2' },
        { text: 'Option 3', value: 'option3' },
        { text: 'Option 4', value: 'option4' },
        { text: 'Action', value: 'action' },
      ],
      questions: [],
    }
  },
  created() {
    this.fetchQuestions()
  },

  methods: {
    fetchQuestions() {
      this.$axios
        .get(
          `https://nuxt-quiz-ad98d-default-rtdb.firebaseio.com/quiz/questions.json`
        )
        .then((res) => {
          this.questions = Object.keys(res.data).map((key, index) => {
            res.data[key].id = key
            // console.log(res.data[key])
            return res.data[key]
          })
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
