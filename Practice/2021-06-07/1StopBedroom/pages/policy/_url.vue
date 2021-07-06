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

.hero-inner {
  background-image: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/1sb-general/help-center-bg.png?vca6c2565);
  background-position: center;
  background-size: cover;
  height: 230px;
  margin-bottom: 45px;
  padding: 60px 20px;
  text-align: center;
  width: 100%;
  contain: none;
}

.hero-inner > h1 {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
}
.sub-heading {
  font-weight: 800;
  font-size: 50px;
  line-height: 50px;
  margin-bottom: 7px;
  color: #fff;
  text-transform: uppercase;
}
.row {
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
}

.categories_row {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
}
.categories_row li {
  list-style: none;
}
.categories_row > .categories_block {
  float: left;
  width: 33.33%;
  padding: 0 20px !important;
  flex-direction: column;
  margin-bottom: 30px;
}
.categories_block_inner {
  height: 100%;
  background: #f6f7f9;
  padding: 20px;
}
.category-item-title {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  color: #001733;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 0;
  text-transform: uppercase;
}
.categories_block_content .categories-article-list {
  padding-left: 0;
}
.categories_block_content li {
  margin-bottom: 14px;
}
.categories-article-list li a {
  color: #174b8b;
  font-size: 17px;
  line-height: 22px;
  font-weight: 600;
}
.need_further_block {
  padding: 0 20px;
}
.categories_block_content_inner {
  background: #f6f7f9;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.help_heading {
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  color: #333;
  text-align: center;
  margin-bottom: 0;
  padding: 10px 10px 15px 10px;
}
.need_further_block .help_heading .contact_us {
  background: #005ccc;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 18px;
  width: 208px;
  display: inline-block;
  color: #fff;
  margin: 10px auto 0 10px;
}
</style>
