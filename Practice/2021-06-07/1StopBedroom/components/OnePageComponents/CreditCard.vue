<template>
  <div class="mx-4">
    <h2 class="font-weight-regular">How would you like to pay?</h2>
    <v-divider></v-divider>
    <v-radio-group v-model="radios" dense row>
      <v-radio
        v-for="(type, index) in paymentChoice"
        :key="index"
        :value="type.value"
      >
        <template #label>
          <div>
            <v-img :src="type.src" width="80%"></v-img>
          </div>
        </template>
      </v-radio>
    </v-radio-group>
    <v-row>
      <v-col cols="3">
        <v-select
          v-model="creditCardType"
          :items="creditCardTypes"
          label="Credit Card Type"
          required
          outlined
          dense
        ></v-select>
        <v-text-field
          v-model="expirationDate"
          label="ExpirationDate(MM/YY)"
          required
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="creditCardNumber"
          label="Credit Card Number"
          required
          outlined
          dense
        >
        </v-text-field>
        <v-text-field
          v-model="cvv"
          label="CVV"
          required
          outlined
          dense
          append-outer-icon="mdi-credit-card-outline"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radios: 'Credit Card',
      paymentChoice: [
        {
          value: 'Credit Card',
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/credit_card.png',
        },
        {
          value: 'Paypal',
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/icon_paypal_express.png',
        },
        {
          value: 'Paypal Credit',
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/ppcredit-logo-medium.png',
        },
        {
          value: 'Affirm',
          src:
            'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/blue_logo-transparent_bg-v2.png',
        },
      ],
      creditCardType: '--Please Select--',
      expirationDate: '',
      creditCardNumber: '',
      cvv: '',
      creditCardTypes: [
        '--Please Select--',
        'American Express',
        'Visa',
        'MasterCard',
        'Discover',
      ],
    }
  },
}
</script>
