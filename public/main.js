const product=[
    {
        id:0,
        image:'product-1.jpg',
        title:'Red printed Tshirt',
        price:50,
    },
    {
        id:1,
        image:'product-2.jpg',
        title:'Black sport shoe',
        price:90,
    },
    {
        id:2,
        image:'product-3.jpg',
        title:'sport tracks',
        price:70,
    },
    {
        id:3,
        image:'product-4.jpg',
        title:'Blue collar Tshirt',
        price:60,
    },
    {
        id:4,
        image:'product-5.jpg',
        title:'Basketball shoes ',
        price:120,
    },
    {
        id:5,
        image:'product-6.jpg',
        title:'Puma black Tshirt',
        price:80,
    },
    {
        id:6,
        image:'product-7.jpg',
        title:'HRX socks 3pair',
        price:40,
    },
    {
        id:7,
        image:'product-8.jpg',
        title:'Fossil watch limited edition',
        price:210,
    },
    {
        id:8,
        image:'product-9.jpg',
        title:'Roadster watch',
        price:130,
    },
    {
        id:9,
        image:'product-10.jpg',
        title:'Running shoes',
        price:70,
    },
    {
        id:10,
        image:'product-11.jpg',
        title:'Walking shoes',
        price:80,
    },
    {
        id:11,
        image:'product-12.jpg',
        title:'Gym trackpant',
        price:100,
    },
]

function showProducts(){
    const container = document.getElementById('product-container');

    product.forEach((item,index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-4';
        productDiv.innerHTML = `
            <img src="${item.image}">
            <h4>${item.title}</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            <p>$${item.price.toFixed(2)}</p>
            <button class="buybutton" onclick="Buy(${index})">add to cart</button>
        `;
        container.appendChild(productDiv);
    });
}

showProducts();

function Buy(index){
    document.getElementById('buywindow').style.display="block";
    document.getElementById('productId').value=product[index].id;
    document.getElementById('Iimg').src=product[index].image;
    document.getElementById('Iname').innerText=product[index].title;
    document.getElementById('Iprice').innerText='$'+product[index].price;
}
function closeBuy(){
    document.getElementById('buywindow').style.display="none";
}
