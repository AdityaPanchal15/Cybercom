<template>
  <v-container>
    <v-layout>
      <v-flex xs8 offset-xs2>
        <v-card>
          <v-card-title>
            <h1 class="display-1">Edit Question</h1>
            <v-spacer></v-spacer>
            <nuxt-link class="text-decoration-none" to="/admin/questions">
              <v-btn small class="grey darken-2" dark>Back</v-btn>
            </nuxt-link>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="update">
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
              <v-btn color="indigo" block dark type="submit">Update</v-btn>
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
      answer_id: '',
    }
  },
  created() {
    this.get()
    this.getAnswer()
    //   console.log(this.$route.params.edit)
  },
  methods: {
    get() {
      this.$axios
        .get(
          `https://nuxt-quiz-ad98d-default-rtdb.firebaseio.com/quiz/questions/${this.$route.params.edit}.json`
        )
        .then((res) => {
          this.quiz = res.data
        })
        .catch((err) => console.log(err.response.data))
    },
    update() {
      this.$axios
        .$patch(
          `https://nuxt-quiz-ad98d-default-rtdb.firebaseio.com/quiz/questions/${this.$route.params.edit}.json`,
          this.quiz
        )
        .then((res) => this.updateAnswer())
        .catch((err) => console.log(err.response.data))
    },
    getAnswer() {
      this.$axios
        .$get(
          `https://nuxt-quiz-ad98d-default-rtdb.firebaseio.com/quiz/answers.json?orderBy="question_id"&
          startAt="${this.$route.params.edit}"&endAt="${this.$route.params.edit}"`
        )
        .then((res) => {
          this.correct = Object.values(res)[0].answer
          this.answer_id = Object.keys(res)[0]
        })
        .catch((err) => console.log(err.response.data))
    },
    updateAnswer() {
      this.$axios
        .patch(
          `https://nuxt-quiz-ad98d-default-rtdb.firebaseio.com/quiz/answers/${this.answer_id}.json`,
          {
            question_id: this.$route.params.edit,
            answer: this.correct,
          }
        )
        .then((res) => this.$router.push('/admin/questions'))
        .catch((err) => console.log(err))
    },
  },
}
</script>
