<template>
    <div @click.stop :class="cart.cartOpen ? 'sidebar' : 'sidebar-hidden'">
        <div>
            <div class="cart-top">
                <h4 class="cart-title">Корзина</h4>
                <CloseCartButton />
            </div>
            <div class="cart-info">
                <div>
                    <span> {{ cart.productsCount }} </span>
                    товара
                </div>
                <button @click="cart.clearCart()" class="clear-products">
                    очистить список
                </button>
            </div>
        </div>

        <div class="cart-content">
            <CartItem
                v-for="product in cart.products"
                :key="product.id"
                :product="product"
            />
        </div>
        <div class="cart-bottom">
            <div class="total">
                <h6>Итого</h6>
                ${{ total }}
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import CloseCartButton from '@/components/ui/CloseCartButton.vue';
import CartItem from '@/components/common/CartItem.vue';
import { mapState } from 'pinia';

export default defineComponent({
    components: {
        CloseCartButton,
        CartItem,
    },
    setup() {
        const cart = useCartStore();
        const total = ref(0);
        function calculateTotalCount() {
            total.value = cart.filtered.reduce((prev, item) => {
                return prev + item.price * item.quantity;
            }, 0);
        }

        return {
            cart,
            total,
            calculateTotalCount,
        };
    },
    computed: {
        ...mapState(useCartStore, ['products', 'filtered', 'increaceProduct']),
    },
    watch: {
        filtered() {
            this.calculateTotalCount();
        },
        increaceProduct() {
            console.log('a(');
            this.calculateTotalCount();
        },
    },
});
</script>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;
    transition: 300ms ease;
    background: #fff;
    width: 40%;
    position: fixed;
    right: 0;
    height: 100vh;

    top: 0;
    padding: 2rem 2rem;
}
.sidebar-hidden {
    z-index: 999;

    transition: 300ms ease;
    transform: translateX(100%);
    right: 0;
    top: 0;
    position: fixed;
    width: 40%;
    height: 100vh;
    padding: 2rem 2rem;
}

.cart-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
}
.cart-title {
    font-size: 2rem;
}
.cart-content {
    height: 70%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.cart-info {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
}

.cart-bottom {
    font-size: 1.5rem;
}
.cart-bottom h6 {
    font-size: 2rem;
}

.clear-products {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.4);
}
@media (max-width: 1515px) {
    .sidebar {
        width: 50%;
    }
}
@media (max-width: 1225px) {
    .sidebar {
        width: 100%;
    }
}
</style>
