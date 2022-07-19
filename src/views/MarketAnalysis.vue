<template>
    <div >
        <div class="market-analysis-header">
          <filter-bar />
        </div>
      <div>
          <data-list :data="data" />
      </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FilterBar from "../components/FilterBar.vue";
import DataList from "../components/DataList.vue";
export default {
    name: "MarketAnalysis",
    components: {
        FilterBar,
        DataList,
    },
    setup() {
        const store = useStore();
        store.dispatch("fetchMarketAnalysis");
        const data = computed(() => store.getters.getMarketAnalysis);
        const isLoading = computed(() => store.state.marketAnalysis.isLoading);
        const error = computed(() => store.state.marketAnalysis.isError);


        return {
            isLoading,
            error,
            data,
        };
    },
};
</script>

<style scoped>
.market-analysis-header {
    display: flex;
    margin-bottom: 40px;
}

.right-side {
    margin-left: auto;
}
</style>
