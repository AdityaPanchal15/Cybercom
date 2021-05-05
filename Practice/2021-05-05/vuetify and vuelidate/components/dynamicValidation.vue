<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Ip Address</label>
      <input class="form__input" v-model.trim="$v.name.$model" />
    </div>
    <div v-if="!$v.name.$error && $v.$dirty">True ip address</div>
    <div v-else>False ip address</div>
    <div class="form-group">
      <label class="form__label" for="hasDesc">Has description?</label>
      <div class="toggle">
        <input id="hasDesc" type="checkbox" v-model="hasDescription" />
        <label for="hasDesc">
          <div class="toggle__switch"></div>
        </label>
      </div>
    </div>
    <div
      class="form-group"
      v-if="hasDescription"
      :class="{ 'form-group--error': $v.description.$error }"
    >
      <label class="form__label">Description</label>
      <input class="form__input" v-model.trim="$v.description.$model" />
    </div>
    <tree-view
      :data="$v"
      :options="{ rootObjectKey: '$v', maxDepth: 2 }"
    ></tree-view>
    
  </div>
</template>

<script>
import { required,ipAddress } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      hasDescription: false,
      name: '',
      description: ''
    }
  },
  validations() {
    if (!this.hasDescription) {
      return {
        name: {
          required,
          ipAddress:ipAddress
        }
      }
    } else {
      return {
        name: {
          required
        },
        description: {
          required
        }
      }
    }
  }
}
</script>

