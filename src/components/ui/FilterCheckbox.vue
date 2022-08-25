<template>
    <label class="checkbox">
        <label class="switch">
            <input
                :name="name"
                :value="name"
                type="radio"
                :checked="isChecked"
                @change="this.$emit('change', value)"
            />
            <div class="slider round"></div>
        </label>
        <slot></slot>
    </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: {
            type: String,
        },
        name: {
            type: String,
        },
        isChecked: {
            type: Boolean,
        },
    },
});
</script>

<style>
.checkbox {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    cursor: pointer;
}

.switch {
    display: inline-block;
    height: 22px;
    position: relative;
    width: 36px;
}

.switch input {
    display: none;
}

.slider {
    background-color: #f2f2f2;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
}

.slider:before {
    background: #1f2020;

    bottom: 6px;
    content: '';
    height: 8px;
    left: 7px;
    position: absolute;
    transition: 0.4s;
    width: 8px;
}

input:checked + .slider {
    background-color: #66bb6a;
}

input:checked + .slider:before {
    transform: translateX(14px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
