<template>
  <v-col cols="9">
    <slot :policy="policy"></slot>
    <v-card tile flat class="pa-2 px-4 grey lighten-5">
      <v-card-title class="blue--text">
        {{ policy.content.contentHeading }}
      </v-card-title>
      <v-card-text v-html="policy.content.contentDetails"></v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import gql from 'graphql-tag'
export default {
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
  head() {
    return {
      title: this.policy.pageInfo.pageTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.policy.metaData.description,
        },
      ],
    }
  },
}
</script>
