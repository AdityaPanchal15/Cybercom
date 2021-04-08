<template>
  <div>
    <slider :links="links" />
    <image-1 :contentObj="contentObj" />
    <image-details :imgDetails="imgDetails[type]" />
    <footer-component />

    <router-view />
  </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import Image1 from "../components/Image.vue";
import ImageDetails from "../components/ImageDetails.vue";
import Slider from "../components/Slider.vue";
export default {
  props: {
    type: String,
  },
  data() {
    return {
      imgDetails: {
        pureline: [
          {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-klarelinien.jpg",
            title: "Klare Linien",
            content:
              "Klare architektonische Formen und Linien prägen die Reduziertheit der pureline. So werden zum Beispiel die Abdeckung, die Front und die Sichtseiten in einem Material alles bündig auf einer Flucht ausgeführt.",
          },
          {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-holz.jpg",
            title: "Starke innere Werte",
            content:
              "Das Innenleben kann nach Wunsch in Holz oder einem beliebigen passenden Material ausgeführt werden. Exklusive Innenausstattungen die den täglichen Alltag erleichtern, können nach Ihren Bedürfnissen erweitert werden. Das Bild zeigt eine Brotschublade aus massivem Ahornholz mit Brotschieber. Das Brot wird in einem Tontopf gelagert, was die Haltbarkeit verlängert.",
          },
          {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-beleuchtung.jpg",
            title: "Es werde Licht",
            content:
              "Innenbeleuchtung, welche beim Öffnen der Schublade automatisch einschaltet, gehört nach Wunsch zum Standard. Ebenso kann die Küche komplett grifflos mit elektrisch öffnenden Schubladen-Auszügen ausgestattet werden.",
          },
        ],
        greenline: [
          {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/greenline/A-Besteckeinsatz2.jpg",
            title: "Handwerk und Fortschritt vereint mit Ökologie",
            content:
              "Innovative leimfreie Holzverbindungen kombiniert mit dem Einsatz von modernen CNC-Maschinen eröffnen neue und einzigartige Möglichkeiten und Lösungen. Das Traditionelle Handwerk wird somit neu interpretiert.",
          },
          {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/greenline/Bearbeiten-Holzlager.jpg",
            title: "Konsequent regional",
            content:
              "Die Lindauer AG hat es sich zum Ziel gesetzt, mit der Greenline Küche ein Produkt vorzustellen, das durch und durch ökologisch ist, und auch mit Architektur und Gestaltung kombiniert werden kann. Dabei soll die graue Energie auf ein Minimum reduziert werden. Einer der wichtigsten Ansätze ist deswegen die Regionalität. Als graue Energie wird die Energiemenge bezeichnet, die für ein Produkt benötigt wird – nicht nur für die Herstellung, sondern auch für Lieferung, Lagerung, den Verkauf und die Entsorgung. Alle Materialien der Greenline Küche werden in der Region produziert und verarbeitet. Es entstehen minimale Transportwege und eine erstrebenswerte regionale Wertschöpfung. So wird eine Küche produziert, die unserer Verantwortung gegenüber der Natur und den Menschen der Region Rechnung trägt.",
          },
          {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/greenline/lindauer-greenline-glas.jpg",
            title: "Respekt vor dem Rohstoff",
            content:
              "Ein weiterer wichtiger Aspekt beim Bau einer ökologischen Küche ist das Recycling. Das bedeutet unter anderem, dass eine Greenline Küche dank ihrer natürlichen Verarbeitung nach langer Nutzungsdauer restlos recycelt werden kann. Zudem verwendet die Lindauer AG für alle liegenden Teile der «greenline» Küchen wertvolles Recycling-Glas. Für Tablare sowie Böden von Korpus und Schubladen kommt Glas aus alten Fabrikgebäuden zum Einsatz. Die Fläche der Glasscheibe wird aufpoliert, die Kanten aus Sicherheitsgründen abgerundet – und schon hat dieses hochwertige alte Material eine neue, attraktive Verwendung gefunden. Perfekt ergänzt wird diese durchdachte Auswahl an Rohstoffen durch die Verwendung von attraktivem Guber Quarzsandstein aus der Innerschweiz für die Arbeitsflächen. Die optisch und haptisch ansprechende Oberfläche des seilgesägten Materials zeigt beeindruckend, dass Ökologie und Eleganz durchaus Hand in Hand gehen können.",
          },
        ],
        classicline: [
          {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/classicline/lindauer-classicline-materialvielfalt.jpg",
            title: "Grosse Materialvielfalt",
            content:
              "Die classicline bietet eine unbegrenzte Materialvielfalt: Kombinationen von attraktiven und praktischen Materialien und Formen angepasst auf Ihre Bedürfnisse entsprechend dem Budget, den Raumverhältnissen und der Einsatzweise. Von Preiswert bis exklusiv, die classicline lässt alles offen. Durch die Eigenproduktion erhalten Sie eine echte Schreinerküche hergestellt nach Ihren Wünschen.",
          },
           {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/pureline/lindauer-pureline-holz.jpg",
            title: "Praktische Küchenhelfer",
            content:
              "Raffinierte Arbeitsgeräte und eine praktisch eingeteilte Inneneinrichtung der Küche erleichtern Ihren Arbeitsalltag. Neben den praktischen Vorteilen ist das Innenleben ein optisches Highlight und macht Ihre Küche wertig und auch auf den zweiten Blick attraktiv.",
          },
           {
            url:
              "https://www.lindauerag.ch/cms/upload/bilder/kuechenbau/classicline/lindauer-classicline-umbauen.jpg",
            title: "Umbauen aus einer Hand",
            content:
              "Umbauen aus einer Hand: Sie planen Ihre Kücheneinrichtung zu erneuern oder durch das entfernen einer Mauer eine neue Wohnungeinteilung zu erreichen. Gerne helfen wir Ihnen dabei und übernehmen die Bauleitung und die Koordination der Handwerker.",
          },
        ],
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
