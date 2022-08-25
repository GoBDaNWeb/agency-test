<template>
    <div class="product-card">
        <img :src="product.images[0].url" alt="product image" class="img" />
        <h5>{{ product.name }}</h5>
        <div class="product-card--bottom">
            <span>${{ product.price }}</span>
            <ProductCardButton
                v-if="isInCart()"
                @click="removeProduct(product)"
            >
                <img src="@/assets/close.png" alt="" />
            </ProductCardButton>
            <ProductCardButton v-else @click="addProduct(product)">
                +
            </ProductCardButton>
        </div>
    </div>
</template>

<script>
import ProductCardButton from '@/components/ui/ProductCardButton.vue';
import { useCartStore } from '@/stores/cart';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { ProductCardButton },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const cart = useCartStore();

        function addProduct(product) {
            cart.addProduct(product);
            cart.filterProducts(cart.products);
        }

        function removeProduct(product) {
            cart.removeProduct(product);
        }

        function isInCart() {
            return cart.products.find(
                (cartProduct) => cartProduct.id === this.product.id,
            );
        }

        return {
            addProduct,
            removeProduct,
            isInCart,
        };
    },
});
</script>

<style>
.product-card {
    height: 476px;
    width: 278px;
    border-bottom: 1px solid #000;
    position: relative;
}
.product-card:hover .product-btn {
    opacity: 1;
}
.product-card--bottom {
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.img {
    width: 100%;
    height: 75%;
}

@media (max-width: 1225px) {
    .product-btn {
        opacity: 1;
    }
}
</style>
