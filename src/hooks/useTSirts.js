import axios from 'axios';
import { ref, onMounted } from 'vue';

export function useTShirts() {
    const tShirts = ref([]);
    const isLoading = ref(true);

    const fetching = async (name, order = 'desc') => {
        try {
            const response = await axios.get(
                `https://63069f94c0d0f2b8011fcc50.mockapi.io/t-shirts?${
                    name ? `${name}=true&` : ''
                }sortBy=price&order=${order}`,
            );
            tShirts.value = response.data;
        } catch (error) {
            console.error(error.message);
            alert('Ошибка');
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(fetching);

    return {
        tShirts,
        isLoading,
        fetching,
    };
}
