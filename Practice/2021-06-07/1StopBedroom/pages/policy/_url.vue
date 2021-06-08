<template>
  <v-col>
    <v-card v-if="policy" tile flat class="pa-2 px-4 grey lighten-5">
      {{ changeLayout(policy) }}
      <v-card-title class="blue--text">
        {{ policy.content.contentHeading }}
      </v-card-title>
      <v-card-text v-html="policy.content.contentDetails"></v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import gql from 'graphql-tag'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      newPath: this.$route.params.url,
    }
  },
  head() {
    return {
      title: this.policy ? this.policy.pageInfo.pageTitle : '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.policy ? this.policy.metaData.description : '',
        },
      ],
    }
  },
  methods: {
    ...mapMutations('policy', ['changeLayout']),
  },
  apollo: {
    policy: {
      query: gql`
        query getPolicy($url: String) {
          policy(url: $url) {
            pageInfo {
              pageTitle
              url
              status
            }
            metaData {
              description
            }
            content {
              contentHeading
              contentDetails
            }
            design {
              layout
            }
          }
        }
      `,
      variables() {
        return {
          url: this.$route.params.url,
        }
      },
    },
  },
}
</script>
<style scoped>
h1 {
  color: red;
}
</style>
