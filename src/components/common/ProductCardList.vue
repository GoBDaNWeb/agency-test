<template>
    <div class="products-list">
        <div class="products-info">
            <h4 class="total-info">
                <span v-if="products">
                    {{ products.length }}
                </span>
                <span v-else> 0 </span>
                Товаров
            </h4>
            <button @click="handleOpenFilters" class="filters-btn">
                Фильтры
            </button>
            <Select @changeSelect="select" />
        </div>
        <div v-if="isLoading" class="loading"><Loader /></div>
        <div v-else class="list">
            <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import Select from '@/components/ui/Select.vue';
import Loader from '@/components/ui/Loader.vue';
import { useFilterStore } from '@/stores/filter';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { ProductCard, Select, Loader },
    props: {
        products: {
            type: Array,
        },
        isLoading: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const filter = useFilterStore();

        function select(value) {
            filter.changeOrder(value);
        }
        function handleOpenFilters() {
            filter.handleCloseFilter();
        }

        return {
            select,
            handleOpenFilters,
        };
    },
});
</script>

<style>
.products-list {
    width: 80%;
}
.list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    width: 100%;
}
.loading {
    text-align: center;
}
.products-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}
.filters-btn {
    background: none;
    border: none;
    display: none;
}
@media (max-width: 1770px) {
    .list {
        grid-template-columns: repeat(4, 1fr);
    }
}
@media (max-width: 1515px) {
    .list {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 1225px) {
    .total-info {
        display: none;
    }
    .filters-btn {
        display: block;
    }
}
@media (max-width: 1000px) {
    .list {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 675px) {
    .list {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
