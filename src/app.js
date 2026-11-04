import "./components.js";

const ASSET = "https://www.figma.com/api/mcp/asset/17bb51b3-29e0-4fcd-b506-472ea82906ce/";
const LOGO = ASSET + "29ab0.svg";
const HERO = ASSET + "40cd8.png";
const images = {
  beef: ASSET + "fba1b.png",
  veggie: ASSET + "d0133.png",
  bbq: ASSET + "3dfda.png",
  mushroom: ASSET + "46cb4.png",
  cheese: ASSET + "cb356.png",
  sandwich: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=900&q=85",
  wrap: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  bowl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  sides: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
  smoothie: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85",
  matcha: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85"
};

const products = [
  {id:"beef",name:"Classic Beef Cheeseburger",category:"Burgers",price:17,image:images.beef,description:"Juicy beef patty, cheddar, lettuce, tomato and our house sauce.",tags:["Top Selling","Popular"],allergens:"Gluten, milk, sesame"},
  {id:"veggie",name:"Veggie Delight Burger",category:"Burgers",price:14,image:images.veggie,description:"A plant-based patty with crisp greens, tomato and vegan sauce.",tags:["Vegan","Popular"],allergens:"Gluten, sesame"},
  {id:"bbq",name:"Spicy BBQ Chicken Burger",category:"Burgers",price:16.5,image:images.bbq,description:"Grilled chicken, smoky BBQ sauce, pickles and crunchy slaw.",tags:["Spicy","Popular"],allergens:"Gluten, milk"},
  {id:"mushroom",name:"Mushroom Swiss Burger",category:"Burgers",price:16,image:images.mushroom,description:"Swiss cheese, sautéed mushrooms and a toasted brioche bun.",tags:["Popular"],allergens:"Gluten, milk"},
  {id:"cheese",name:"Five Cheese Burger",category:"Burgers",price:12,image:images.cheese,description:"A rich cheese blend, crisp lettuce and our signature sauce.",tags:["Top Selling"],allergens:"Gluten, milk"},
  {id:"wrap",name:"Spicy Chicken Avocado Wrap",category:"Sandwiches",price:15.5,image:images.wrap,description:"Tender chicken, avocado, greens and a light spicy dressing.",tags:["Spicy"],allergens:"Gluten"},
  {id:"ciabatta",name:"Roast Veggie Ciabatta",category:"Sandwiches",price:14,image:images.sandwich,description:"Roasted vegetables, basil and mozzarella in toasted ciabatta.",tags:["Vegetarian"],allergens:"Gluten, milk"},
  {id:"bagel",name:"Smoked Salmon Bagel",category:"Sandwiches",price:16.5,image:images.sandwich,description:"Smoked salmon, cream cheese, cucumber and fresh dill.",tags:["Popular"],allergens:"Gluten, fish, milk"},
  {id:"pork",name:"Pulled Pork BBQ Sandwich",category:"Sandwiches",price:19.75,image:images.bbq,description:"Slow-cooked pulled pork, tangy BBQ and crunchy slaw.",tags:["Popular"],allergens:"Gluten"},
  {id:"falafel",name:"Mediterranean Falafel Pita",category:"Sandwiches",price:13,image:images.wrap,description:"Falafel, cucumber, tomato and herbed tahini in warm pita.",tags:["Vegan"],allergens:"Gluten, sesame"},
  {id:"panini",name:"Turkey Cranberry Panini",category:"Sandwiches",price:16,image:images.sandwich,description:"Roast turkey, cranberry relish and melted cheese.",tags:["Popular"],allergens:"Gluten, milk"},
  {id:"bowl",name:"Mediterranean Veggie Bowl",category:"Sides",price:13,image:images.bowl,description:"Fresh vegetables, grains, olives and lemon dressing.",tags:["Vegan","Gluten Free"],allergens:"Sesame"},
  {id:"tofu",name:"Tofu Teriyaki Stir-Fry",category:"Sides",price:14.5,image:images.sides,description:"Crisp tofu, seasonal vegetables and teriyaki glaze.",tags:["Vegan"],allergens:"Soy, sesame"},
  {id:"chai",name:"Chai Latte",category:"Beverages",price:6.5,image:images.coffee,description:"Black tea and aromatic spices with steamed milk.",tags:["Popular"],allergens:"Milk"},
  {id:"smoothie",name:"Tropical Green Smoothie",category:"Beverages",price:8,image:images.smoothie,description:"Mango, pineapple, spinach and banana blended fresh.",tags:["Vegan"],allergens:"None listed"},
  {id:"matcha",name:"Iced Matcha Latte",category:"Beverages",price:7.5,image:images.matcha,description:"Ceremonial-style matcha shaken with chilled milk.",tags:["Popular"],allergens:"Milk"}
];

