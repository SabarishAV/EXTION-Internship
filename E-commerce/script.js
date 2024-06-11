const productContainer = document.querySelector('.productContainer');
const products = [
  { id:1, name: 'Samsung Galaxy S24 Ultra',productName:"Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 256GB Storage)" ,MRP:134999,discount:4 , price: 129999, image: "./Images/products/samsungs24ultra.png",about:["Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a (17.25cm) 6.8 flat display. It's an absolute marvel of design.","The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display.","With the most megapixels on a smartphone and AI processing, Galaxy S24 Ultra sets the industry standard for image quality every time you hit the shutter. What's more, the new ProVisual engine recognizes objects — improving colour tone, reducing noise and bringing out detail.","A new way to search is here with Circle to Search. While scrolling your fav social network, use your S Pen or finger to circle something and get Google Search results.","Victory can be yours with the new Snapdragon 8 Gen 3 for Galaxy. Faster processing gives you the power you need for all the gameplay you want. Then, manifest graphic effects in real time with ray tracing for hyper-realistic shadows and reflections."]},

  { id:2, name: 'iQOO 12 5G ',productName:"iQOO 12 5G (Legend, 12GB RAM, 256GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera" ,MRP:59999,discount:12 ,  price: 52999, image: "./Images/products/IQOO12.png",about:["3.3 GHz Snapdragon 8 Gen 3 mobile platform, which is on 4nm TSMC Process. Enhanced graphic performance with Adreno 750. In addition to that, it has LPDRR5X RAM & UFS 4.0 storage.","50MP 1/1.3 Astrography Camera (f/1.68) + 50MP Ultra - Wide Angle Camera (f/1.20) + 64MP 3X Periscope Telephoto Camera (f/2.57) with 100X Digital zoom.","Brightest Display ever with 6.78 144 Hz LTPO AMOLED display with 3000 nit peak brightness. SGS-certified for low blue light. 2160Hz PWM uses the persistence of human vision to control display brightness.","Supercomputing chip Q1, Symmetrical dual stereo speaker, 4D Game vibration, Large X-axis linear motor enhances the overall gaming experience.","Fully charged battery with 120W fast charger. IP64 rating provides ingress protection against dust/water under normal use. Funtouch OS 14 based on Android 14"] },

  { id:3, name: 'Oneplus Open',productName:"Oneplus Open (Voyager Black, 16GB RAM, 512GB Storage)" ,MRP:149999,discount:7 ,  price: 139999,  image: "./Images/products/oneplusopen.png" ,about:["Extraordinary materials blend the best of both. Titanium alloy, carbon fiber, and more. Built to the hilt with aerospace materials – with no expense spared. TÜV Rheinland “reliable folding” certified to 1,000,000 folds.Extreme durability for more than 100 folds every day – lasting over 10 years.","Dual ProXDR displays Cover Display: 6.31” (16.03 cm) 2K resolution, Super Fluid AMOLED at 1440 Hz - Shielded by Ceramic Guard Dual-Displays: 7.82 (19.86 cm) 2K resolution, Flexi-fluid AMOLED 89.6% screen-to-body ratio at 1440 Hz - Shielded by Ultra Thin Glass","Camera: Main camera with OIS 48MP SONY LYT-T800 “Pixel Stacked” Sensor 1/1.43” sensor, 1.12μm, ƒ/1.65, AF Telephoto with OIS 64MP OV64B Sensor with 3X Optical Zoom 6X in-sensor zoom, 1/2” sensor, 0.7 μm, ƒ/2.6, AF Ultra-wide 48MP Sony IMX581 with 114o FOV 1/2” sensor, ƒ/2.2, AF","Minimum crease. Maximum smooth. Our patented Flexion hinge mechanism, 8-axis pressure relief, and under-display micro-weaving significantly reduce creases. The “waterdrop”-shaped tension relief mechanism ensures a larger bend radius, minimizing the display crease.","Multi-spatial Speakers: Unique to the OnePlus Open, go from stereo to hero with multiple “Reality” speakers synced up for spatial audio that moves around you - Powered by Dolby Atmos"] },

  { id:4, name: 'Motorola razr 40 Ultra ',productName:"Motorola razr 40 Ultra (Peach Fuzz, 8GB RAM, 256GB Storage) | 3.6 External AMOLED Display | 6.9 AMOLED 165Hz Display | 32MP Selfie Camera |30W TurboPower Charging | Android 13" ,MRP:119999,discount:42 ,  price: 69999, image: "./Images/products/motrolarazr40.png" , about:["Snapdragon 8+ Gen 1 Mobile Platform, 8GB LPDDR5 RAM, 256GB built-in UFS 3.1 Storage","Main display: 6.9 FHD+ pOLED display External display,3.6 pOLED display","Display Resolution - Main display: FHD+ (2640 x 1080) | 413ppi , External display: 1066 x 1056 | 413ppi","Main Camera - 12MP (f/1.5, 1.4μm) | OIS, Rear Camera - 13MP (f/2.2, 1.12μm) | Ultra-wide + macro | FOV 108°, Single LED flash","Front Camera - Main display 32MP (f/2.4, 0.7 μm) | 8MP (f/2.4, 1.4um) Quad Pixel External display Main: 12MP (f/1.5, 1.4μm) | OIS Wide: 13MP (f/2.2, 1.12μm) | FOV 108°","Corning Gorilla Glass Victus on both front and rear, IP52 Water-repellent design, Battery -3800mAh non-removable, 30W TurboPower charging support 5W wireless charging support (charger sold separately)","Dual stereo speakers with Dolby Atmos and Spatial Sound Qualcomm Snapdragon Sound","Sensors - Fingerprint reader, Proximity + light sensor, Ambient light sensor, Accelerometer, Gyroscope, eCompass, Hall sensor"] },
];

