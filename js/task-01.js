const categories = document.querySelectorAll("h2");
console.log(`Number of categories: ${categories.length}`);
const items = document.querySelectorAll('.item');
items.forEach( element => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} \nElements: ${itemsLength}`);
}); 