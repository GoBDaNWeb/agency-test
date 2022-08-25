<template>
    <header class="header">
        <button class="burger">
            <img src="src/assets/burger.png" alt="burger" />
        </button>
        <img src="src/assets/logo.png" alt="logo" />
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-list--item">Продукты</li>
                <li class="nav-list--item">Цвета</li>
                <li class="nav-list--item">Вдохновение</li>
                <li class="nav-list--item">Советы</li>
                <li class="nav-list--item">Найти Магазин</li>
            </ul>
        </nav>
        <div class="phone">
            +7 (495) 221-77-69
            <span class="phone-solution">Заказать звонок </span>
        </div>
        <div class="features">
            <ul class="features-list">
                <li class="features-list--item">
                    <img src="src/assets/search.png" alt="search" />
                </li>
                <li class="features-list--item">
                    <img src="src/assets/profile.png" alt="profile" />
                </li>
                <li class="features-list--item">
                    <img src="src/assets/heart.png" alt="heart" />
                </li>
            </ul>
            <button @click="cart.handleOpenCart()" class="cart">
                {{ cart.productsCount }}
            </button>
        </div>
    </header>
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
.burger {
    width: 46px;
    height: 46px;
    background: none;
    border: none;
}
.burger img {
    width: 100%;
    height: 100%;
}
.header {
    z-index: 800;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    left: 0;
    top: 0;
    right: 0;
    position: fixed;
    width: 100%;
    height: 6.5rem;
    color: #1f2020;
    background: rgb(255, 255, 255);
}
.nav-list {
    display: flex;
    gap: 1.5rem;
}
.nav-list--item {
    cursor: pointer;
    font-size: 14px;
    text-transform: uppercase;
}
.phone {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
}
.phone-solution {
    font-size: 14px;
    color: #cccdcd;
    line-height: 100%;
}
.features {
    display: flex;
    gap: 1.75rem;
    align-items: center;
}
.features-list {
    display: flex;
    align-items: center;
    gap: 1.75rem;
}
.features-list--items {
    width: 22px;
    height: 22px;
}

.cart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    background: #7bb899;
    cursor: pointer;
    border: none;
}
@media (max-width: 1225px) {
    .nav {
        display: none;
    }
    .phone {
        display: none;
    }
    .features-list {
        display: none;
    }
}
@media (min-width: 1225px) {
    .burger {
        display: none;
    }
}
@media (max-width: 675px) {
    .header {
        padding: 0 1rem;
    }
}
</style>
