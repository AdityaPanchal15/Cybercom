<template>
  <div class="mattress-builder">
    <div class="inner">
      <div class="title">
        <v-row>
          <v-col cols="3">
            <h2><span>Mattress Finder</span></h2>
          </v-col>
          <v-col cols="6">
            <p class="easy-steps-text-desktop">
              In <span>3 easy steps</span> You’ll be on your way to a better
              night’s sleep
            </p>
            <v-stepper
              v-model="stepCompleted"
              alt-labels
              class="blue lighten-5 widthStepper"
            >
              <v-stepper-header>
                <v-stepper-step step="1" :complete="stepCompleted > 1">
                  Size
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="2" :complete="stepCompleted > 2">
                  Position
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3" :complete="stepCompleted > 3">
                  Comfort
                </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-col>
          <v-col cols="3">
            <v-img
              src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/mattress-top-icn.png"
              width="90%"
              class="mt-10"
            ></v-img>
          </v-col>
        </v-row>
      </div>
      <br /><br />
      <div
        v-if="
          mattresses_size &&
          mattresses_position &&
          mattresses_comfort &&
          !filteredMattresses
        "
      >
        <img
          src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/mattress_loader.gif"
          alt="loader"
          class="loaderStyle"
        />
        <p class="text-center">We are searching for your mattresses...</p>
      </div>
      <div v-else>
        <slot :filterData="filteredMattresses"></slot>
      </div>
      <h2 v-if="!mattresses_comfort" class="font-weight-light py-3">
        What size are you looking for?
      </h2>
      <v-row v-if="!mattresses_size">
        <v-col v-for="(size, i) in sizes" :key="i">
          <a href="javascript:void(0)" @click="setMattressesSize(size.name)">
            <v-card class="white" rounded="2">
              <v-card-title class="justify-center">
                <img :src="size.src" :alt="size.name" :title="size.name" />
              </v-card-title>
              <v-card-text>
                <h2 class="text-center">{{ size.name }}</h2>
              </v-card-text>
            </v-card>
          </a>
        </v-col>
      </v-row>
      <v-row v-if="mattresses_size && !mattresses_position">
        <v-col v-for="(position, i) in positions" :key="i">
          <a
            href="javascript:void(0)"
            @click="setMattressesPosition(position.title)"
          >
            <v-card class="white" rounded="2">
              <v-card-title class="justify-center">
                <img
                  :src="position.src"
                  :alt="position.name"
                  :title="position.title"
                />
              </v-card-title>
              <v-card-text>
                <h2 class="text-center">{{ position.name }}</h2>
              </v-card-text>
            </v-card>
          </a>
        </v-col>
      </v-row>
      <v-row
        v-if="mattresses_size && mattresses_position && !mattresses_comfort"
      >
        <v-col v-for="(comfort, i) in comforts" :key="i">
          <a href="javascript:void(0)" @click="filterMattresses(comfort.name)">
            <v-card class="white" rounded="2" @click="filterMattresses">
              <v-card-title class="justify-center">
                <img
                  :src="comfort.src"
                  :alt="comfort.name"
                  :title="comfort.name"
              /></v-card-title>
              <v-card-text>
                <h2 class="text-center">{{ comfort.name }}</h2>
                <p class="text-center">{{ comfort.description }}</p>
              </v-card-text>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepCompleted: 1,
      mattresses_size: null,
      mattresses_position: null,
      mattresses_comfort: null,
      filteredMattresses: null,
      sizes: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/twin-size_v1.png',
          name: 'Twin',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/full-size_v1.png',
          name: 'Full',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/queen-size_v1.png',
          name: 'Queen',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/king-size_v1.png',
          name: 'King',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/california-king-size_v1.png',
          name: 'California King',
        },
      ],
      positions: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/back-side_v1.png',
          name: 'On my back side',
          title: 'Back/Side',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/stomach_v1.png',
          name: 'On my stomach',
          title: 'Stomach',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/not-sure_v1.png',
          name: "I'm not sure",
          title: 'Not Sure',
        },
      ],
      comforts: [
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/firm_v1.png',
          name: 'Firm',
          description: 'Very supportive with just a little cushion.Back/Side',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/plush_v1.png',
          name: 'Plush',
          description: 'Support with enhanced layers of cushion.',
        },
        {
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/mattress_builder/ultra-plush_v1.png',
          name: 'Ultra Plush',
          description: 'Lots of cushioning layers and soft materials.',
        },
      ],
    }
  },
  methods: {
    setMattressesSize(size) {
      this.mattresses_size = size
      this.stepCompleted = 2
    },
    setMattressesPosition(size) {
      this.mattresses_position = size
      this.stepCompleted = 3
    },
    filterMattresses(comfort) {
      this.mattresses_comfort = comfort
      this.stepCompleted = 4
      this.$axios
        .post('http://localhost:4000/graphql', {
          query: `
            query($categoryType:String,$mattress_size: String,$mattress_position:String,$mattress_comfort:String){
                subCategoryFilter(categoryType:$categoryType,mattress_size:$mattress_size,mattress_position:$mattress_position,mattress_comfort:$mattress_comfort){
                    mattress_type
                    mattress_comfort
                    mattress_thickness
                    mattress_top
                    specialPrice
                    src
                    title
                    subTitle
                    webId
                    price
                    specialPrice
                    originalPrice
                    numberOfRating
                    rating
                    sku
                }
            }
        `,
          variables: {
            mattress_size: this.mattresses_size,
            mattress_position: this.mattresses_position,
            mattress_comfort: this.mattresses_comfort,
            categoryType: this.$route.params.subCategory,
          },
        })
        .then((res) => {
          this.filteredMattresses = res.data.data.subCategoryFilter
        })
        .catch((err) => {
          console.log(err)
        })
      this.$store.commit('mattressFilter/setMattressSize', this.mattresses_size)
      this.$store.commit(
        'mattressFilter/setMattressComfort',
        this.mattresses_comfort
      )
    },
  },
}
</script>
<style scoped>
.loaderStyle {
  margin-left: 47%;
  margin-bottom: 10px;
  border-radius: 50%;
}
.mattress-builder {
  background: #e5eefa;
  margin-bottom: 20px;
  padding: 23px 0;
}
.mattress-builder .inner {
  max-width: 1300px;
  margin: 0 auto;
  clear: both;
}
.mattress-builder .inner .title {
  position: relative;
}
.mattress-builder .title h2 {
  height: 78px;
  line-height: 78px;
  background: #005ccc;
  color: #fff;
  font-size: 29px;
  font-weight: 600;
  margin-top: 6vh;
  margin-right: 3vh;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  border-radius: 3px;
}
.mattress-builder .easy-steps-text-desktop span {
  color: #fe7423;
}
.mattress-builder .title h2 span {
  display: inline-block;
  zoom: 1;
  position: relative;
  padding-left: 0;
}
.mattress-builder .title h2::after {
  content: '';
  position: absolute;
  right: -12px;
  top: 50%;
  margin-top: -12px;
  width: 0;
  height: 0;
  display: block;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid #005ccc;
  border-right: none;
}
.mattress-builder .easy-steps-text-desktop {
  color: #666;
  line-height: 23px;
}

