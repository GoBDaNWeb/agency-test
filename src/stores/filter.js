import { defineStore } from 'pinia';

export const useFilterStore = defineStore({
    id: 'filter',
    state: () => ({
        isAll: true,
        isNew: false,
        isCash: false,
        isContract: false,
        isExclusive: false,
        isSale: false,
        orderValue: 'desc',
        filtersOpen: false,
    }),
    getters: {
        currentFilter: (state) => {
            if (state.isAll) {
                return null;
            } else if (state.isNew) {
                return 'new';
            } else if (state.isCash) {
                return 'inCash';
            } else if (state.isContract) {
                return 'contract';
            } else if (state.isExclusive) {
                return 'exclusive';
            } else if (state.isSale) {
                return 'sale';
            }
        },
    },
    actions: {
        changeAll(bool) {
            this.isAll = bool;
        },
        changeNew(bool) {
            this.isNew = bool;
        },
        changeCahs(bool) {
            this.isCash = bool;
        },
        changeContract(bool) {
            this.isContract = bool;
        },
        changeExclusive(bool) {
            this.isExclusive = bool;
        },
        changeSale(bool) {
            this.isSale = bool;
        },
        changeOrder(order) {
            this.orderValue = order;
        },
        handleCloseFilter() {
            this.filtersOpen = !this.filtersOpen;
        },
    },
});
