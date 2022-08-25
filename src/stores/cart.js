import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        products: [],
        cartOpen: false,
        filtered: [],
    }),
    getters: {
        productsCount: (state) => state.products?.length || 0,
    },
    actions: {
        addProduct(data) {
            this.products.push({ ...data, quantity: 1, disabled: false });
        },
        removeProduct(data) {
            this.products = this.products.filter(
                (product) => product.id !== data.id,
            );
        },
        disableProduct(data) {
            const foundIndex = this.products.findIndex(
                (item) => item.id === data.id,
            );
            this.products[foundIndex].disabled = true;
        },
        returnProduct(data) {
            const foundIndex = this.products.findIndex(
                (item) => item.id === data.id,
            );
            this.products[foundIndex].disabled = false;
        },
        clearCart() {
            this.products = this.products.filter(
                (product) => !product.disabled,
            );
        },
        handleOpenCart() {
            this.cartOpen = !this.cartOpen;
        },
        increaceProduct(data) {
            const foundIndex = this.products.findIndex(
                (item) => item.id === data.id,
            );
            this.products[foundIndex].quantity++;
        },
        decreaceProduct(data) {
            const foundIndex = this.products.findIndex(
                (item) => item.id === data.id,
            );
            this.products[foundIndex].quantity--;
        },
        filterProducts(products) {
            this.filtered = products.filter((product) => !product.disabled);
        },
    },
});
