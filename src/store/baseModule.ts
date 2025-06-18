import { computed, reactive } from 'vue';

export const state: {isLoading: boolean} = reactive({
  isLoading: false,
});

export default function useBaseModule () {
  const setIsLoading = (val: boolean) => {
    state.isLoading = val;
  };
  return {
    getIsLoading: () => computed(() => state.isLoading),
    setIsLoading,
  };
}
