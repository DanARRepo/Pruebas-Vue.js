<template>
  <div>
    <bounce-loader
      :loading="loading"
      :color="'#68d391'"
      :size="100"
    ></bounce-loader>
    <px-assets-table v-if="!loading" :assets="assets"></px-assets-table>
  </div>
</template>

<script>
/* eslint-disable */
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import api from "@/api";
import BounceLoader from "@saeris/vue-spinners";

export default {
  name: "Home",

  components: { PxAssetsTable, BounceLoader },

  data() {
    return {
      loading: false,
      assets: [],
    };
  },

  created() {
    this.loading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.loading = false));
  },
};
/* eslint-enable */
</script>
