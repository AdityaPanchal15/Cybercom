<template>
  <v-card flat class="grey lighten-4 pa-2">
    <a
      href="https://www.google.com/maps/place/1StopBedrooms.com/@40.6150144,-73.9583817,14.75z/data=!4m13!1m7!3m6!1s0x89c244c1bd0893c5:0xcd1a28533b13553b!2s1716+Coney+Island+Ave,+Brooklyn,+NY+11230,+USA!3b1!8m2!3d40.6155949!4d-73.9636955!3m4!1s0x89c252bf58b8c1b9:0x16211ff39e1005b6!8m2!3d40.6155949!4d-73.9636955"
    >
      <v-img
        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/review/map_img.png"
      ></v-img>
    </a>
    <ul class="body-2">
      <li>
        <v-icon size="20"> mdi-map-marker </v-icon>
        <a
          href="https://www.google.com/maps/place/1StopBedrooms.com/@40.6150144,-73.9583817,14.75z/data=!4m13!1m7!3m6!1s0x89c244c1bd0893c5:0xcd1a28533b13553b!2s1716+Coney+Island+Ave,+Brooklyn,+NY+11230,+USA!3b1!8m2!3d40.6155949!4d-73.9636955!3m4!1s0x89c252bf58b8c1b9:0x16211ff39e1005b6!8m2!3d40.6155949!4d-73.9636955"
          class="font-weight-regular"
        >
          <span> 1716 Coney Island Ave Brooklyn, NY 11230 </span>
        </a>
      </li>
      <li>
        <v-icon size="20">mdi-phone-in-talk</v-icon>
        <a href="tel:877-958-9203" class="call-btn grey--text">
          Call business
        </a>
      </li>
      <li>
        <v-icon size="20">mdi-earth</v-icon>
        <nuxt-link to="/" class="black--text font-weight-regular">
          https://www.1stopbedrooms.com/
        </nuxt-link>
      </li>
      <li>
        <v-icon size="20">mdi-tag-multiple</v-icon>
        <span class="font-weight-regular">Furniture | Decor</span>
      </li>
      <li>
        <v-row no-gutters>
          <v-col cols="1">
            <v-icon size="20"> mdi-clock-time-three-outline </v-icon>
          </v-col>
          <v-col>
            <!-- <span class="font-weight-regular"> Open now </span> -->
            <v-expansion-panels flat tile>
              <v-expansion-panel>
                <v-expansion-panel-header>Open now</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <table>
                    <tbody>
                      <tr v-for="(day, i) in openingDays" :key="i">
                        <td>{{ day }}</td>
                        <td>Open 24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </li>
      <v-divider></v-divider>
      <li v-for="(item, i) in socialMedia" :key="i">
        <v-icon size="20">{{ item.icon }}</v-icon>
        <a :href="item.link" class="font-weight-regular">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      openingDays: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      socialMedia: [
        {
          link: 'https://www.facebook.com/1StopBedrooms/',
          name: 'Facebook',
          icon: 'mdi-facebook',
        },
        {
          link: 'https://twitter.com/1stopbedrooms',
          name: 'Twitter',
          icon: 'mdi-twitter',
        },
        {
          link: 'https://www.youtube.com/channel/UCpM_Vp2lXmLf6Vm8O1_KYvA',
          name: 'Youtube',
          icon: 'mdi-youtube',
        },
        {
          link: 'https://www.instagram.com/1stopbedrooms/',
          name: 'Instagram',
          icon: 'mdi-instagram',
        },
      ],
    }
  },
}
</script>
<style scoped>
.call-btn {
  border: 1px solid rgb(172, 170, 170);
  font-size: 15px;
  padding: 2px 8px;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 10px 0;
}
li {
  padding: 8px 0;
}
.v-icon {
  margin-right: 4px;
}
td {
  padding: 1px 4px;
}
</style>
