<template>
    <div>
        <drop-down />
        <drop-down />
        <drop-down />
        <drop-down />
        <drop-down />
    </div>
    <div class="right-side">
        <button>Button1</button>
        <button>Button2</button>
    </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import DropDown from './DropDown.vue';
export default {
    name: "FilterBar",
    components: {
        DropDown
    },
    setup() {
        const store = useStore();
        const value1 = ref([]);
        store.dispatch("fetchMarketAnalysis");
        return {
            value1,
            options: [
                {
                    value: "Option1",
                    label: "Option1",
                },
                {
                    value: "Option2",
                    label: "Option2",
                },
                {
                    value: "Option3",
                    label: "Option3",
                },
                {
                    value: "Option4",
                    label: "Option4",
                },
                {
                    value: "Option5",
                    label: "Option5",
                },
            ],
        };
    },
};
</script>

<style scoped>
.right-side {
    margin-left: auto;
}
</style>
