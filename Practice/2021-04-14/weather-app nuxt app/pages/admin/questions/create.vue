<template>
  <v-container>
    <v-layout>
      <v-flex xs8 offset-xs2>
        <v-card>
          <v-card-title>
            <h1 class="display-1">Add Question</h1>
            <v-spacer></v-spacer>
            <nuxt-link class="text-decoration-none" to="/admin/questions">
              <v-btn small class="grey darken-2" dark>All Question</v-btn>
            </nuxt-link>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="store">
              <v-text-field
                v-model="quiz.question"
                label="question"
                solo
              ></v-text-field>
              <v-text-field
                v-model="quiz.option1"
                label="option 1"
                solo
              ></v-text-field>
              <v-text-field
                v-model="quiz.option2"
                label="option 2"
                solo
              ></v-text-field>
              <v-text-field
                v-model="quiz.option3"
                label="option 3"
                solo
              ></v-text-field>
              <v-text-field
                v-model="quiz.option4"
                label="option 4"
                solo
              ></v-text-field>

              <v-flex>
                <v-radio-group v-model="correct" row>
                  <p class="mr-4">Choose Correct Option</p>
                  <v-radio
                    class="ml-4"
                    :value="quiz.option1"
                    label="Option 1"
                  ></v-radio>
                  <v-spacer></v-spacer>
                  <v-radio
                    class="ml-4"
                    :value="quiz.option2"
                    label="Option 2"
                  ></v-radio>
                  <v-spacer></v-spacer>
                  <v-radio
                    class="ml-4"
                    :value="quiz.option3"
                    label="Option 3"
                  ></v-radio>
                  <v-spacer></v-spacer>
                  <v-radio
                    class="ml-4"
                    :value="quiz.option4"
                    label="Option 4"
                  ></v-radio>
                  <v-spacer></v-spacer>
                </v-radio-group>
              </v-flex>
              <v-btn color="indigo" block dark type="submit">Add</v-btn>
            </form>
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
      quiz: {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
      },
      correct: '',
    }
  },
  methods: {
    store() {
      this.$axios
        .post(
          `https://nuxt-quiz-ad98d-default-rtdb.firebaseio.com/quiz/questions.json`,
          this.quiz
        )
        .then((res) => {
          this.storeAnswer(res.data.name)
        })
        .catch((err) => console.log(err))
    },
    storeAnswer(id) {
      this.$axios
        .post(
          `https://nuxt-quiz-ad98d-default-rtdb.firebaseio.com/quiz/answers.json`,
          { question_id: id, answer: this.correct }
        )
        .then((res) => {
          this.$router.push('/admin/questions')
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
