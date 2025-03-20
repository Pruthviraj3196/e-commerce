const products = [
    { id: 1, name: "Laptop", image: "https://img.freepik.com/free-photo/laptop-stone-surface-sea-background_1232-430.jpg?semt=ais_hybrid", description: "High performance laptop", price: 1000 },
    { id: 2, name: "Phone", image: "https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "Latest smartphone", price: 500 },
    { id: 3, name: "Tablet", image: "https://img.freepik.com/free-vector/digital-device-mockup_53876-90965.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "Portable tablet with HD display", price: 300 },
    { id: 4, name: "Headphones", image: "https://img.freepik.com/free-vector/headphone-earphone-realistic-composition_1284-26323.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "Noise-cancelling headphones", price: 150 },
    { id: 5, name: "Smartwatch", image: "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "Feature-packed smartwatch", price: 200 },
    { id: 6, name: "Monitor", image: "https://img.freepik.com/free-photo/blank-desktop-computer_74190-5684.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "4K UHD monitor", price: 400 },
    { id: 7, name: "Keyboard", image: "https://img.freepik.com/free-photo/top-view-arrangement-with-keyboard_23-2148604846.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "Mechanical gaming keyboard", price: 100 },
    { id: 8, name: "Mouse", image: "https://img.freepik.com/free-photo/red-computer-mouse_1260-13.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "Wireless ergonomic mouse", price: 50 },
    { id: 9, name: "Speaker", image: "https://img.freepik.com/free-vector/realistic-audio-system-composition-with-best-sound-headline-big-black-speaker-illustration_1284-29310.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "Bluetooth speaker with deep bass", price: 120 },
    { id: 10, name: "External Hard Drive", image: "https://img.freepik.com/free-photo/high-angle-storage-device-laptop_23-2149319337.jpg?ga=GA1.1.1142060075.1742482920&semt=ais_hybrid", description: "1TB external HDD", price: 80 },
  ];

const allproducts = async (req, res) => {
   try {
    
    res.json({
        message:"All data got",
        data: products,
    })

   } catch (error) {
    console.log(error)
   }
}



const productController = {
    allproducts,
}

module.exports = productController;