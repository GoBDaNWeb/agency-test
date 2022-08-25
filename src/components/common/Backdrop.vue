<template>
    <div
        @click="closeBackdrop()"
        :class="
            cart.cartOpen || filter.filtersOpen ? 'backdrop' : 'backdrop-hidden'
        "
    >
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useCartStore } from '../../stores/cart';
import { useFilterStore } from '../../stores/filter';

export default defineComponent({
    setup() {
        const filter = useFilterStore();
        const cart = useCartStore();
        function closeBackdrop() {
            if (cart.cartOpen) {
                cart.handleOpenCart();
            } else if (filter.filtersOpen) {
                filter.handleCloseFilter();
            }
        }

        return {
            cart,
            filter,
            closeBackdrop,
        };
    },
});
</script>

<style>
.backdrop {
    position: fixed;
    pointer-events: auto;
    transition: 300ms ease;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 980;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
}
.backdrop-hidden {
    pointer-events: none;
    position: fixed;
    transition: 300ms ease;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 980;
    background: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100vh;
}
</style>