products.forEach(product => {
  const productElement = document.createElement('div'); // Adjust element as needed
  productElement.classList.add('product'); // Add a class for styling

  // Create elements for product details (replace with your desired structure)
  const productNameElement = document.createElement('h3');
  productNameElement.textContent = product.name;
  const productPriceElement = document.createElement('p');
  const productPrice = product.price;
  const formattedPrice = productPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  productPriceElement.textContent = ` ${formattedPrice}`;
  const productMRPElement = document.createElement('h6');
  const productMRP = product.MRP;
  const formattedMRP = productMRP.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  productMRPElement.textContent = `MRP: ${formattedMRP}`;
  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name + ' Image'; // Set appropriate alt text
    // Create a button element
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy Now';
    buyButton.addEventListener("click",()=>{
      buyNow(product.id);
    })

  // Add product details to the product element
  productElement.appendChild(productImage);
  productElement.appendChild(productNameElement);
  productElement.appendChild(productPriceElement);
  productElement.appendChild(productMRPElement);
  productElement.appendChild(buyButton);

 

  // Append the product element to the container
  if (productContainer) {
    productContainer.appendChild(productElement);
  }

  productImage. addEventListener('click',function(){
    let url = `product.html?id=${product.id}`;
    window.location.href = url;
  })
  productNameElement. addEventListener('click',function(){
    let url = `product.html?id=${product.id}`;
    window.location.href = url;
  })
});



