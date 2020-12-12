<template>
  <div class="home">
    <FarsiNumber />
  </div>
</template>

<script language="ts">
import Vue from 'vue';
import FarsiNumber from "~/components/FarsiNumber.vue";

export default Vue.extend({
  components: {
    FarsiNumber
  }
})
</script>
