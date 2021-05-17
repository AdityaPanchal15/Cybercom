<template>
  <div class="container">
    <h1 class="text-4xl mb-8">GraphQL Tutorial</h1>
    <div class="flex">
      <ul class="w-64 px-2 text-gray-600">
        <li v-for="(character, i) in characters.results" :key="i">
          <nuxt-link
            :to="character.id"
            class="hover:font-bold hover:text-gray-900 lleading-loose"
          >
            {{ character.name }}
          </nuxt-link>
        </li>
      </ul>
      <div class="flex-grow bg-white min-h-full">
        <nuxt-child :key="$route.params.id"></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
export default {
  apollo: {
    characters: gql`
      query getCharacters {
        characters {
          results {
            id
            name
            status
          }
        }
      }
    `,
  },
}
</script>
