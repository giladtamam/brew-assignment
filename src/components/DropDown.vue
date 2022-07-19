<template>
    <select>
        <option value="">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    name: "DropDown",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
