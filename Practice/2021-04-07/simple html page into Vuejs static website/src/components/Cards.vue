<template>
  <div class="container">
    <div class="row myspace">
      <div class="col-xs-12">
        <a
          class="home-h1"
          style="display: inline-block; margin-right: 12px"
          href="/ueber-uns/aktuell/"
          >Aktuell</a
        >
        <a href="/ueber-uns/aktuell/">mehr erfahren</a>
      </div>
    </div>

    <div class="row pushbelow">
      <div
        class="col-xs-12 col-sm-4 col-md-4 grid-item mycard"
        v-for="card in cards"
        :key="card.index"
      >
        <a :href="card.url" class="teaser">
          <img :src="card.avatar" class="img-responsive" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.content }}</p>
        </a>
      </div>
    </div>

    <div class="row pushbelow">
      <div
        class="col-xs-12 col-sm-4 col-md-4 grid-item"
        v-for="card in cards"
        :key="card.index"
      >
        <a :href="card.url" class="teaser">
          <div class="kitchenCard">Pure Line</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      cards:Object
  },
  
};
</script>

<style scoped>
.myspace {
  margin: 40px 0px;
}
.home-h1 {
  color: gray;
  font-size: 30px;
}
h3,
p {
  color: rgb(46, 45, 45);
}
.mycard:hover {
  opacity: 0.6;
  transition-duration: 0.5s;
}
.kitchenCard {
  background-image: url("https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/teaser-greenline-lindauer.jpg" );
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  color: white;
  text-align: center;
  background-size: cover;
  width: 360px;
  height: 200px;
  padding-top: 20%;
  font-weight: bold;
  font-size: 25px;
  margin: 40px 0px;
}
.kitchenCard:hover {
  background: gray;
  transition-duration: 0.5s;
}
div a,
a:hover {
  text-decoration: none;
}
</style>