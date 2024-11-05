export const useCard = ({defaultLiked,  defaultAdded}: {defaultLiked: boolean, defaultAdded: boolean}) => {
    const isLiked = ref(defaultLiked);
    const isAdded = ref(defaultAdded);

    const  toLike = (e: Event) => {
        isLiked.value = !isLiked.value;
    }

    const toggleAddToCart = () =>{
        isAdded.value = !isAdded.value
    }


    return {
        isLiked,
        isAdded,
        toggleAddToCart,
        toLike
    }
}