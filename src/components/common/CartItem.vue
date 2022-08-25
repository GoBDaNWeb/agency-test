<template>
    <div class="cart-item">
        <div
            :class="
                product.disabled ? 'cart-item__main disable' : 'cart-item__main'
            "
        >
            <img :src="product.images[0].url" alt="product image" class="img" />
            <div class="cart-item__info">
                <h4 class="title">
                    {{ product.name }}
                </h4>
                <span class="price">
                    ${{ product.price * product.quantity }}
                </span>
            </div>
        </div>

        <div
            :class="
                product.disabled
                    ? 'cart-item__quantity disable'
                    : 'cart-item__quantity'
            "
        >
            <QuntityButton @click="decrease(product)"> - </QuntityButton>
            {{ product.quantity }}
            <QuntityButton @click="increase(product)"> + </QuntityButton>
        </div>
        <div class="buttons">
            <button
                @click="returnProduct(product)"
                v-if="product.disabled"
                class="remove-btn"
            >
                <img src="src/assets/repeat.png" alt="repeat" />
            </button>

            <button @click="removeProduct(product)" v-else class="remove-btn">
                <img src="src/assets/close.png" alt="close" />
            </button>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '../../stores/cart';
import { defineComponent } from 'vue';
import QuntityButton from '../ui/QuntityButton.vue';
export default defineComponent({
    components: {
        QuntityButton,
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const cart = useCartStore();

        function returnProduct(product) {
            cart.returnProduct(product);
            cart.filterProducts(cart.products);
        }

        function removeProduct(product) {
            cart.disableProduct(product);
            cart.filterProducts(cart.products);
        }

        function isInCart() {
            return cart.products.find(
                (cartProduct) => cartProduct.id === this.product.id,
            );
        }

        function decrease(product) {
            if (product.quantity > 1) {
                cart.decreaceProduct(product);
                cart.filterProducts(cart.products);
            } else {
                cart.disableProduct(product);
                cart.filterProducts(cart.products);
            }
        }

        function increase(product) {
            cart.increaceProduct(product);
            cart.filterProducts(cart.products);
        }

        return {
            returnProduct,
            removeProduct,
            isInCart,
            cart,
            decrease,
            increase,
        };
    },
});
</script>

<style>
.disable {
    opacity: 0.3;
    pointer-events: none;
}
.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    font-size: 16px;
}

.cart-item__main {
    display: flex;
    align-items: center;
    gap: 8px;
}
.cart-item .img {
    width: 96px;
    height: 96px;
}

.cart-item .cart-item__info {
    display: flex;
    flex-direction: column;
    width: 250px;
}
.cart-item .cart-item__info .price {
    font-weight: 600;
}

.cart-item .cart-item__quantity {
    font-weight: bold;
    display: flex;
    gap: 1rem;
}
.remove-btn {
    background: none;
    border: none;
    cursor: pointer;
}
</style>
