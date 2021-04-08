<template>
  <div class="container">
    <div class="contentSpace">
      <div class="row">
        <div
          class="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 text-center"
        >
          <h3 class="borderbottom">{{contentObj.title}}</h3>
          <h2 class="contentItalic">
            {{contentObj.lightQuote}}
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 text-center pushbelow">
          <p>
            <span class="smallTitle">{{contentObj.smallTitle}}</span>
          </p>
          <p>
            <span class="para">
              {{contentObj.para}}
            </span>
          </p>
        </div>
      </div>
    </div>

    <h3>{{kitchenTitle}}</h3>
    <div class="row pushbelow">
      <div
        class="col-xs-12 col-sm-4 col-md-4 grid-item"
        v-for="card in bgImage"
        :key="card.title"
      >
        <a :href="card.url" class="teaser">
          <div
            :class="{ kitchenCard: true }"
            :style="{ 'background-image': `url(${card.imgUrl})` }"
          >
            {{ card.title }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgImage: Array,
    contentObj:Object,
    kitchenTitle:String
  },
};
</script>

<style scoped>
.kitchenCard {
  background-position: center;
  background-repeat: no-repeat;
  color: gray;
  text-align: center;
  background-size: cover;
  width: 360px;
  height: 250px;
  padding-top: 25%;
  font-weight: bold;
  font-size: 25px;
  margin: 10px 0px 40px 0px;
}
.kitchenCard:hover {
  background: gray;
  transition-duration: 0.5s;
}
h3 {
  color: gray;
}
.borderbottom {
  color: rgb(58, 46, 46);
  text-decoration: underline;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
}
.contentSpace {
  margin: 40px 0 40px 0;
}
.contentItalic {
  color: rgb(202, 201, 201);
  font-style: italic;
  letter-spacing: 3px;
}
.smallTitle {
  color: #000000;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-weight: 400;
}
.para {
  font-family: "Avenir Next W01 Light", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-weight: 400;
}
</style>