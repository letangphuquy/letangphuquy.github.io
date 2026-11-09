const productsList = document.body.querySelector('.products');
//TO-DO: implment addProduct function
const addProduct = (params) => {
    const product = document.createElement('div');
    product.classList.add('product');

    const img = document.createElement('img');
    img.classList.add('product-img');
    img.src = params.img;
    const titleText = document.createElement('h3');
    titleText.textContent = params.title;
    const title = document.createElement('div');
    title.appendChild(titleText);
    title.classList.add('product-name');
    
    const description = document.createElement('div');
    const descriptionText = document.createElement('p');
    descriptionText.textContent = params.description;
    description.appendChild(descriptionText);
    description.classList.add('description');

    const button = document.createElement('button');
    button.classList.add('buy');
    button.innerHTML = 'Buy now';

    product.appendChild(img);
    product.appendChild(title);
    product.appendChild(description);
    product.appendChild(button)

    productsList.appendChild(product);
    return product;
};

const hotProducts = [];
hotProducts.push(
    addProduct({
        img: "images/souvenirs/indian_podstakannik.jpg",
        title: "Indian Podstakannik Who Knows What",
        description: "Unique or custom, handmade pieces from our tea cups & sets shop. Longer text will enable the scroll bar. Let me test it. Haha Hehe Hoho Hihi."
    })
);

addProduct({
    img: "images/souvenirs/sphinx-artifacts.png",
    title: "Sphinx Artifacts",
    description: "Carved in-place from limestone, the Sphinx is among the world's largest monoliths. It is 73.5 meters long, 6 meters wide, and 20.22 meters high. "
});

addProduct({
    img: "images/souvenirs/sphinx-souvenir.gif",
    title: "Sphinx Souvenir",
    description: "Sphinx Souvenir is a small replica of the Sphinx. It is made of high-quality materials and it is very durable. A must-have for every tourist visiting Egypt."
});

hotProducts.push(
addProduct({
    img: "images/souvenirs/Cuneiform Tablets _ Adra Antique Collections.webp",
    title: "Cuneiform Tablets",
    description: "Cuneiform Tablets are the earliest known form of writing. They were used in ancient Mesopotamia. They are made of clay and they are very fragile. This is a very good souvenir for history lovers."
})
);

addProduct({
    img: "images/souvenirs/ancient-robot.jpg",
    title: "Ancient Robot",
    description: "This is a very old robot. It is made of wood and metal. It is very heavy and it is not working anymore. It is a very good souvenir. Surprsingly, the restored version works just like a complex machine",
});

hotProducts.push(
addProduct({
    img: "images/souvenirs/staffordshire-moorlands-pan.jpg",
    title: "The Staffordshire Moorlands Pan",
    description: "The Staffordshire Moorlands Pan, sometimes known as the Ilam Pan, is a 2nd-century AD enamelled bronze trulla with an inscription naming four of the forts of Hadrian's Wall"
})
);

addProduct({
    img: "images/souvenirs/pilgrim-badge.jpg",
    title: "Pilgrim badge",
    description: "This pilgrim badge was made in France in the late 15th/early 16th century. © The Trustees of the British Museum, CC BY-NC-ND"
});

addProduct({
    img: "images/souvenirs/sphinx ram-headed temple of Amun Karnak.webp",
    title: "Sphinx ram-headed temple of Amun Karnak",
    description: "The ram was a symbol of the god Amun, the chief deity worshipped in the Great Temple of Karnak. Each sphinx protects, between its forelegs, a standing statue of the king--originally Ramesses II (c.1279-1213 B.C.E.)."
});