<template>
    <button @click="cart.handleOpenCart" class="close-btn">
        <img src="src/assets/close.png" alt="" />
    </button>
</template>

<script>
import { defineComponent } from 'vue';
import { useCartStore } from '../../stores/cart';
export default defineComponent({
    setup() {
        const cart = useCartStore();
        return {
            cart,
        };
    },
});
</script>

<style>
.close-btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 48px;
    height: 48px;
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: none;
}
</style>
