<template>
    <select
        class="select"
        v-model="selectValue"
        @change="this.$emit('changeSelect', selectValue)"
    >
        <option value="desc">Сначала Дорогие</option>
        <option value="acs">Сначала Дешевые</option>
    </select>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const selectValue = ref('desc');

        return {
            selectValue,
        };
    },
});
</script>

<style>
.select {
    background: none;
    border: none;
    cursor: pointer;
}
</style>
