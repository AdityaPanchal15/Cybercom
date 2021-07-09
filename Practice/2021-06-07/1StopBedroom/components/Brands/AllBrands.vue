<template>
  <div>
    <div v-for="(character, i) in AtoZ" :key="i">
      <div class="brandsPage-list-char">
        {{ character.char }}
      </div>
      <v-row v-if="brands">
        <v-col v-for="(item, j) in brands" :key="j" cols="4">
          <nuxt-link :to="item.link">
            <img
              :src="item.src"
              :alt="item.name"
              :title="item.name"
              class="brandsPage-list-item"
            />
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastChar: null,
      brands: null,
      AtoZ: [
        { char: 'A', available: true },
        { char: 'B', available: true },
        { char: 'C', available: true },
        { char: 'D', available: true },
        { char: 'E', available: true },
        { char: 'F', available: true },
        { char: 'G', available: true },
        { char: 'H', available: true },
        { char: 'I', available: true },
        { char: 'J', available: true },
        { char: 'K', available: true },
        { char: 'L', available: true },
        { char: 'M', available: true },
        { char: 'N', available: true },
        { char: 'O', available: true },
        { char: 'P', available: true },
        { char: 'Q', available: false },
        { char: 'R', available: true },
        { char: 'S', available: true },
        { char: 'T', available: true },
        { char: 'U', available: true },
        { char: 'V', available: true },
        { char: 'W', available: false },
        { char: 'X', available: false },
        { char: 'Y', available: false },
        { char: 'Z', available: true },
      ],
    }
  },
  methods: {
    setLastChar(char) {
      this.lastChar = char
    },
    getBrandsCharacterWise(character) {
      this.$axios
        .post('http://localhost:4000/graphql', {
          query: `
            query($char:String!){
            brands(char:$char){
                name
                src
                link
            }
        }
          `,
          variables: {
            char: character,
          },
        })
        .then((res) => {
          console.log(res)
          this.brands = res.data.data.brands
        })
    },
  },
}
</script>
<style scoped>
.brandsPage-list-item {
  border: 2px solid transparent;
  font-size: 0;
  height: 165px;
  padding: 20px;
  width: 320px;
  transition: 0.2s linear;
  background-origin: content-box;
  background-color: #f5f5f5;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.brandsPage-list-item:hover {
  border: 2px solid #001733;
}
.brandsPage-list-char {
  font-weight: 600;
  border-bottom: solid 1px #ebebeb;
  color: #565656;
  font-size: 28px;
  margin-bottom: 20px;
  display: block;
}
</style>
