<template>
  <v-col>
    <v-card v-if="policy" tile flat class="pa-2 px-4 grey lighten-5">
      {{ changeLayout(policy) }}
      <div class="page-title">
        <h1>{{ policy.content.contentHeading }}</h1>
      </div>
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
<style>
.cms-page-cnt {
  width: 90%;
  color: #001733;
}

/* privacy-policy */
.cms-wrapper-privacy-policy > h4 {
  padding: 10px 0 10px 0;
  border-top: 1px solid rgb(173, 173, 173);
}

/* return-policy */
.first-big-title {
  font-size: 14px;
}
.fees-deduction-area ol {
  margin: 0 0 10px 0;
}
dl::after {
  border-bottom: 1px solid black;
}
dl dt {
  margin: 22px 0 6px 0;
  padding: 0;
  font-size: 17px;
  color: #001733;
  line-height: normal;
  font-weight: 500;
}
dl dd {
  margin: 0 0 10px 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
ol li {
  padding: 4px 0;
  margin: 0 0 0 15px;
  font-size: 14px;
  line-height: 21px;
}
.returned {
  background: #faebe7;
  padding: 12px 20px 12px;
  margin: 0 0 20px 0;
}
.expert-tip-main {
  border: 1px solid #d6d6d6;
  padding-left: 15px;
  padding-right: 15px;
}
.expert-tip .content {
  background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/tips_icon.png?vd5aa2377)
    0 4px no-repeat;
  padding-left: 42px;
}
.cancellation-policy p {
  font-size: 16px;
  line-height: normal;
  margin-top: 12px;
}
dl dt.live-chat-title {
  font-weight: 700;
  font-size: 18px;
  margin: 0 0 24px;
  padding: 9px 0;
  display: block;
  border-bottom: 1px solid #ddd;
}
.page-title h1 {
  font-size: 25px;
  font-weight: 700;
  color: #003980;
}
.return-policy-content.cms-page-cnt ol {
  padding: 10px 20px 12px;
  background: white;
  margin-bottom: 10px;
}
.page-title {
  padding: 10px 15px;
  margin: 0;
}
</style>
