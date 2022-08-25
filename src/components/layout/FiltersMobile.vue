<template>
    <div
        @click.stop
        :class="filter.filtersOpen ? 'filters-mobile' : 'filters-mobile-hidden'"
    >
        <Filters :name="'mobile'" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useFilterStore } from '@/stores/filter';
import Filters from '@/components/common/Filters.vue';

export default defineComponent({
    components: { Filters },
    setup() {
        const filter = useFilterStore();
        return {
            filter,
        };
    },
});
</script>

<style>
.filters-mobile {
    transition: 300ms ease;
    background: #fff;
    height: 60%;
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    border-radius: 24px 24px 0px 0px;
    padding: 2rem 2rem;
}
.filters-mobile-hidden {
    transition: 300ms ease;
    background: #fff;
    height: 60%;
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    border-radius: 24px 24px 0px 0px;
    padding: 2rem 2rem;
    transform: translateY(100%);
}
</style>
