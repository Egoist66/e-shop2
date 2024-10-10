export const useCard = ({defaultLiked}: {defaultLiked: boolean}) => {
    const isLiked = ref(defaultLiked);

    function toLike(e: Event) {
        isLiked.value = !isLiked.value;
    }


    return {
        isLiked,
        toLike
    }
}