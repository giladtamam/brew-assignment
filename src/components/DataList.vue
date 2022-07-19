<template>
    <div>
        <div v-for="item in data" :key="item.id">
        <div class="list-item">
            <span>{{item.title}}</span>
        </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        data: Array
    }
}
</script>
<style scoped>
.list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
</style>