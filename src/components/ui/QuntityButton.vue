<template>
    <button class="quantity-btn">
        <slot></slot>
    </button>
</template>

<style>
.quantity-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease;
    cursor: pointer;
    background: #f2f2f2;
    border: none;
    width: 40px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 0.5rem;
}
</style>
