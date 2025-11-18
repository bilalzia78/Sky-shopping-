// Product list data in a simple structure
const products = [
    "کسمیٹکس",
    "میک اپ",
    "پرفیوم",
    "ہیئر اسیسریز",
    "وائٹننگ کریم",
    "انڈر گارمنٹس",
    "جیولری",
    "فیشل، فیس واش",
    "وائٹننگ سوپ"
];

const productListContainer = document.getElementById('product-list');

// Function to generate product HTML
function displayProducts() {
    products.forEach(product => {
        // Create a div element for each product item
        const item = document.createElement('div');
        item.classList.add('product-item');
        
        // Add the product name to the div
        item.textContent = product;
        
        // Append the new item to the container
        productListContainer.appendChild(item);
    });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);

// Future potential for advanced features like product filtering or image carousels can be added here.
// console.log("Website scripts loaded successfully.");