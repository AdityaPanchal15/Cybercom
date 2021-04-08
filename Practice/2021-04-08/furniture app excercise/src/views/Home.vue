<template>
  <div>
    <slider :links="links" />
    <cards :cards="cards" />
    <image1 :bgImage="bgImageObj" :contentObj="contentObj" kitchenTitle="KÜCHEN"/>
    <parllax />
    <footer-component />
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import FooterComponent from '../components/FooterComponent.vue';
import Image1 from "../components/Image.vue";
import Parllax from "../components/Parllax.vue";
import Slider from "../components/Slider.vue";
export default {
  data() {
    return {
      contentObj:{
        title:"Moderne Formen nachhaltig verarbeitet",
        lightQuote:"  &laquo;Wir haben die Erde nicht von unseren Eltern geerbt, sondern von unseren Kindern geliehen.&raquo;",
        smallTitle:"(Indianische Weisheit)",
        para:"Aus Freude zum Sch&ouml;nen entstehen in unser Werkstatt in Steinen neue moderne Kreationen,\ndie mit einer langen Lebensdauer die Grundlage unserer Produkte bilden.\n Mit unserer Fertigung und unseren Produkten versuchen wir einen m&ouml;glichst kleinen Fussabdruck zu hinterlassen. \nDabei schaffen wir mit viel Sorgfalt und Empathie einen Mehrwert f&uuml;r unsere Kunden. ",
      },
      links: [
        {
          url:
            "https://www.lindauerag.ch/cms/cache/46a284f1428eda018b1d7c5fd4eafbe1.jpg",
          name: "Los Angeles",
          isActive: true,
        },
        {
          url:
            "https://www.lindauerag.ch/cms/cache/8e01fc1a77c2105a983147e045881a43.jpg",
          name: "Chicago",
          isActive: false,
        },
        {
          url:
            "https://www.lindauerag.ch/cms/cache/38a83113c9fc10547b774190fb9e88f6.jpg",
          name: "New York",
          isActive: false,
        },
      ],
      cards: [
        {
          url:
            "https://www.lindauerag.ch/ueber-uns/aktuell/schweizer-familie.html",
          avatar:
            "https://www.lindauerag.ch/cms/cache/9ce2168e5294917440b28546887b1249.jpg",
          title: "Wir sind in der Schweizer Familie!",
          content:
            "Ein Artikel &uuml;ber das wunderliche Material, Mondholz und &uuml;ber unsere...",
        },
        {
          url:
            "https://www.lindauerag.ch/ueber-uns/aktuell/brandschutztuere.html",
          avatar:
            "https://www.lindauerag.ch/cms/cache/d4e6db7109f57010bfe9c4b50a797b65.jpg",
          title: "Zertifizierung der Massivholzt&uuml;re",
          content:
            " Bei der Anmeldung beim Institut f&uuml;r Brandschutzpr&uuml;fung war man verwundert. Eine EI30...",
        },
        {
          url: "https://www.lindauerag.ch/ueber-uns/aktuell/mondholz.html",
          avatar:
            "https://www.lindauerag.ch/cms/cache/c97257e9830c213fd2307a6d96f0727a.jpg",
          title: "Mondholz",
          content:
            " Dass der Mond Gezeiten (Ebbe und Flut) bewegt und f&uuml;r Schlafst&ouml;rungen sorgt, ist allgemein...",
        },
      ],
      bgImageObj: [
        {
          imgUrl:
            "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/teaser-pureline-lindauer.jpg",
          title: "Pure Line",
        },
        {
          imgUrl:
            "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/teaser-greenline-lindauer.jpg",
          title: "Green Line",
        },
        {
          imgUrl:
            "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/teaser-classicline-lindauer.jpg",
          title: "Classic Line",
        },
      ],
    };
  },
  components: { Slider, Cards, Parllax, Image1 , FooterComponent},
};
</script>
