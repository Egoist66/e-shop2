export default defineEventHandler(() => {
    return {
        products: [
            {
                id: 1,
                title: "Sneakers",
                price: 1200,
                isLiked: false,
                isAdded: false,
                img: "/sneakers/sneakers-1.jpg",
            },
            {
                id: 2,
                title: "Sneakers",
                price: 1100,
                isLiked: true,
                isAdded: false,
                img: "/sneakers/sneakers-2.jpg",
            },
            
        ],
    };
});