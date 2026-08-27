const MENU = {
coffee: [
  {name:"Drip Coffee",desc:"Coffee roasted fresh daily.",sizes:[["10 oz",1.50],["12 oz",1.75],["16 oz",1.95]]}
],
espresso: [
  {name:"Café Mocha",desc:"Dark or white Ghirardelli chocolate.",sizes:[["10 oz",4],["12 oz",4.5],["16 oz",5]]},
  {name:"Café Latte",desc:"Espresso, steamed milk, froth.",sizes:[["10 oz",3.25],["12 oz",3.75],["16 oz",4.25]]},
  {name:"Café Breve",desc:"Espresso, steamed half + half, froth.",sizes:[["10 oz",4],["12 oz",4.5],["16 oz",5]]},
  {name:"Cappuccino",desc:"Espresso, half froth, half steamed milk.",sizes:[["10 oz",3.25],["12 oz",3.75],["16 oz",4.25]]},
  {name:"Mocha",desc:"Espresso with chocolate & steamed milk.",sizes:[["10 oz",4],["12 oz",4.5],["16 oz",5]]},
  {name:"Caramel Macchiato",desc:"Espresso with vanilla, milk & caramel drizzle.",sizes:[["10 oz",4.25],["12 oz",4.75],["16 oz",5.25]]},
  {name:"White Chocolate Mocha",desc:"Espresso with white chocolate & steamed milk.",sizes:[["10 oz",4.25],["12 oz",4.75],["16 oz",5.25]]},
  {name:"Chai Latte",desc:"Spiced chai with steamed milk.",sizes:[["10 oz",3.75],["12 oz",4.25],["16 oz",4.75]]},
  {name:"Extra Shot (Espresso)",desc:"Add an extra boost.",sizes:[["Shot",.75]]}
],
frappes: [
  {name:"Frappe",desc:"Choose Mocha, Caramel or Vanilla.",sizes:[["10 oz",3],["12 oz",4],["16 oz",4.75]]}
],
tea: [
  {name:"Tea",desc:"Ask your barista about today's selection.",sizes:[["10 oz",2],["12 oz",2.5],["16 oz",3]]},
  {name:"Hot Chocolate",desc:"Rich, creamy & delicious.",sizes:[["Regular",2.75]]},
  {name:"Italian Soda",desc:"Choose your flavor.",sizes:[["Regular",3.25]]},
  {name:"Bottled Water",desc:"Cold bottled water.",sizes:[["Bottle",1]]}
],
smoothies: [
  {name:"Smoothie",desc:"Strawberry, Mango, Peach, Wildberry or Piña Colada.",sizes:[["10 oz",3],["12 oz",3.75],["16 oz",4.75]]}
],
"signature-coffee": [
  {name:"Cup of: XO",desc:"Espresso, Irish cream & caramel with a shot of whiskey.",sizes:[["Regular",13]],alcohol:true},
  {name:"The 2-4-1",desc:"RumChata, caramel & Crown Royal.",sizes:[["Regular",13]],alcohol:true},
  {name:"Mocha Martini",desc:"Espresso, mocha, Irish cream & vodka.",sizes:[["Regular",13]],alcohol:true},
  {name:"Coffee Old Fashioned",desc:"Whiskey, coffee & simple syrup.",sizes:[["Regular",13]],alcohol:true},
  {name:"Irish Coffee",desc:"Jameson & coffee with a touch of cream.",sizes:[["Regular",13]],alcohol:true},
  {name:"Cinnamon Toast Crunch",desc:"RumChata, vanilla & cinnamon whiskey.",sizes:[["Regular",13]],alcohol:true},
  {name:"Peanut Butter Cup",desc:"Frangelico & chocolate vodka.",sizes:[["Regular",13]],alcohol:true}
],
cocktails: [
  {name:"Pineapple Margarita",desc:"Pineapple, tequila, triple sec & lime.",sizes:[["Regular",9]],alcohol:true},
  {name:"Classic Margarita",desc:"Tequila, triple sec & fresh lime.",sizes:[["Regular",8]],alcohol:true},
  {name:"Tequila & Pineapple Juice",desc:"Tequila blended with juicy pineapple.",sizes:[["Regular",9]],alcohol:true},
  {name:"Amaretto Sour",desc:"Amaretto, sour mix & a splash of sweetness.",sizes:[["Regular",9]],alcohol:true},
  {name:"C2C",desc:"Our signature cocktail. Bold, smooth & unforgettable.",sizes:[["Regular",11]],alcohol:true},
  {name:"Strawberry Margarita",desc:"Sweet strawberries, tequila, triple sec & lime.",sizes:[["Regular",9]],alcohol:true},
  {name:"French 75",desc:"Gin, lemon juice, simple syrup topped with sparkling wine.",sizes:[["Regular",11]],alcohol:true},
  {name:"Lemon Drop",desc:"Citrus vodka, lemon & a touch of sweetness.",sizes:[["Regular",10]],alcohol:true},
  {name:"Grandad (Long Island)",desc:"A classic mix of spirits with cola & lime.",sizes:[["Regular",12]],alcohol:true},
  {name:"Vodka Soda",desc:"Crisp, clean & refreshing.",sizes:[["Regular",9]],alcohol:true},
  {name:"Tequila Soda",desc:"Tequila, soda water & lime.",sizes:[["Regular",9]],alcohol:true},
  {name:"Old Fashioned",desc:"Bourbon, bitters, sugar & orange.",sizes:[["Regular",12]],alcohol:true},
  {name:"Simple Henny",desc:"Hennessy & your choice of mixer.",sizes:[["Regular",9]],alcohol:true}
],
"beer-wine": [
  {name:"Chardonnay",desc:"Wine.",sizes:[["Glass",7]],alcohol:true},
  {name:"Moscato",desc:"Wine.",sizes:[["Glass",7]],alcohol:true},
  {name:"White Zinfandel",desc:"Wine.",sizes:[["Glass",7]],alcohol:true},
  {name:"Cabernet Sauvignon",desc:"Wine.",sizes:[["Glass",7]],alcohol:true},
  {name:"Merlot",desc:"Wine.",sizes:[["Glass",7]],alcohol:true},
  {name:"Michelob Ultra",desc:"Beer.",sizes:[["Bottle",4.5]],alcohol:true},
  {name:"Coors Light",desc:"Beer.",sizes:[["Bottle",4.5]],alcohol:true},
  {name:"Miller Lite",desc:"Beer.",sizes:[["Bottle",4.5]],alcohol:true},
  {name:"Bud Light",desc:"Beer.",sizes:[["Bottle",4.5]],alcohol:true},
  {name:"Corona Extra",desc:"Beer.",sizes:[["Bottle",5.5]],alcohol:true},
  {name:"Modelo Especial",desc:"Beer.",sizes:[["Bottle",5.5]],alcohol:true},
  {name:"Red Sangria",desc:"Red wine & fresh fruit.",sizes:[["Glass",7]],alcohol:true},
  {name:"White Sangria",desc:"White wine & fresh fruit.",sizes:[["Glass",7]],alcohol:true}
]};

