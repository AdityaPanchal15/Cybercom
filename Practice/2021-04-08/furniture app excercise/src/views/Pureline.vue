<template>
  <div>
    <slider :links="links" />
    <image-1 :contentObj="contentObj" />
    <image-details :imgDetails="imgDetails.pureline"/>
    <footer-component/>
  </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import Image1 from "../components/Image.vue";
import ImageDetails from '../components/ImageDetails.vue';
import Slider from "../components/Slider.vue";
export default {
  computed:{
    imgDetailsType(){
      return this.imgDetails.find(data=>data===this.type);
    }
  },
  props: {
    type:String
  },
  data() {
    return {
      imgDetails:{
      pureline:[
        {
          url:"https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-klarelinien.jpg",
          title:"Klare Linien",
          content:"Klare architektonische Formen und Linien prägen die Reduziertheit der pureline. So werden zum Beispiel die Abdeckung, die Front und die Sichtseiten in einem Material alles bündig auf einer Flucht ausgeführt."
        },
        {
          url:"https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-holz.jpg",
          title:"Starke innere Werte",
          content:"Das Innenleben kann nach Wunsch in Holz oder einem beliebigen passenden Material ausgeführt werden. Exklusive Innenausstattungen die den täglichen Alltag erleichtern, können nach Ihren Bedürfnissen erweitert werden. Das Bild zeigt eine Brotschublade aus massivem Ahornholz mit Brotschieber. Das Brot wird in einem Tontopf gelagert, was die Haltbarkeit verlängert."
        },
        {
          url:"https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-beleuchtung.jpg",
          title:"Es werde Licht",
          content:"Innenbeleuchtung, welche beim Öffnen der Schublade automatisch einschaltet, gehört nach Wunsch zum Standard. Ebenso kann die Küche komplett grifflos mit elektrisch öffnenden Schubladen-Auszügen ausgestattet werden."
        }
      ],
      greenline:[
        {
          url:"https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-klarelinien.jpg",
          title:"Klare Linien",
          content:"Klare architektonische Formen und Linien prägen die Reduziertheit der pureline. So werden zum Beispiel die Abdeckung, die Front und die Sichtseiten in einem Material alles bündig auf einer Flucht ausgeführt."
        },
        {
          url:"https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-holz.jpg",
          title:"Starke innere Werte",
          content:"Das Innenleben kann nach Wunsch in Holz oder einem beliebigen passenden Material ausgeführt werden. Exklusive Innenausstattungen die den täglichen Alltag erleichtern, können nach Ihren Bedürfnissen erweitert werden. Das Bild zeigt eine Brotschublade aus massivem Ahornholz mit Brotschieber. Das Brot wird in einem Tontopf gelagert, was die Haltbarkeit verlängert."
        },
      ],
      classicline:[
        {
          url:"https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-klarelinien.jpg",
          title:"Klare Linien",
          content:"Klare architektonische Formen und Linien prägen die Reduziertheit der pureline. So werden zum Beispiel die Abdeckung, die Front und die Sichtseiten in einem Material alles bündig auf einer Flucht ausgeführt."
        }
      ]
      },
      contentObj: {
        title: "pureline",
        lightQuote:
          "Reduzierte Formen und Materialien erscheinen in puristischem Glanz.",
        smallTitle: "",
        para:
          "The «pureline» kitchen line combines exclusivity and luxury with design. Reduced shapes and materials, as well as endless possibilities in implementation",
      },
      links: [
        {
          url:
            "https://www.lindauerag.ch/cms/cache/b6718e41a3cad951329750851502bdca.jpg",
          name: "Los Angeles",
          isActive: true,
        },
        {
          url:
            "https://www.lindauerag.ch/cms/cache/4d237a2f41a8300a4d7f0b2468796abd.jpg",
          name: "Chicago",
          isActive: false,
        },
        {
          url:
            "https://www.lindauerag.ch/cms/cache/ed4d9775db8c257f1ec8714b86b71dbf.jpg",
          name: "New York",
          isActive: false,
        },
        {
          url:
            "https://www.lindauerag.ch/cms/cache/d5142c2c531a8083db1b9d9ccbdd8702.jpg",
          name: "New",
          isActive: false,
        },
      ],
    };
  },
  components: { Slider, Image1, FooterComponent, ImageDetails },
};
</script>
