<template>
  <div class="fontuser">
    <input type="text" placeholder="Search Brands" name="brand" required />
    <v-icon class="icon">mdi-shield-search</v-icon>
    <div class="brandsPage-filter-chars">
      <div
        v-for="(brand, i) in AtoZ"
        :key="i"
        :class="['brandsPage-filter-char', { available: brand.available }]"
      >
        {{ brand.char }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
}
</script>
<style scoped>
.brandsPage-filter-chars {
  color: #e4e4e4;
  display: flex;
  text-align: center;
  text-transform: capitalize;
  flex-wrap: wrap;
  font-size: 20px;
  line-height: 2.1;
}
div {
  display: block;
}
.brandsPage-filter-char {
  width: 20%;
}
.brandsPage-filter-chars .available {
  color: #010101;
  cursor: pointer;
}
.brandsPage-filter-chars .available:hover {
  color: blue;
}
.fontuser {
  position: relative;
}

.fontuser .icon {
  position: absolute;
  left: 10px;
  top: 14px;
  color: gray;
}
input[type='text'] {
  width: 100%;
  padding: 5px 40px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>