const money = value => "CHF " + Number(value || 0).toFixed(2).replace(".", ",");
const esc = value => String(value == null ? "" : value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const today = new Date();
const dateValue = today.getFullYear() + "-" + String(today.getMonth()+1).padStart(2,"0") + "-" + String(today.getDate()).padStart(2,"0");

const state = {
  view:"home",
  history:[],
  orderType:"takeaway",
  fulfillment:"pickup",
  orderDate:dateValue,
  orderTime:"12:15",
  postalCode:"8001",
  outlet:"Altstetten Outlet",
  category:"Popular Items",
  dietary:[],
  query:"",
  cart:[],
  selectedPromo:"",
  customer:{name:"Karl Weaver",phone:"078 000 00 00",email:"karl@selise.ch",address:"Apartment 3A, House 233",street:"Langstrasse",city:"Zürich",zone:"LANGSTRASSE",postal:"8001",comment:"Please add extra spice to the fries and less cheese in chicken burger"},
  tip:0,
  payment:"card",
  orderNumber:5124,
  modal:null,
  modalProduct:null,
  modalQty:1,
  modalOptions:[],
  promoMessage:""
};

try {
  const saved = JSON.parse(sessionStorage.getItem("omk-order") || "null");
  if (saved && Array.isArray(saved.cart)) state.cart = saved.cart.filter(row => products.some(p => p.id === row.id));
} catch (_) {}

const app = document.getElementById("app");
const modalRoot = document.getElementById("modal-root");
const liveRegion = document.getElementById("live-region");

function announce(message) {
  liveRegion.textContent = "";
  window.setTimeout(() => { liveRegion.textContent = message; }, 20);
}
function toast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const node = document.createElement("div");
  node.className = "toast";
  node.setAttribute("role","status");
  node.textContent = message;
  document.body.appendChild(node);
  window.setTimeout(() => node.remove(), 2600);
}
function persist() {
  try { sessionStorage.setItem("omk-order", JSON.stringify({cart:state.cart})); } catch (_) {}
}
function go(view, replace) {
  if (!replace && state.view !== view) state.history.push(state.view);
  state.view = view;
  state.modal = null;
  modalRoot.innerHTML = "";
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}
function back() {
  const previous = state.history.pop();
  if (previous) go(previous,true);
  else if (state.view === "menu") go("order",true);
  else go("home",true);
}
function getProduct(id) { return products.find(product => product.id === id); }
function cartCount() { return state.cart.reduce((sum,row) => sum + row.qty,0); }
function subtotal() { return state.cart.reduce((sum,row) => sum + getProduct(row.id).price * row.qty,0); }
function discount() { return state.selectedPromo ? Math.min(subtotal() * .2, 12) : 0; }
function tax() { return Math.max(0, (subtotal() - discount()) * .081); }
function deliveryFee() { return state.fulfillment === "delivery" ? 3.5 : 0; }
function total() { return Math.max(0, subtotal() - discount() + tax() + deliveryFee() + state.tip); }
function formatPrice(value) { return money(value); }
function addToCart(id, qty, options) {
  const found = state.cart.find(row => row.id === id && JSON.stringify(row.options || []) === JSON.stringify(options || []));
  if (found) found.qty += qty;
  else state.cart.push({id,qty,options:options || []});
  persist();
  announce(getProduct(id).name + " added to cart.");
}
function changeQty(index, delta) {
  const row = state.cart[index];
  if (!row) return;
  row.qty += delta;
  if (row.qty <= 0) state.cart.splice(index,1);
  persist();
  render();
}
function header(showBack) {
  return '<omk-topbar ' + (showBack ? 'show-back' : '') + '></omk-topbar>';
}
function topStep(current) {
  const orderDone = current > 1;
  return '<div class="stepper" aria-label="Order progress">' +
    '<div class="stepper-item ' + (current===1?"active":(orderDone?"done":"")) + '"><span class="step-number">' + (orderDone?"✓":"1") + '</span><span>ORDER TYPE</span></div>' +
    '<span class="step-line" aria-hidden="true"></span>' +
    '<div class="stepper-item ' + (current===2?"active":"") + '"><span class="step-number">2</span><span>TIME &amp; OUTLET</span></div></div>';
}
function renderHome() {
  const popular = products.slice(0,5).map(p =>
    '<article class="popular-tile">' +
      '<div class="popular-image"><img src="' + p.image + '" alt="' + esc(p.name) + '" loading="lazy">' +
      '<button type="button" class="order-tile-btn" data-action="start-order">Order Now</button></div>' +
      '<h3>' + esc(p.name) + '</h3><div class="price-line">' + money(p.price) + (p.id==="veggie" ? '<span class="price-old">CHF 14,30</span><span class="discount">-17% ♥</span>' : '') + '</div></article>'
  ).join("");
  app.innerHTML = header(false) +
    '<main class="app-page"><div class="page-wrap home-wrap">' +
      '<section class="hero" style="background-image:url(' + HERO + ')" aria-label="Aurelian Bistro">' +
        '<div class="hero-content"><div><h1>Aurelian Bistro</h1><p>Fresh food at your door in minutes — ordered straight online, no app.</p>' +
        '<omk-button variant="primary hero-cta" data-action="start-order">START ORDER <span aria-hidden="true">→</span></omk-button></div>' +
        '<div class="prep-pill"><span aria-hidden="true">◷</span> Avg prep time 25min</div></div></section>' +
      '<section class="section-card popular-panel"><div class="section-head"><h2>Popular items</h2></div><div class="popular-track">' + popular + '</div></section>' +
      '<footer class="home-footer"><img src="' + LOGO + '" alt="Order Monkey"><a href="#" data-action="terms">Terms &amp; Conditions</a></footer>' +
    '</div></main>';
}
function renderOrderType() {
  const choices = [
    {id:"takeaway",icon:"♧",title:"Takeaway",copy:"Pick date, time & location and collect yourself."},
    {id:"delivery",icon:"♢",title:"Delivery",copy:"Get faster delivery straight to your door."},
    {id:"catering",icon:"◌",title:"Catering",copy:"Larger order, pickup billed by invoice."}
  ];
  app.innerHTML = header(true) + '<main class="app-page"><div class="page-wrap"><section class="card step-card">' +
    topStep(1) + '<h1 class="step-title">How would you like to order?</h1>' +
    '<div class="order-choice-grid">' + choices.map(c =>
      '<button class="choice-card ' + (state.orderType===c.id?"selected":"") + '" data-action="select-order" data-type="' + c.id + '" aria-pressed="' + (state.orderType===c.id) + '">' +
      '<span class="choice-icon" aria-hidden="true">' + c.icon + '</span><strong>' + c.title + '</strong><span>' + c.copy + '</span></button>'
    ).join("") + '</div>' +
    '<div class="step-footer"><omk-button variant="primary full" data-action="to-outlet">CONTINUE <span aria-hidden="true">→</span></omk-button></div>' +
  '</section></div></main>';
}
function renderOutlet() {
  app.innerHTML = header(true) + '<main class="app-page"><div class="page-wrap"><section class="card step-card">' +
    topStep(2) + '<div class="choice-inner">' +
      '<div class="summary-strip"><strong><span aria-hidden="true">♧</span> ' + state.orderType[0].toUpperCase() + state.orderType.slice(1) + '</strong><button type="button" data-action="change-type">Change type</button></div>' +
      '<section class="panel-soft"><h3>How would you like to receive the order?</h3><div class="radio-tiles">' +
        '<button class="radio-tile ' + (state.fulfillment==="pickup"?"selected":"") + '" data-action="fulfillment" data-value="pickup" aria-pressed="' + (state.fulfillment==="pickup") + '">I will pick the order <span class="radio-dot"></span></button>' +
        '<button class="radio-tile ' + (state.fulfillment==="delivery"?"selected":"") + '" data-action="fulfillment" data-value="delivery" aria-pressed="' + (state.fulfillment==="delivery") + '">I want delivery <span class="radio-dot"></span></button>' +
      '</div></section>' +
      '<section class="panel-soft"><h3>Select time and postal</h3><div class="field-grid">' +
        '<div class="field"><label for="order-date">Date</label><div class="input-with-icon"><input id="order-date" type="date" min="' + dateValue + '" value="' + state.orderDate + '"><span class="input-icon" aria-hidden="true">▦</span></div></div>' +
        '<div class="field"><label for="order-time">Time</label><div class="input-with-icon"><input id="order-time" type="time" value="' + state.orderTime + '"><span class="input-icon" aria-hidden="true">◷</span></div></div>' +
        '<div class="field"><label for="postal-code">Postal Code</label><input id="postal-code" value="' + esc(state.postalCode) + '" inputmode="numeric" autocomplete="postal-code"></div>' +
        '<div class="field"><label>&nbsp;</label><button class="btn outline full" data-action="search-location">SEARCH FOR LOCATION <span aria-hidden="true">⌕</span></button></div>' +
      '</div></section>' +
      '<section class="map-section"><h2 class="map-title">Choose Location</h2><div class="map-card" aria-label="Illustrative outlet map">' +
        '<div class="map-park one"></div><div class="map-park two"></div><div class="map-road"></div><div class="map-road two"></div>' +
        '<span class="map-label" style="left:54%;top:18%">Bahnhofstrasse</span><span class="map-label" style="left:57%;top:82%">Irchelpark</span><span class="map-label" style="left:28%;top:54%">Langstrasse</span>' +
        '<div class="map-pin" style="left:53%;top:32%"></div><div class="map-pin" style="left:78%;top:14%;transform:rotate(-45deg) scale(.82)"></div><div class="map-pin" style="left:78%;top:75%;transform:rotate(-45deg) scale(.82)"></div>' +
        '<div class="outlet-list">' + ["Zurich Outlet","Altstetten Outlet","Dübendorf Outlet","Oerlikon Outlet"].map((name,i) =>
          '<button class="outlet-option ' + (state.outlet===name?"selected":"") + '" data-action="choose-outlet" data-name="' + name + '" aria-pressed="' + (state.outlet===name) + '">' +
            '<span class="outlet-marker" aria-hidden="true">' + (state.outlet===name?"✓":"⌖") + '</span><span><strong>' + name + '</strong><small>Musterstrasse 12, 8001<br>Zürich, Schweiz</small></span></button>'
        ).join("") + '</div></div></section>' +
      '<div class="step-footer"><omk-button variant="primary full" data-action="to-menu">CONTINUE <span aria-hidden="true">→</span></omk-button></div>' +
    '</div></section></div></main>';
}
function renderProductCard(p) {
  return '<omk-product-card product-id="' + p.id + '" name="' + esc(p.name) + '" price="' + money(p.price) + '" image="' + p.image + '" category="' + esc(p.category) + '"></omk-product-card>';
}
function renderCartRows() {
  if (!state.cart.length) return '<div class="empty-cart"><span aria-hidden="true">🛍</span><p>Your cart is empty</p><small>Add something delicious to get started.</small></div>';
  return state.cart.map((row,index) => {
    const p=getProduct(row.id);
    return '<div class="cart-row"><img src="' + p.image + '" alt="" loading="lazy"><div class="cart-item-copy"><div class="cart-item-name">' + esc(p.name) + '</div><div class="cart-item-price">' + money(p.price * row.qty) + '</div>' +
      '<div class="qty-row"><button class="qty-button" data-action="cart-qty" data-index="' + index + '" data-delta="-1" aria-label="Remove one ' + esc(p.name) + '">−</button><span class="qty-value">' + row.qty + '</span><button class="qty-button" data-action="cart-qty" data-index="' + index + '" data-delta="1" aria-label="Add one ' + esc(p.name) + '">+</button></div></div></div>';
  }).join("");
}
function renderCart() {
  return '<aside class="menu-sidebar">' +
    '<div class="promo-mini"><span class="promo-icon" aria-hidden="true">%</span><div><strong>20% OFF</strong><small>Apply on full menu</small></div><input type="checkbox" aria-label="Apply 20 percent off" data-action="promo-toggle" ' + (state.selectedPromo?"checked":"") + '></div>' +
    '<div class="promo-mini"><span class="promo-icon" aria-hidden="true">%</span><div><strong>30% OFF</strong><small>Apply on drinks</small></div><input type="checkbox" aria-label="Apply 30 percent off drinks" disabled></div>' +
    '<section class="section-card cart-card"><div class="cart-title"><h2>Cart</h2><small>' + cartCount() + ' Items</small></div><div class="cart-items">' + renderCartRows() + '</div>' +
      (state.selectedPromo ? '<div class="cart-promo">20% OFF APPLIED ON FULL MENU <button data-action="remove-promo" aria-label="Remove offer">×</button></div>' : '') +
      '<div class="cart-total"><span>Total</span><strong>' + money(subtotal()-discount()) + '</strong></div>' +
    '</section>' +
    '<section class="section-card prep-card"><div class="prep-top"><strong>30–35 min</strong><span class="tag">' + (state.fulfillment==="delivery"?"Delivery":"Takeaway") + '</span></div><p>Avg preparing time</p><div class="location-text">⌖ &nbsp; Location<br><strong>' + esc(state.outlet) + '</strong> · Musterstrasse 12, 8001 Zürich</div><button data-action="change-location">♧ &nbsp; Change</button></section>' +
    '</aside>';
}
function renderOffers() {
  return '<section class="section-card"><div class="section-head"><h2>Rewards</h2><span>⌃</span></div><div class="section-body"><div class="mini-reward-grid">' +
    '<div class="reward-tile"><span>♧</span><strong>Redeem free drink</strong><small>800 Points</small><button data-action="redeem">Redeem</button></div>' +
    '<div class="reward-tile"><span>♧</span><strong>Redeem free burger</strong><small>1300 Points</small><button data-action="redeem">Redeem</button></div>' +
    '<div class="reward-tile"><span>♧</span><strong>Redeem free pizza</strong><small>1600 Points</small><button data-action="redeem">Redeem</button></div>' +
  '</div></div></section>' +
  '<section class="section-card"><div class="section-head"><h2>Vouchers</h2><span>⌃</span></div><div class="section-body"><div class="voucher-grid">' +
    ["Free Voucher for Fries","Free Voucher for Valentine","Free Voucher for Christmas"].map((title,i)=>'<div class="voucher"><span class="voucher-type">' + (i===0?"Single Item":"Full Cart") + '</span><strong>' + title + '</strong><small>Code &nbsp; CXR*****556</small><small>Expires / 31 Dec 2026</small><button data-action="claim-voucher">Claim Now</button></div>').join("") +
  '</div></div></section>' +
  '<section class="section-card"><div class="section-head"><h2>Offered Items</h2><span>⌃</span></div><div class="offered-products">' + products.slice(0,3).map(p=>renderProductCard(p)).join("") + '</div></section>';
}
function renderMenuSections() {
  const groups=[["Burgers",products.filter(p=>p.category==="Burgers")],["Sandwiches",products.filter(p=>p.category==="Sandwiches")],["Sides",products.filter(p=>p.category==="Sides")],["Beverages",products.filter(p=>p.category==="Beverages")]];
  return groups.filter(([name]) => state.category==="Popular Items" || name===state.category).map(([name,items]) => {
    const shown=items.filter(p => {
      const query=state.query.trim().toLowerCase();
      const matchesQuery=!query || p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
      const matchesDiet=!state.dietary.length || state.dietary.every(tag=>p.tags.includes(tag));
      return matchesQuery && matchesDiet;
    });
    if (!shown.length) return "";
    return '<section class="menu-section" id="section-' + name.toLowerCase() + '"><div class="menu-section-head"><h2>' + name + '</h2><button class="collapse-button" data-action="collapse" aria-label="Collapse ' + name + '">⌃</button></div><div class="product-grid">' + shown.map(p=>renderProductCard(p)).join("") + '</div></section>';
  }).join("");
}
function renderMenu() {
  const categoryTabs=["Popular Items","My Offers","Burgers","Sandwiches","Sides","Beverages"];
  const dietary=["Vegan","Hypoallergenic","Halal","Gluten Free","Low Fat","Top Selling"];
  const offers=state.category==="My Offers";
  app.innerHTML=header(true) + '<main class="app-page"><div class="page-wrap"><div class="menu-layout"><div class="menu-main">' +
    '<section class="menu-hero" style="background-image:url(' + HERO + ')"><div class="menu-hero-copy"><h1>Aurelian Bistro</h1><p><span class="open-dot"></span>Open Now · 11:00 – 22:00</p></div></section>' +
    '<section class="section-card"><div class="menu-toolbar"><strong>Menu</strong><div class="menu-actions"><label class="search-box"><span aria-hidden="true">⌕</span><input id="menu-search" type="search" value="' + esc(state.query) + '" placeholder="Search Products" aria-label="Search menu products"></label><button class="btn secondary small" data-action="shop-info">ⓘ Shop Info</button></div></div></section>' +
    '<section class="section-card"><nav class="category-tabs" aria-label="Menu categories">' + categoryTabs.map(category=>'<button class="category-tab ' + (state.category===category?"active":"") + '" data-action="category" data-category="' + category + '" aria-pressed="' + (state.category===category) + '">' + category + '</button>').join("") + '</nav>' +
      '<div class="diet-filters">' + dietary.map(tag=>'<button class="diet-chip ' + (state.dietary.includes(tag)?"active":"") + '" data-action="diet" data-tag="' + tag + '" aria-pressed="' + state.dietary.includes(tag) + '">' + tag + '</button>').join("") + '</div></section>' +
    (offers ? renderOffers() : '<section class="rewards-banner"><div class="reward-person"><div class="reward-avatar" aria-hidden="true">👩🏽</div><div><strong>SARAH CHRISTOPHER</strong><small>LOYALTY MEMBER</small></div></div><div class="reward-points">1256 PT</div></section>' + renderMenuSections()) +
  '</div>' + renderCart() + '</div></div>' +
  (cartCount() ? '<div class="sticky-cart-mobile"><div class="sticky-cart-info"><span class="cart-icon" aria-hidden="true">▣</span><span><strong>' + cartCount() + ' Items | ' + money(subtotal()) + '</strong><small>Extra charges may apply</small></span></div><button data-action="checkout">CHECKOUT</button></div>' : '') +
  '</main>';
}
function renderCheckoutItems() {
  if (!state.cart.length) return '<p class="muted">Your cart is empty. Add an item from the menu to continue.</p>';
  return state.cart.map((row,index)=>{
    const p=getProduct(row.id);
    return '<div class="checkout-item"><img src="' + p.image + '" alt=""><div><strong>' + esc(p.name) + '</strong><small>' + (row.options&&row.options.length?esc(row.options.join(", ")):"No add-ons") + '</small><div class="qty-row"><button class="qty-button" data-action="cart-qty" data-index="' + index + '" data-delta="-1" aria-label="Remove one item">−</button><span class="qty-value">' + row.qty + '</span><button class="qty-button" data-action="cart-qty" data-index="' + index + '" data-delta="1" aria-label="Add one item">+</button></div></div><div class="checkout-price">' + money(p.price*row.qty) + '</div></div>';
  }).join("");
}
function renderBill() {
  return '<div class="bill-lines"><div class="bill-line"><span>Item Total</span><span>' + money(subtotal()) + '</span></div>' +
    '<div class="bill-line"><span>Tax</span><span>' + money(tax()) + '</span></div>' +
    '<div class="bill-line"><span>Tip</span><span>' + money(state.tip) + '</span></div>' +
    (deliveryFee()?'<div class="bill-line"><span>Delivery</span><span>' + money(deliveryFee()) + '</span></div>':'') +
    (discount()?'<div class="bill-line discount"><span>Voucher (Promo Code)</span><span>− ' + money(discount()) + '</span></div>':'') +
    '<div class="bill-line total"><span>TO PAY</span><span>' + money(total()) + '</span></div></div>';
}
function renderCheckout() {
  app.innerHTML=header(true) + '<main class="app-page"><div class="page-wrap"><div class="checkout-layout"><div class="checkout-main">' +
    '<section class="checkout-card"><h2>Your Items <small class="muted" style="float:right;font-size:10px">' + cartCount() + ' Items</small></h2><div class="checkout-card-body">' + renderCheckoutItems() +
      '<button class="inline-add" data-action="back-menu">＋ &nbsp; Add more item</button></div></section>' +
    '<section class="checkout-card"><h2>Goes well with</h2><div class="offered-products">' + products.slice(0,3).map(p=>renderProductCard(p)).join("") + '</div></section>' +
    '<section class="checkout-card"><h2>Promo Code</h2><div class="checkout-card-body"><div class="promo-field"><input id="promo-code" value="' + (state.selectedPromo?"OMK20":"") + '" placeholder="Enter Promo Code" aria-label="Promo code"><button class="btn secondary small" data-action="apply-promo">Apply</button></div>' + (state.promoMessage?'<div class="promo-feedback">' + esc(state.promoMessage) + '</div>':'') + '</div></section>' +
    '<form class="checkout-card" id="customer-form"><h2>Customer Information</h2><div class="checkout-card-body form-stack">' +
      '<div class="field"><label for="customer-name">Name</label><input id="customer-name" name="name" placeholder="Enter Name" autocomplete="name" value="' + esc(state.customer.name) + '" required></div>' +
      '<div class="field-grid"><div class="field"><label for="customer-phone">Phone number</label><input id="customer-phone" name="phone" type="tel" placeholder="Add Phone Number" autocomplete="tel" value="' + esc(state.customer.phone) + '" required></div><div class="field"><label for="customer-email">Email address</label><input id="customer-email" name="email" type="email" placeholder="Email Address" autocomplete="email" value="' + esc(state.customer.email) + '" required></div></div>' +
    '</div></form>' +
    '<section class="checkout-card"><h2>' + (state.fulfillment==="delivery"?"Delivery":"Pickup") + ' Information</h2><div class="checkout-card-body form-stack">' +
      '<div class="field"><label for="customer-address">House / apartment</label><input id="customer-address" value="' + esc(state.customer.address) + '" placeholder="Enter Address (House/Apartment)" ' + (state.fulfillment==="delivery"?"required":"") + '></div>' +
      '<div class="field-grid"><div class="field"><label for="customer-street">Street</label><input id="customer-street" value="' + esc(state.customer.street) + '" placeholder="Enter Street" ' + (state.fulfillment==="delivery"?"required":"") + '></div><div class="field"><label for="customer-city">City</label><select id="customer-city"><option>ZÜRICH</option><option>Altstetten</option><option>Dübendorf</option><option>Oerlikon</option></select></div></div>' +
      '<div class="field-grid"><div class="field"><label for="customer-zone">Select Zone</label><select id="customer-zone"><option>LANGSTRASSE</option><option>ALTSTETTEN</option><option>CITY CENTRE</option></select></div><div class="field"><label for="customer-postal">Postal Code</label><input id="customer-postal" value="' + esc(state.customer.postal) + '" placeholder="Enter Postal Code"></div></div>' +
    '</div></section>' +
    '<section class="checkout-card"><h2>Comment</h2><div class="checkout-card-body"><div class="field"><label for="customer-comment">Order comments</label><textarea id="customer-comment" placeholder="Write here e.g. bring cutlery">' + esc(state.customer.comment) + '</textarea></div></div></section>' +
  '</div><aside class="checkout-side">' +
    '<section class="checkout-card"><h2>Bill Details</h2><div class="checkout-card-body">' + renderBill() + '</div></section>' +
    '<section class="checkout-card prep-card"><div class="prep-top"><strong>30–35 min</strong><span class="tag">' + (state.fulfillment==="delivery"?"Delivery":"Takeaway") + '</span></div><p>Avg preparing time</p><div class="location-text">⌖ &nbsp; Location<br><strong>' + esc(state.outlet) + '</strong> · Musterstrasse 12, 8001 Zürich</div><button data-action="change-location">♧ &nbsp; Change</button></section>' +
    '<section class="checkout-card"><div class="checkout-card-body"><h3 style="margin:0 0 12px;font-size:14px;font-weight:500">Add a tip</h3><div class="tip-options">' + [0,2,3.3,5].map(value=>'<button class="tip-option ' + (state.tip===value?"selected":"") + '" data-action="tip" data-value="' + value + '">' + (value===0?"No tip":money(value)) + '</button>').join("") + '</div></div></section>' +
    '<omk-button variant="primary full" data-action="to-payment">CONTINUE TO CHECKOUT <span aria-hidden="true">→</span></omk-button>' +
  '</aside></div></div></main>';
}
function renderPayment() {
  const options=[["card","💳","Card"],["twint","TWINT","TWINT"],["apple"," Pay","Apple Pay"],["google","G Pay","Google Pay"]];
  app.innerHTML=header(true) + '<main class="payment-screen"><section class="payment-card"><h1>Available Payment Options</h1><p>We accept a variety of payment options</p>' +
    '<div class="payment-grid" role="group" aria-label="Choose payment method">' + options.map(([id,icon,label])=>'<button class="payment-option ' + (state.payment===id?"selected":"") + '" data-action="payment-select" data-method="' + id + '" aria-pressed="' + (state.payment===id) + '"><span class="payment-icon">' + icon + '</span><small>' + label + '</small></button>').join("") + '</div>' +
    '<div class="payment-actions"><button class="btn secondary" data-action="back-checkout">BACK TO ORDER</button><button class="btn primary" data-action="place-order">CONTINUE</button></div>' +
    '<div class="demo-note">Demo checkout only. No payment is processed and no card details are requested.</div></section></main>';
}
function renderReceipt() {
  const detailItems=state.cart.map(row=>{
    const p=getProduct(row.id);
    return '<div class="receipt-product"><strong>' + row.qty + 'x</strong><div>' + esc(p.name) + '<small>' + (row.options&&row.options.length?esc(row.options.join(", ")):"No add-ons") + '</small></div><strong>' + money(p.price*row.qty) + '</strong></div>';
  }).join("");
  app.innerHTML=header(false) + '<main class="app-page"><div class="receipt-wrap">' +
    '<div class="receipt-banner"><img class="receipt-food left" src="' + images.bbq + '" alt=""><img class="receipt-food right" src="' + images.bowl + '" alt=""><img class="logo" src="' + LOGO + '" alt="Order Monkey"></div>' +
    '<section class="receipt-section"><h2>Order Details</h2><div class="receipt-line"><span>Order number</span><strong class="red">#' + state.orderNumber + '</strong></div><div class="receipt-line"><span>Order from</span><strong class="red">Aurelian Bistro</strong></div><div class="receipt-line"><span>Order type</span><strong class="tag">' + (state.fulfillment==="delivery"?"DELIVERY":"TAKEAWAY") + '</strong></div></section>' +
    '<section class="receipt-section"><h2>Item Summary</h2>' + detailItems + '</section>' +
    '<section class="receipt-section"><h2>' + (state.fulfillment==="delivery"?"Delivery Address":"Pickup Location") + '</h2><div class="receipt-line"><span>' + esc(state.customer.address) + ', ' + esc(state.customer.street) + ', ' + esc(state.customer.city) + '</span><strong><button class="btn secondary small" data-action="directions">Get Direction</button></strong></div></section>' +
    '<section class="receipt-section"><h2>Customer Information</h2><p class="receipt-line"><span>Name: ' + esc(state.customer.name) + '</span></p><p class="receipt-line"><span>Phone: ' + esc(state.customer.phone) + ' &nbsp; / &nbsp; Email: ' + esc(state.customer.email) + '</span></p></section>' +
    '<section class="receipt-section"><h2>Comments</h2><p style="font-size:12px;margin:0">' + esc(state.customer.comment || "No special instructions.") + '</p></section>' +
    '<section class="receipt-section"><h2>Bill Details</h2><div class="receipt-line"><span>Item Total</span><strong>' + money(subtotal()) + '</strong></div><div class="receipt-line"><span>Tax</span><strong>' + money(tax()) + '</strong></div><div class="receipt-line"><span>Tip</span><strong>' + money(state.tip) + '</strong></div>' +
      (discount()?'<div class="receipt-line"><span>Voucher (Promo Code)</span><strong>− ' + money(discount()) + '</strong></div>':'') +
      (deliveryFee()?'<div class="receipt-line"><span>Delivery</span><strong>' + money(deliveryFee()) + '</strong></div>':'') +
      '<div class="receipt-line" style="border-top:1px solid #eee;padding-top:12px"><strong>You Paid</strong><strong>' + money(total()) + '</strong></div></section>' +
    '<div class="receipt-actions"><button class="btn secondary" data-action="back-menu">Back to Order Receipt</button><button class="btn primary" data-action="download-receipt">↓ &nbsp; Download Receipt</button></div>' +
    '<div style="text-align:center;margin:20px auto 0"><img src="' + LOGO + '" alt="" style="width:100px;margin:auto"></div>' +
  '</div></main>';
}
function render() {
  persist();
  if (state.view==="home") renderHome();
  else if (state.view==="order") renderOrderType();
  else if (state.view==="outlet") renderOutlet();
  else if (state.view==="menu") renderMenu();
  else if (state.view==="checkout") renderCheckout();
  else if (state.view==="payment") renderPayment();
  else if (state.view==="receipt") renderReceipt();
  if (state.modal) renderModal();
}
function openProduct(id) {
  state.modal="product";state.modalProduct=id;state.modalQty=1;state.modalOptions=[];
  renderModal();
}
function renderModal() {
  if (!state.modal) {modalRoot.innerHTML="";return;}
  if (state.modal==="product") {
    const p=getProduct(state.modalProduct);
    if (!p) return;
    modalRoot.innerHTML='<div class="modal-backdrop" data-action="modal-backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-header"><h2 id="modal-title">' + esc(p.name) + '</h2><button class="modal-close" data-action="modal-close" aria-label="Close dialog">×</button></header>' +
      '<div class="modal-body"><div class="modal-image"><img src="' + p.image + '" alt="' + esc(p.name) + '"></div><p style="margin:0 0 5px;font-size:12px">' + esc(p.description) + '</p><p class="muted" style="font-size:10px;margin:0">Allergens: ' + esc(p.allergens) + '</p>' +
      '<div class="option-group"><h3>Choose your extras</h3><div class="option-list">' + ["Extra cheese (+ CHF 1.50)","Add avocado (+ CHF 2.00)","Extra spicy","No onion"].map((name,i)=>'<label class="option-row">' + name + '<input type="checkbox" data-modal-option="' + name + '" ' + (state.modalOptions.includes(name)?"checked":"") + '></label>').join("") + '</div></div>' +
      '<div class="qty-row" style="margin-top:16px"><button class="qty-button" data-action="modal-qty" data-delta="-1" aria-label="Decrease quantity">−</button><strong class="qty-value">' + state.modalQty + '</strong><button class="qty-button" data-action="modal-qty" data-delta="1" aria-label="Increase quantity">+</button></div></div>' +
      '<footer class="modal-footer"><button class="btn secondary" data-action="modal-close">Cancel</button><button class="btn primary" data-action="modal-add">Add to cart · ' + money((p.price + (state.modalOptions.includes("Extra cheese (+ CHF 1.50)")?1.5:0) + (state.modalOptions.includes("Add avocado (+ CHF 2.00)")?2:0))*state.modalQty) + '</button></footer></section></div>';
  } else if (state.modal==="shop") {
    modalRoot.innerHTML='<div class="modal-backdrop" data-action="modal-backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-header"><h2 id="modal-title">Aurelian Bistro</h2><button class="modal-close" data-action="modal-close" aria-label="Close dialog">×</button></header><div class="modal-body"><p class="muted" style="margin-top:0">Fresh food at your door in minutes — ordered straight online.</p><p><strong>Opening hours</strong><br>Monday–Sunday · 11:00–22:00</p><p><strong>Address</strong><br>Musterstrasse 12, 8001 Zürich, Switzerland</p><p><strong>Average preparation time</strong><br>25–35 minutes</p></div></section></div>';
  } else if (state.modal==="login") {
    modalRoot.innerHTML='<div class="modal-backdrop" data-action="modal-backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-header"><h2 id="modal-title">Loyalty Login</h2><button class="modal-close" data-action="modal-close" aria-label="Close dialog">×</button></header><div class="modal-body"><form class="login-form" id="login-form"><p class="muted" style="margin:0">Sign in to view your loyalty points and rewards.</p><div class="field"><label for="login-email">Email address</label><input id="login-email" type="email" placeholder="Enter email address" required></div><button class="btn primary full" type="submit">Continue</button></form></div></section></div>';
  } else if (state.modal==="terms") {
    modalRoot.innerHTML='<div class="modal-backdrop" data-action="modal-backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-header"><h2 id="modal-title">Terms &amp; Conditions</h2><button class="modal-close" data-action="modal-close" aria-label="Close dialog">×</button></header><div class="modal-body"><p>This is a demonstration storefront. Product details, availability, prices and promotions are sample content for the website prototype.</p><p>No real order or payment is submitted by this demo.</p></div></section></div>';
  }
}
function updateCustomer() {
  const get=id=>document.getElementById(id);
  const fields={name:"customer-name",phone:"customer-phone",email:"customer-email",address:"customer-address",street:"customer-street",postal:"customer-postal",comment:"customer-comment"};
  Object.keys(fields).forEach(key=>{const el=get(fields[key]);if(el)state.customer[key]=el.value;});
  const city=get("customer-city"),zone=get("customer-zone");
  if(city)state.customer.city=city.value;
  if(zone)state.customer.zone=zone.value;
}
function placeOrder() {
  if (!state.cart.length) {toast("Your cart is empty.");go("menu");return;}
  updateCustomer();
  state.orderNumber=5124 + Math.floor(Math.random()*875);
  go("receipt");
  announce("Order confirmed. Your receipt is ready.");
}
function downloadReceipt() {
  const rows=state.cart.map(row=>{const p=getProduct(row.id);return row.qty+" x "+p.name+" — "+money(p.price*row.qty);}).join("\n");
  const text=["ORDER MONKEY — ORDER RECEIPT","Aurelian Bistro","Order #"+state.orderNumber,"Customer: "+state.customer.name,"Order type: "+state.fulfillment,"",rows,"","Item total: "+money(subtotal()),"Tax: "+money(tax()),"Tip: "+money(state.tip),"Total paid: "+money(total())].join("\n");
  const blob=new Blob([text],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download="order-monkey-receipt-"+state.orderNumber+".txt";a.click();URL.revokeObjectURL(url);
}
function renderMenuSearch() {
  const input=document.getElementById("menu-search");
  if (!input) return;
  let cursor=input.selectionStart;
  const value=input.value;
  state.query=value;
  renderMenu();
  const next=document.getElementById("menu-search");
  next.focus();next.setSelectionRange(cursor,cursor);
}

document.addEventListener("omk:action",event=>{
  const action=event.detail && event.detail.action;
  if(action==="back")back();
  if(action==="home")go("home");
  if(action==="reset"){state.history=[];state.cart=[];state.selectedPromo="";state.tip=0;persist();go("home",true);toast("Your order has been reset.");}
  if(action==="login"){state.modal="login";renderModal();}
  if(action==="language")toast("English is the available demo language.");
});

document.addEventListener("click",event=>{
  const productButton=event.target.closest("[data-open-product]");
  if(productButton){openProduct(productButton.dataset.openProduct);return;}
  const actionEl=event.target.closest("[data-action]");
  if(!actionEl)return;
  const action=actionEl.dataset.action;
  if(action==="start-order"){go("order");}
  else if(action==="select-order"){state.orderType=actionEl.dataset.type;render();}
  else if(action==="to-outlet"){go("outlet");}
  else if(action==="change-type"){go("order");}
  else if(action==="fulfillment"){state.fulfillment=actionEl.dataset.value;render();}
  else if(action==="choose-outlet"){state.outlet=actionEl.dataset.name;render();}
  else if(action==="search-location"){state.postalCode=document.getElementById("postal-code").value;toast("Showing nearby outlets for "+state.postalCode+".");}
  else if(action==="to-menu"){
    const date=document.getElementById("order-date"),time=document.getElementById("order-time"),postal=document.getElementById("postal-code");
    if(date&&date.value)state.orderDate=date.value;if(time&&time.value)state.orderTime=time.value;if(postal)state.postalCode=postal.value;
    if(!state.orderDate||!state.orderTime||!state.postalCode.trim()){toast("Please complete date, time and postal code.");return;}
    go("menu");
  }
  else if(action==="category"){state.category=actionEl.dataset.category;state.query="";render();}
  else if(action==="diet"){
    const tag=actionEl.dataset.tag;
    state.dietary=state.dietary.includes(tag)?state.dietary.filter(x=>x!==tag):state.dietary.concat(tag);
    render();
  }
  else if(action==="shop-info"){state.modal="shop";renderModal();}
  else if(action==="cart-qty"){changeQty(Number(actionEl.dataset.index),Number(actionEl.dataset.delta));}
  else if(action==="checkout"){go("checkout");}
  else if(action==="back-menu"){go("menu");}
  else if(action==="change-location"){go("outlet");}
  else if(action==="apply-promo"){
    const code=(document.getElementById("promo-code")?.value||"").trim().toUpperCase();
    if(code==="OMK20"||code==="ORDER20"){state.selectedPromo=code;state.promoMessage="Promo code applied — 20% off your menu.";toast("20% discount applied.");}
    else{state.promoMessage="That promo code is not valid. Try OMK20.";toast("Invalid promo code.");}
    render();
  }
  else if(action==="remove-promo"){state.selectedPromo="";state.promoMessage="Promotion removed.";render();}
  else if(action==="tip"){state.tip=Number(actionEl.dataset.value);render();}
  else if(action==="to-payment"){
    updateCustomer();
    const form=document.getElementById("customer-form");
    if(form&&!form.reportValidity())return;
    if(!state.cart.length){toast("Add at least one item before checkout.");return;}
    if(state.fulfillment==="delivery"&&(!state.customer.address||!state.customer.street)){toast("Please complete your delivery address.");return;}
    go("payment");
  }
  else if(action==="payment-select"){state.payment=actionEl.dataset.method;render();}
  else if(action==="back-checkout"){go("checkout");}
  else if(action==="place-order"){placeOrder();}
  else if(action==="download-receipt"){downloadReceipt();}
  else if(action==="directions"){toast("Map directions are a demo action.");}
  else if(action==="modal-close"){state.modal=null;modalRoot.innerHTML="";}
  else if(action==="modal-backdrop"&&event.target===actionEl){state.modal=null;modalRoot.innerHTML="";}
  else if(action==="modal-qty"){state.modalQty=Math.max(1,Math.min(20,state.modalQty+Number(actionEl.dataset.delta)));renderModal();}
  else if(action==="modal-add"){
    addToCart(state.modalProduct,state.modalQty,state.modalOptions);
    state.modal=null;modalRoot.innerHTML="";render();toast("Added to your cart.");
  }
  else if(action==="redeem"){toast("Rewards redemption is a demo feature.");}
  else if(action==="claim-voucher"){state.selectedPromo="OMK20";state.promoMessage="Voucher claimed — OMK20 is ready at checkout.";toast("Voucher claimed.");render();}
  else if(action==="collapse"){
    const section=actionEl.closest(".menu-section");
    if(section){const grid=section.querySelector(".product-grid");grid.hidden=!grid.hidden;actionEl.textContent=grid.hidden?"⌄":"⌃";}
  }
  else if(action==="terms"){state.modal="terms";renderModal();}
});
document.addEventListener("change",event=>{
  const option=event.target.closest("[data-modal-option]");
  if(option){
    const name=option.dataset.modalOption;
    state.modalOptions=option.checked?state.modalOptions.concat(name):state.modalOptions.filter(x=>x!==name);
    renderModal();
  }
  if(event.target.matches('[data-action="promo-toggle"]')){
    state.selectedPromo=event.target.checked?"OMK20":"";
    render();
  }
});
document.addEventListener("input",event=>{
  if(event.target.id==="menu-search"){
    state.query=event.target.value;
    const cursor=event.target.selectionStart;
    const active=document.activeElement;
    const top=window.scrollY;
    renderMenu();
    const next=document.getElementById("menu-search");
    if(next){next.focus();next.setSelectionRange(cursor,cursor);}
    window.scrollTo(0,top);
  }
});
document.addEventListener("submit",event=>{
  if(event.target.id==="customer-form"){
    event.preventDefault();
    if(!event.target.reportValidity())return;
    updateCustomer();
    go("payment");
  }
  if(event.target.id==="login-form"){
    event.preventDefault();
    state.modal=null;modalRoot.innerHTML="";toast("Loyalty login is not connected in this demo.");
  }
});
render();
