<template>
    <div class="filters">
        <FilterCheckbox
            @change="changeCheck"
            :value="'all'"
            :name="name"
            :isChecked="filter.isAll"
        >
            Все
        </FilterCheckbox>
        <FilterCheckbox
            @change="changeCheck"
            :value="'new'"
            :name="name"
            :isChecked="filter.isNew"
        >
            Новинки
        </FilterCheckbox>
        <FilterCheckbox
            @change="changeCheck"
            :value="'inCash'"
            :name="name"
            :isChecked="filter.isCash"
        >
            Есть в Наличии
        </FilterCheckbox>
        <FilterCheckbox
            @change="changeCheck"
            :value="'contract'"
            :name="name"
            :isChecked="filter.isContract"
        >
            Котрактные
        </FilterCheckbox>
        <FilterCheckbox
            @change="changeCheck"
            :value="'exclusive'"
            :name="name"
            :isChecked="filter.isExclusive"
        >
            Эксклюзивные
        </FilterCheckbox>
        <FilterCheckbox
            @change="changeCheck"
            :value="'sale'"
            :name="name"
            :isChecked="filter.isSale"
        >
            Распродажа
        </FilterCheckbox>
    </div>
</template>

<script>
import FilterCheckbox from '@/components/ui/FilterCheckbox.vue';
import { defineComponent } from 'vue';
import { useFilterStore } from '@/stores/filter';

export default defineComponent({
    components: { FilterCheckbox },
    props: {
        name: {
            type: String,
        },
    },
    setup() {
        const filter = useFilterStore();

        function changeCheck(value) {
            switch (value) {
                case 'all':
                    filter.changeAll(true);
                    filter.changeNew(false);
                    filter.changeCahs(false);
                    filter.changeContract(false);
                    filter.changeExclusive(false);
                    filter.changeSale(false);
                    break;
                case 'new':
                    filter.changeAll(false);
                    filter.changeNew(true);
                    filter.changeCahs(false);
                    filter.changeContract(false);
                    filter.changeExclusive(false);
                    filter.changeSale(false);
                    break;
                case 'inCash':
                    filter.changeAll(false);
                    filter.changeNew(false);
                    filter.changeCahs(true);
                    filter.changeContract(false);
                    filter.changeExclusive(false);
                    filter.changeSale(false);
                    break;
                case 'contract':
                    filter.changeAll(false);
                    filter.changeNew(false);
                    filter.changeCahs(false);
                    filter.changeContract(true);
                    filter.changeExclusive(false);
                    filter.changeSale(false);
                    break;
                case 'exclusive':
                    filter.changeAll(false);
                    filter.changeNew(false);
                    filter.changeCahs(false);
                    filter.changeContract(false);
                    filter.changeExclusive(true);
                    filter.changeSale(false);
                    break;
                case 'sale':
                    filter.changeAll(false);
                    filter.changeNew(false);
                    filter.changeCahs(false);
                    filter.changeContract(false);
                    filter.changeExclusive(false);
                    filter.changeSale(true);
                    break;
            }
        }

        return {
            filter,
            changeCheck,
        };
    },
});
</script>

<style>
.filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
