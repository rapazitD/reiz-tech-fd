import {ref, Ref, UnwrapRef} from 'vue';

interface ApiResponse<T> {
    data: T;
    loading: Ref<boolean>;
    error: Ref<string | null>;
    fetchData: (url: string) => Promise<void>;
}

export function useFetch<T>(): {
    fetchData: (url: string) => Promise<void>;
    data: Ref<UnwrapRef<T | null>>;
    loading: Ref<UnwrapRef<boolean>>;
    error: Ref<UnwrapRef<string | null>>
} {
    const data = ref<T | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchData = async (url: string): Promise<void> => {
        loading.value = true;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            data.value = result;

            console.log(result)
            error.value = null;
        } catch (err) {
            data.value = null;
            error.value = err.message || 'An error occurred';
        } finally {
            loading.value = false;
        }
    };

    return {
        data,
        loading,
        error,
        fetchData,
    };
}