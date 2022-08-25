<template>
    <Swiper class="swiper" />
    <main class="main">
        <div class="products">
            <Filters class="product-filters" :name="'default'" />
            <ProductCardList :products="tShirts" :isLoading="isLoading" />
        </div>
    </main>
</template>

<script>
import ProductCardList from '@/components/common/ProductCardList.vue';
import Filters from '@/components/common/Filters.vue';
import Swiper from '@/components/common/Swiper.vue';
import { useTShirts } from '@/hooks/useTSirts';
import { defineComponent } from 'vue';
import { useFilterStore } from '@/stores/filter';
import { mapState } from 'pinia';

export default defineComponent({
    components: { ProductCardList, Filters, Swiper },

    setup() {
        const filter = useFilterStore();
        const { tShirts, isLoading, fetching } = useTShirts();
        return {
            tShirts,
            isLoading,
            fetching,
            filter,
        };
    },
    computed: {
        ...mapState(useFilterStore, [
            'isAll',
            'isNew',
            'isCash',
            'isContract',
            'isExclusive',
            'isSale',
            'orderValue',
        ]),
    },
    watch: {
        isAll() {
            if (this.isAll) {
                this.fetching(null, this.filter.orderValue);
            }
        },
        isNew() {
            if (this.isNew) {
                this.fetching('new', this.filter.orderValue);
            }
        },
        isCash() {
            if (this.isCash) {
                this.fetching('inCash', this.filter.orderValue);
            }
        },
        isContract() {
            if (this.isContract) {
                this.fetching('contract', this.filter.orderValue);
            }
        },
        isExclusive() {
            if (this.isExclusive) {
                this.fetching('exclusive', this.filter.orderValue);
            }
        },
        isSale() {
            if (this.isSale) {
                this.fetching('sale', this.filter.orderValue);
            }
        },
        orderValue() {
            if (this.orderValue) {
                this.fetching(
                    this.filter.currentFilter,
                    this.filter.orderValue,
                );
            }
        },
    },
});
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.5rem 0 4rem;
    width: 100%;
}
.products {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    width: 100%;
}
@media (max-width: 1225px) {
    .products {
        justify-content: center;
    }
    .product-filters {
        display: none;
    }
}
</style>