/* .mattress-builder .top-tabs {
  width: 66%;
  margin: 0 auto;
  padding: 21px 0 0 0;
  text-align: left;
  left: -133px;
  position: relative;
  float: left;
}
.mattress-builder .top-tabs li.success {
  cursor: pointer;
}
ol,
ul,
li {
  list-style: none;
}
.mattress-builder .top-tabs li {
  float: left;
  width: 33.33333333333333%;
}
.mattress-builder .top-tabs li.success .inner::before {
  background: #003980;
  height: 4px;
  margin-bottom: 0;
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
}
.category-mattresses .main-container .main,
.mattress-builder .inner {
  max-width: 1300px;
  margin: 0 auto;
  clear: both;
}
.mattress-builder .top-tabs li.success span {
  border-color: #fff;
  background: #003980;
  border: 4px solid #003980;
  color: #000;
  position: relative;
  border-radius: 25px;
  z-index: 10;
  width: 27px;
  height: 27px;
  display: inline-block;
  text-indent: -9999px;
  margin: -13px 0 0;
  padding: 0;
}
.mattress-builder .top-tabs li h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  margin-left: 10px;
  text-transform: uppercase;
  zoom: 1;
  display: block;
  text-align: center;
  padding: 0;
  color: #a7b8cd;
}
.mattress-builder .top-tabs li.success h3 {
  color: #003980;
} */
.mattress-img-top {
  display: block;
}
.mattress-builder .inner .image-center {
  margin: 1vh 7vh;
}
</style>