let category = "coffee";
let cart = [];
let pendingAlcohol = null;
let fulfillment = "pickup";

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const money = n => `$${Number(n).toFixed(2)}`;

function renderMenu(){
  const grid = $("#menuGrid");
  grid.innerHTML = "";
  MENU[category].forEach((item, index)=>{
    const selected = item.sizes[0];
    const card = document.createElement("article");
    card.className = "menu-card" + (item.alcohol ? " alcohol" : "");
    card.innerHTML = `
      <div class="topline"><h3>${item.name}</h3><span class="price">${money(selected[1])}</span></div>
      <p class="desc">${item.desc}</p>
      <div class="size-row">${item.sizes.map((s,i)=>`<button class="size-btn ${i===0?"active":""}" data-i="${i}">${s[0]} · ${money(s[1])}</button>`).join("")}</div>
      <div class="card-footer">${item.alcohol?'<span class="alcohol-tag">21+ ID REQUIRED</span>':'<span></span>'}<button class="add-btn">+ Add</button></div>`;
    let sizeIndex=0;
    card.querySelectorAll(".size-btn").forEach(btn=>btn.addEventListener("click",()=>{
      sizeIndex=Number(btn.dataset.i);
      card.querySelectorAll(".size-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      card.querySelector(".price").textContent=money(item.sizes[sizeIndex][1]);
    }));
    card.querySelector(".add-btn").addEventListener("click",()=>{
      const action=()=>addToCart(item,item.sizes[sizeIndex]);
      if(item.alcohol) requestAge(action); else action();
    });
    grid.appendChild(card);
  });
}
function requestAge(action){
  pendingAlcohol=action; $("#ageGate").classList.add("open");
}
$("#confirmAge").onclick=()=>{ $("#ageGate").classList.remove("open"); if(pendingAlcohol) pendingAlcohol(); pendingAlcohol=null; };
$("#cancelAge").onclick=()=>{ $("#ageGate").classList.remove("open"); pendingAlcohol=null; };

function addToCart(item,size){
  const key=`${item.name}|${size[0]}`;
  const existing=cart.find(x=>x.key===key);
  if(existing) existing.qty++; else cart.push({key,name:item.name,size:size[0],price:size[1],qty:1,alcohol:!!item.alcohol});
  renderCart(); openDrawer();
}
function renderCart(){
  const wrap=$("#cartItems"); wrap.innerHTML="";
  cart.forEach((x,i)=>{
    const row=document.createElement("div"); row.className="cart-item";
    row.innerHTML=`<div><strong>${x.name}</strong><br><small>${x.size} · ${money(x.price)}</small></div>
      <div class="qty"><button data-minus>−</button><span>${x.qty}</span><button data-plus>+</button></div>`;
    row.querySelector("[data-minus]").onclick=()=>{x.qty--; if(x.qty<=0) cart.splice(i,1); renderCart();};
    row.querySelector("[data-plus]").onclick=()=>{x.qty++; renderCart();};
    wrap.appendChild(row);
  });
  const qty=cart.reduce((a,x)=>a+x.qty,0), sub=cart.reduce((a,x)=>a+x.price*x.qty,0);
  $("#cartCount").textContent=qty; $("#subtotal").textContent=money(sub);
  $("#emptyCart").style.display=cart.length?"none":"block";
}
function openDrawer(){
  $("#orderDrawer").classList.add("open"); $("#drawerBackdrop").classList.add("open"); $("#orderDrawer").setAttribute("aria-hidden","false");
}
function closeDrawer(){
  $("#orderDrawer").classList.remove("open"); $("#drawerBackdrop").classList.remove("open"); $("#orderDrawer").setAttribute("aria-hidden","true");
}
$$("[data-open-order]").forEach(b=>b.addEventListener("click",openDrawer));
$("#closeDrawer").onclick=closeDrawer; $("#drawerBackdrop").onclick=closeDrawer;

$$(".tab").forEach(t=>t.addEventListener("click",()=>{
  $$(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");category=t.dataset.category;renderMenu();
}));
$$(".fulfill").forEach(b=>b.addEventListener("click",()=>{
  $$(".fulfill").forEach(x=>x.classList.remove("active"));b.classList.add("active");fulfillment=b.dataset.fulfillment;
  $("#deliveryNotice").classList.toggle("hidden",fulfillment!=="delivery");
  $("#checkoutBtn").classList.toggle("hidden",fulfillment==="delivery");
}));

$("#checkoutBtn").onclick=()=>{
  if(!cart.length){alert("Add at least one item to your order.");return;}
  closeDrawer(); $("#checkoutDialog").showModal();
};
$("#checkoutForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const data=Object.fromEntries(new FormData(e.target).entries());
  const hasAlcohol=cart.some(x=>x.alcohol);
  if(hasAlcohol && !e.target.ageConfirm.checked){alert("Please confirm you are 21+ for alcohol items.");return;}
  const sub=cart.reduce((a,x)=>a+x.price*x.qty,0);
  const lines=cart.map(x=>`${x.qty} × ${x.name} (${x.size}) — ${money(x.qty*x.price)}`).join("\n");
  window.lastOrderSummary=`COFFEE TA COCKTAILS — PICKUP ORDER\n\nCustomer: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email||"-"}\nPickup: ${data.pickupTime}\n\n${lines}\n\nSubtotal: ${money(sub)}\nTax: calculated at live checkout\n\nNotes: ${data.notes||"-"}`;
  $("#reviewContent").textContent=window.lastOrderSummary;
  $("#checkoutDialog").close(); $("#reviewDialog").showModal();
});
$("#closeReview").onclick=()=>$("#reviewDialog").close();
$("#copyOrderBtn").onclick=async()=>{
  await navigator.clipboard.writeText(window.lastOrderSummary||"");
  $("#copyOrderBtn").textContent="Copied!";
  setTimeout(()=>$("#copyOrderBtn").textContent="Copy Order Summary",1500);
};

const cfg=window.C2C_CONFIG||{};
$("#storeAddress").textContent=cfg.address||"";
$("#storeHours").textContent=cfg.hours||"";
$("#directionsBtn").href=cfg.mapsUrl||"#";
$("#phoneBtn").href=cfg.phone?`tel:${cfg.phone}`:"#";
$("#phoneBtn").textContent=cfg.phone?`Call ${cfg.phone}`:"Add Phone";
$("#doorDashBtn").href=cfg.doorDashStorefrontUrl||"#";
$("#doorDashBtn").onclick=(e)=>{
  if(!cfg.doorDashStorefrontUrl){e.preventDefault();alert("Add the DoorDash Storefront URL in config.js after DoorDash activates Online Ordering.");}
};
$("#year").textContent=new Date().getFullYear();
renderMenu();renderCart();
