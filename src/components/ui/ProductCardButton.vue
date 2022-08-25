<template>
    <button class="product-btn">
        <slot></slot>
    </button>
</template>

<style>
.product-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease;
    opacity: 0;
    cursor: pointer;
    background: #7bb899;
    border: none;
    width: 5rem;
    height: 2rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
}
</style>
