<template>
    <Header />
    <Backdrop>
        <SidebarCart />
        <FiltersMobile />
    </Backdrop>
    <slot></slot>
</template>

<script setup>
import Header from './Header.vue';
import Backdrop from '@/components/common/Backdrop.vue';
import SidebarCart from './SidebarCart.vue';
import FiltersMobile from './FiltersMobile.vue';
</script>