window.onload = function() {
  if (window.location.pathname.includes("/product.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  let productObj = products.find((obj) => obj.id == productId);
      let descriptionContainer = document.getElementById("description-container");
    let ul = document.createElement('ul');
    productObj.about.forEach(point => {
      let li = document.createElement('li');
      li.textContent = point;
      ul.appendChild(li);
    });
    descriptionContainer.appendChild(ul)
    document.getElementById("discount").textContent = productObj.discount
    let productMRP = productObj.MRP
    productMRP = productMRP.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    document.getElementById("mrp").textContent = productMRP
    let productPrice = productObj.price
    productPrice = productPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    document.getElementById("price").textContent = productPrice;
    document.getElementById("name").textContent = productObj.productName;
    document.getElementById("product-image").src = productObj.image;
    document.getElementById("product-image").alt = productObj.name;
    const BuyNowButton = document.getElementById('buyNowBtn');
    BuyNowButton.addEventListener('click', function(){
      buyNow(productObj.id)
    });
    const addToCartButton = document.getElementById('addToCartBtn');
    addToCartButton.addEventListener('click', function(){
      addToCart(productObj.id)
    });
}


if (window.location.pathname.includes("/cart.html")) {
  let cartItems = JSON.parse(localStorage.getItem('cart'));
  if(!cartItems || cartItems.length==0){
    let containerDiv = document.createElement('div');
    containerDiv.id = "containerDiv"
    let p = document.createElement('p');
    p.id = "emptyCart"
    p.textContent = "Cart is empty!!"
    let shopNow = document.createElement("button")
    shopNow.id = "shopNow"
    shopNow.textContent = "Shop Now"
    shopNow.addEventListener("click", function(){
      window.location.href = "index.html#product-heading"
    })
    containerDiv.appendChild(p)
    containerDiv.appendChild(shopNow)
    document.getElementById("cart-container").appendChild(containerDiv)
  }else{
    let container = document.getElementById("cart-container");
    cartItems.forEach(item=>{
      let productObj = products.find((obj) => obj.id == item.id);
      let productContainer = document.createElement("div");
      productContainer.classList.add("product-container")
      let imageContainer = document.createElement("div")
      imageContainer.classList.add("item-image")
      imageContainer.style.backgroundImage = `url('${productObj.image}')`
      let detailsContainer = document.createElement("div");
      detailsContainer.classList.add("details-container")
      let productName = document.createElement("h4");
      productName.textContent = productObj.productName;
      let quantityDiv = document.createElement("div")
      quantityDiv.classList.add("quantity-div")
      let minusBtn = document.createElement("button")
      minusBtn.textContent = "-"
      minusBtn.addEventListener("click",function(){
        decreaseQuantity(item.id);
      })
      let plusBtn = document.createElement("button")
      plusBtn.textContent = "+"
      plusBtn.addEventListener("click",function(){
        increaseQuantity(item.id);
      })
      let quantityDisplay = document.createElement("p")
      quantityDisplay.textContent = item.quantity
      quantityDiv.appendChild(minusBtn)
      quantityDiv.appendChild(quantityDisplay)
      quantityDiv.appendChild(plusBtn)
      let deleteItem = document.createElement("a")
      deleteItem.classList.add("delete-item")
      deleteItem.textContent = "Delete"
      deleteItem.addEventListener("click",function(){
        deleteProduct(item.id)
      })
      let priceContainer = document.createElement("div")
      priceContainer.classList.add("priceContainer")
      let price = document.createElement("p")
      price.textContent = productObj.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
      priceContainer.appendChild(price)

      detailsContainer.appendChild(productName);
      detailsContainer.appendChild(quantityDiv)
      detailsContainer.appendChild(deleteItem)

      productContainer.appendChild(imageContainer);
      productContainer.appendChild(detailsContainer)
      productContainer.appendChild(priceContainer)

      container.appendChild(productContainer)

      let checkoutBtn = document.createElement("button")
      checkoutBtn.id = "checkoutBtn";
      checkoutBtn.textContent = "Checkout"
      checkoutBtn.onclick = checkOut;
      document.getElementById("checkout-container").appendChild(checkoutBtn)

    })
  }



  let subTotal=0;
  cartItems.forEach(item=>{
    let productObj = products.find((obj) => obj.id == item.id);
    subTotal = subTotal + (item.quantity*productObj.price)
  })
  document.getElementById("total").textContent = subTotal.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
}

};


function goToCart(){
  window.location.href = "cart.html"
}

function addToCart(id){
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let findproduct = cartItems.find((obj) => obj.id == id);
  if(findproduct){
    findproduct.quantity = findproduct.quantity+1
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }else{
    item = {
      id: id,
      quantity: 1
    }
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
  let AddedToCart = document.getElementById("AddToCart");
  AddedToCart.style.display = "flex"
  setTimeout(()=>{
    AddedToCart.style.display = "none"
  },1500)
}

function buyNow(id){
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems = [{
    id:id,
    quantity:1
  }]
  localStorage.setItem('cart', JSON.stringify(cartItems));
  window.location.href = "cart.html"
}

function increaseQuantity(id){
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let findproduct = cartItems.find((obj) => obj.id == id);
  findproduct.quantity = findproduct.quantity+1
  localStorage.setItem('cart', JSON.stringify(cartItems));
  location.reload();
}
function decreaseQuantity(id){
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let findproduct = cartItems.find((obj) => obj.id == id);
  if(findproduct.quantity==1){
    cartItems = cartItems.filter((obj) => obj.id !== id);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }else{
    findproduct.quantity = findproduct.quantity-1
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
  location.reload();
}
function deleteProduct(id){
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let findproduct = cartItems.find((obj) => obj.id == id);
  cartItems = cartItems.filter((obj) => obj.id !== id);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  location.reload();
}

function checkOut(){
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  localStorage.setItem('cart', JSON.stringify(""));

  let orderPlaced = document.getElementById("placeorder");
  orderPlaced.style.display = "flex"
  setTimeout(()=>{
    orderPlaced.style.display = "none"
    location.reload()
  },1500)
}