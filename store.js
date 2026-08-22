/* ===== Shared Wahaty sub-store engine ===== */
const WHATSAPP_NUMBER = "9647760093849";
const DELIVERY_FEE = 5000;
const CATALOG_URL = "https://script.google.com/macros/s/AKfycbz3w-dbosVxWjBcFTEyTbewmY_Ke8U7dK-HCLkdIpfFgX-d6cadoMEEPSUTfxRfK9hD6A/exec";
const SHEET_ORDER_URL = "https://script.google.com/macros/s/AKfycbwJZW9sO4sA44zleHDMf8GQvLzMLEW-_8tsrr-sz0go2_-hiOZBJRM3OGkEh_Z4AzCl/exec";
const SOCIAL = {
  facebook:"https://www.facebook.com/profile.php?id=61592544157037",
  instagram:"https://www.instagram.com/wahatystore/",
  tiktok:"https://www.tiktok.com/@wahatystoreiraq"
};
const CURRENCY = {en:"IQD", ar:"د.ع"};
const CITIES = [
  {en:"Baghdad",ar:"بغداد"},{en:"Basra",ar:"البصرة"},{en:"Mosul (Nineveh)",ar:"الموصل (نينوى)"},
  {en:"Erbil",ar:"أربيل"},{en:"Sulaymaniyah",ar:"السليمانية"},{en:"Duhok",ar:"دهوك"},
  {en:"Kirkuk",ar:"كركوك"},{en:"Najaf",ar:"النجف"},{en:"Karbala",ar:"كربلاء"},
  {en:"Hillah (Babylon)",ar:"الحلة (بابل)"},{en:"Nasiriyah (Dhi Qar)",ar:"الناصرية (ذي قار)"},
  {en:"Amarah (Maysan)",ar:"العمارة (ميسان)"},{en:"Diwaniyah (Qadisiyah)",ar:"الديوانية (القادسية)"},
  {en:"Kut (Wasit)",ar:"الكوت (واسط)"},{en:"Samawah (Muthanna)",ar:"السماوة (المثنى)"},
  {en:"Ramadi (Anbar)",ar:"الرمادي (الأنبار)"},{en:"Fallujah",ar:"الفلوجة"},
  {en:"Baqubah (Diyala)",ar:"بعقوبة (ديالى)"},{en:"Tikrit (Salah al-Din)",ar:"تكريت (صلاح الدين)"},{en:"Halabja",ar:"حلبجة"}
];
const SPECIALS = [
  {ico:"📝", en:{h:"Custom order",p:"Can't find a product? Request it and we'll source it for you."}, ar:{h:"طلب خاص",p:"لم تجد منتجاً؟ اطلبه وسنوفّره لك."}, key:"custom"},
  {ico:"🌍", en:{h:"Out of Iraq order",p:"Ordering from outside Iraq? Message us to arrange it."}, ar:{h:"طلب من خارج العراق",p:"تطلب من خارج العراق؟ راسلنا لترتيب طلبك."}, key:"outside"},
  {ico:"📦", en:{h:"Wholesale (custom)",p:"Bulk & wholesale pricing for shops and businesses."}, ar:{h:"جملة (مخصص)",p:"أسعار الجملة للمحلات والأعمال."}, key:"wholesale"},
  {ico:"💬", en:{h:"Other requests",p:"Any other question or request — just message us."}, ar:{h:"طلبات أخرى",p:"أي سؤال أو طلب آخر — راسلنا مباشرة."}, key:"other"}
];
const T = {
  en:{brand:"", backTxt:"Back to Wahaty", searchph:"Search products…",
    navCats:"Categories", navBrands:"Brands", navSpecial:"Special Orders",
    heroH:"", heroP:"", catsH:"Shop by category", brandsH:"Shop by brand", prodH:"Popular products", viewall:"View all",
    specialH:"Special orders & requests",
    i1h:"Card to card", i1p:"QI Card, FIB or Zain Cash transfer before shipping.",
    i2h:"On arrival", i2p:"Pay when your order arrives at your door.",
    i3h:"WhatsApp ordering", i3p:"Confirm your order in seconds over WhatsApp Business.",
    i4h:"Nationwide delivery", i4p:"We ship to every province in Iraq.",
    footAbout:"Part of the Wahaty oasis — genuine products delivered across Iraq.",
    footShopH:"Shop", footHelpH:"Contact", footWaTxt:"WhatsApp: +964 776 009 3849", footHours:"Sat–Thu · 9am – 9pm",
    rights:"All rights reserved.", cartH:"Your cart", checkoutTxt:"Proceed to checkout",
    coH:"Checkout", coFirst:"First name", coLast:"Family name", coPhone:"Phone number", coCity:"City / Province", coAddr:"Full address", coReq:"Required",
    payH:"Payment method", payCardB:"Card to card", payCardS:"QI Card · FIB · Zain Cash", payCodB:"On arrival", payCodS:"Pay when it arrives",
    totalL:"Total", subtotalL:"Subtotal", deliveryL:"Delivery", placeOrder:"Send order on WhatsApp",
    emptyTxt:"Your cart is empty", addedTxt:"Added to cart", reviewsTxt:"reviews", langLabel:"العربية", cityPh:"Select your city…", subSoon:"Sub-categories coming soon"},
  ar:{brand:"", backTxt:"العودة إلى واحتي", searchph:"ابحث عن المنتجات…",
    navCats:"الفئات", navBrands:"العلامات", navSpecial:"طلبات خاصة",
    heroH:"", heroP:"", catsH:"تسوّق حسب الفئة", brandsH:"تسوّق حسب العلامة", prodH:"المنتجات الشائعة", viewall:"عرض الكل",
    specialH:"طلبات خاصة وخدمات",
    i1h:"بطاقة إلى بطاقة", i1p:"تحويل عبر QI كارد أو FIB أو زين كاش قبل الشحن.",
    i2h:"الدفع عند الاستلام", i2p:"ادفع عند وصول طلبك إلى بابك.",
    i3h:"الطلب عبر واتساب", i3p:"أكّد طلبك خلال ثوانٍ عبر واتساب بزنس.",
    i4h:"توصيل لكل المحافظات", i4p:"نشحن إلى كل محافظة في العراق.",
    footAbout:"جزء من واحة واحتي — منتجات أصلية توصيل لكل العراق.",
    footShopH:"تسوّق", footHelpH:"تواصل معنا", footWaTxt:"واتساب: ٩٦٤٧٧٦٠٠٩٣٨٤٩+", footHours:"السبت–الخميس · ٩ص – ٩م",
    rights:"جميع الحقوق محفوظة.", cartH:"سلة التسوق", checkoutTxt:"إتمام الطلب",
    coH:"إتمام الطلب", coFirst:"الاسم", coLast:"اللقب", coPhone:"رقم الهاتف", coCity:"المدينة / المحافظة", coAddr:"العنوان الكامل", coReq:"مطلوب",
    payH:"طريقة الدفع", payCardB:"بطاقة إلى بطاقة", payCardS:"QI كارد · FIB · زين كاش", payCodB:"الدفع عند الاستلام", payCodS:"ادفع عند الوصول",
    totalL:"المجموع", subtotalL:"المجموع الفرعي", deliveryL:"التوصيل", placeOrder:"إرسال الطلب عبر واتساب",
    emptyTxt:"سلة التسوق فارغة", addedTxt:"أُضيف إلى السلة", reviewsTxt:"تقييم", langLabel:"English", cityPh:"اختر مدينتك…", subSoon:"الأقسام الفرعية قريباً"}
};

function initStore(cfg){
  let lang="en", cart={}, payMethod="card", cardType="QI Card", activeBrand=null, activeCategory=null, openCatIdx=null;
  const CATS=cfg.cats, STORE=cfg.name, HERO=cfg.hero;
  let loading = !!CATALOG_URL;
  let PRODUCTS = CATALOG_URL ? [] : (cfg.products||[]).map(p=>({
    name:{en:p.en,ar:p.ar}, brand:p.brand, price:p.price, category:"", picture:"",
    emoji:p.emoji, rating:p.rating, reviews:p.reviews, tag:p.tag||""
  }));
  let BRANDS = CATALOG_URL ? [] : (cfg.brands || []);
  const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
  const fmt=n=>n.toLocaleString(lang==="ar"?"ar-EG":"en-US")+" "+CURRENCY[lang];
  const stars=r=>"★".repeat(Math.round(r))+"☆".repeat(5-Math.round(r));
  const waLink=t=>`https://wa.me/${WHATSAPP_NUMBER}?text=${t}`;
  function tagText(tag){if(!tag)return"";const p={};tag.split("|").forEach(x=>{const[k,v]=x.split(":");p[k]=v;});return p[lang]||"";}
  function pName(p){ return (p.name && (p.name[lang]||p.name.en)) || ""; }

  function loadCatalog(){
    if(!CATALOG_URL) return;
    fetch(CATALOG_URL).then(r=>r.json()).then(rows=>{
      const mine = rows.filter(x=> x.store===STORE.en && (x.status||"").toLowerCase()==="available");
      PRODUCTS = mine.map(x=>({
        name:{en:x.name,ar:x.name}, brand:x.brand||"", price:x.price||0,
        category:x.category||"", picture:x.picture||"", origin:x.origin||"", description:x.description||"", emoji:cfg.emoji, rating:0, reviews:0, tag:""
      }));
      BRANDS = [...new Set(PRODUCTS.map(p=>p.brand).filter(Boolean))];
      loading = false;
      renderBrands(); renderProducts($("#searchInput").value);
    }).catch(()=>{ loading=false; renderProducts($("#searchInput").value); });
  }

  function renderCats(){
    $("#catGrid").innerHTML=CATS.map((c,i)=>`<div class="cat${activeCategory===c.en?' active':''}" data-cat="${i}"><div class="cat-badge">${c.emoji}</div><div class="name">${c[lang]}</div></div>`).join("");
  }
  function renderBrands(){$("#brandGrid").innerHTML=BRANDS.map(b=>`<div class="brand-tile" data-brand="${b}">${b}</div>`).join("");}
  function renderProducts(filter=""){
    const f=filter.trim().toLowerCase();
    let list=PRODUCTS.map((p,i)=>({...p,id:i}));
    if(activeCategory) list=list.filter(p=>(p.category||"").toLowerCase()===activeCategory.toLowerCase());
    if(activeBrand) list=list.filter(p=>p.brand===activeBrand);
    if(f) list=list.filter(p=>pName(p).toLowerCase().includes(f)||pName(p).includes(filter)||(p.brand||"").toLowerCase().includes(f));
    let title=T[lang].prodH;
    if(activeCategory){const c=CATS.find(x=>x.en===activeCategory); title=c?c[lang]:activeCategory;}
    else if(activeBrand){title=activeBrand;}
    $("#prodTitle").textContent=title;
    $("#clearFilter").style.display=(activeBrand||activeCategory)?"block":"none";
    if(loading){ $("#prodGrid").innerHTML=`<p style="color:var(--muted)">${lang==='ar'?'جارٍ التحميل…':'Loading…'}</p>`; return; }
    $("#prodGrid").innerHTML=list.map(p=>{
      const tg=tagText(p.tag);
      const thumb = p.picture ? `<img src="${p.picture}" alt="${pName(p)}" loading="lazy" onerror="this.parentNode.textContent='${p.emoji||'🛍️'}'">` : (p.emoji||'🛍️');
      const originLine = p.origin ? `<div class="origin">🌍 ${p.origin}</div>` : (p.reviews ? `<div class="stars">${stars(p.rating)}<span>${p.reviews} ${T[lang].reviewsTxt}</span></div>` : `<div class="origin" style="visibility:hidden">·</div>`);
      return `<div class="card" data-view="${p.id}" style="cursor:pointer"><div class="thumb">${thumb}${tg?`<span class="tag">${tg}</span>`:""}</div><div class="body">${p.brand?`<div class="brand">${p.brand}</div>`:""}<div class="pname">${pName(p)}</div>${originLine}<div class="foot"><div class="price">${fmt(p.price)}</div><button class="add" data-id="${p.id}">+</button></div></div></div>`;
    }).join("")||`<p style="color:var(--muted)">${lang==='ar'?'لا توجد منتجات.':'No products found.'}</p>`;
  }
  function renderSpecial(){$("#specialGrid").innerHTML=SPECIALS.map(s=>`<div class="special-card" data-special="${s.key}"><div class="sico">${s.ico}</div><h4>${s[lang].h}</h4><p>${s[lang].p}</p></div>`).join("");}
  function renderCities(){$("#coCity").innerHTML=`<option value="" disabled selected>${T[lang].cityPh}</option>`+CITIES.map(c=>`<option value="${c.en}">${c[lang]}</option>`).join("");}

  function ensurePDModal(){
    if($("#pdModal")) return;
    const el=document.createElement("aside");
    el.className="modal pd-modal"; el.id="pdModal";
    document.body.appendChild(el);
  }
  function openProduct(id){
    ensurePDModal();
    const p=PRODUCTS[id]; if(!p) return;
    const big = p.picture ? `<img src="${p.picture}" alt="${pName(p)}" onerror="this.parentNode.innerHTML='${p.emoji||'🛍️'}'">` : (p.emoji||'🛍️');
    const m=$("#pdModal");
    m.innerHTML=`
      <button class="close-x pd-close" id="pdClose">✕</button>
      <div class="pd-img">${big}</div>
      <div class="pd-info">
        ${p.brand?`<div class="pd-brand">${p.brand}</div>`:""}
        <h3 class="pd-name">${pName(p)}</h3>
        ${p.origin?`<div class="pd-origin">🌍 ${p.origin}</div>`:""}
        ${p.description?`<p class="pd-desc">${p.description}</p>`:""}
        <div class="pd-foot">
          <div class="pd-price">${fmt(p.price)}</div>
          <button class="btn-primary pd-add" data-id="${id}" style="width:auto;padding:12px 22px">${lang==='ar'?'أضف إلى السلة':'Add to cart'}</button>
        </div>
      </div>`;
    m.classList.add("open"); openOverlay();
    $("#pdClose").onclick=()=>{ m.classList.remove("open"); if(!$("#drawer").classList.contains("open")&&!$("#checkoutModal").classList.contains("open")) $("#overlay").classList.remove("open"); };
  }

  function applyLang(){
    const t=T[lang];
    document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
    $("#backArrow").textContent=lang==="ar"?"→":"←";
    $$("[data-i]").forEach(el=>{const k=el.getAttribute("data-i");
      if(k==="brand") el.textContent=STORE[lang];
      else if(k==="heroH") el.textContent=STORE[lang];
      else if(k==="heroP") el.textContent=HERO[lang];
      else if(t[k]!==undefined) el.innerHTML=t[k];});
    $$("[data-ph]").forEach(el=>{const k=el.getAttribute("data-ph");if(t[k]!==undefined)el.placeholder=t[k];});
    $("#langLabel").textContent=t.langLabel;
    document.title=STORE.en;
    renderCats();renderBrands();renderProducts($("#searchInput").value);renderSpecial();renderCities();renderCart();
  }
  function addToCart(id){cart[id]=(cart[id]||0)+1;updateCount();renderCart();showToast(T[lang].addedTxt);}
  function updateCount(){$("#cartCount").textContent=Object.values(cart).reduce((a,b)=>a+b,0);}
  function cartTotal(){return Object.entries(cart).reduce((s,[id,q])=>s+PRODUCTS[id].price*q,0);}
  function renderCart(){
    const ids=Object.keys(cart).filter(id=>cart[id]>0),body=$("#cartBody"),foot=$("#cartFoot");
    if(!ids.length){body.innerHTML=`<div class="empty"><div class="big">🛒</div>${T[lang].emptyTxt}</div>`;foot.style.display="none";return;}
    foot.style.display="block";
    body.innerHTML=ids.map(id=>{const p=PRODUCTS[id];const thumb=p.picture?`<img src="${p.picture}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:11px" onerror="this.parentNode.textContent='${p.emoji||'🛍️'}'">`:(p.emoji||'🛍️');return `<div class="line"><div class="li-thumb">${thumb}</div><div class="li-info"><div class="li-name">${pName(p)}</div><div class="li-price">${fmt(p.price)}</div><div class="qty"><button data-dec="${id}">−</button><span>${cart[id]}</span><button data-inc="${id}">+</button></div></div><button class="li-remove" data-rem="${id}">✕</button></div>`;}).join("");
    $("#cartTotal").textContent=fmt(cartTotal());
  }
  function showToast(m){const el=$("#toast");el.textContent=m;el.classList.add("show");clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove("show"),1700);}
  function openOverlay(){$("#overlay").classList.add("open");}
  function closeAll(){$("#drawer").classList.remove("open");$("#checkoutModal").classList.remove("open");const pd=$("#pdModal");if(pd)pd.classList.remove("open");$("#overlay").classList.remove("open");}
  function openCart(){$("#drawer").classList.add("open");openOverlay();}
  function grandTotal(){return cartTotal()+DELIVERY_FEE;}
  function openCheckout(){
    if(!Object.keys(cart).length)return;
    $("#drawer").classList.remove("open");
    const row=$("#coTotal").closest(".total-row");
    row.style.flexDirection="column";row.style.alignItems="stretch";row.style.gap="6px";
    row.innerHTML=`
      <div style="display:flex;justify-content:space-between;font-size:14px;color:var(--muted)"><span>${T[lang].subtotalL}</span><span>${fmt(cartTotal())}</span></div>
      <div style="display:flex;justify-content:space-between;font-size:14px;color:var(--muted)"><span>${T[lang].deliveryL}</span><span>${fmt(DELIVERY_FEE)}</span></div>
      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding-top:8px;margin-top:2px"><span style="font-weight:700">${T[lang].totalL}</span><span class="amt" id="coTotal">${fmt(grandTotal())}</span></div>`;
    $("#checkoutModal").classList.add("open");openOverlay();
  }
  function validate(){let ok=true;[["f-first","coFirst"],["f-last","coLast"],["f-phone","coPhone"],["f-city","coCity"],["f-addr","coAddr"]].forEach(([f,inp])=>{const bad=!$("#"+inp).value.trim();$("#"+f).classList.toggle("invalid",bad);if(bad)ok=false;});return ok;}
  function buildOrder(){
    const isAr=lang==="ar",ids=Object.keys(cart).filter(id=>cart[id]>0);
    const pay=payMethod==="card"?(T[lang].payCardB+" — "+cardType):T[lang].payCodB;
    let L=[];L.push((isAr?"🛒 طلب جديد من ":"🛒 New order from ")+STORE[lang]);L.push("");
    L.push((isAr?"الاسم: ":"Name: ")+$("#coFirst").value.trim()+" "+$("#coLast").value.trim());
    L.push((isAr?"الهاتف: ":"Phone: ")+$("#coPhone").value.trim());
    L.push((isAr?"المدينة: ":"City: ")+$("#coCity").value);
    L.push((isAr?"العنوان: ":"Address: ")+$("#coAddr").value.trim());L.push("");
    L.push(isAr?"— المنتجات —":"— Items —");
    ids.forEach(id=>{const p=PRODUCTS[id];const nm=(p.name&&(p.name.en||p.name.ar))||"";L.push(`• ${nm} ×${cart[id]} — ${(p.price*cart[id]).toLocaleString("en-US")} IQD`);});L.push("");
    L.push((isAr?"المجموع الفرعي: ":"Subtotal: ")+cartTotal().toLocaleString("en-US")+" IQD");
    L.push((isAr?"التوصيل: ":"Delivery: ")+DELIVERY_FEE.toLocaleString("en-US")+" IQD");
    L.push((isAr?"المجموع: ":"Total: ")+grandTotal().toLocaleString("en-US")+" IQD");
    L.push((isAr?"طريقة الدفع: ":"Payment: ")+pay);
    return encodeURIComponent(L.join("\n"));
  }
  function buildSpecial(key){const isAr=lang==="ar",s=SPECIALS.find(x=>x.key===key);
    return encodeURIComponent([(isAr?"✨ طلب خاص — ":"✨ Special request — ")+STORE[lang],"",(isAr?"النوع: ":"Type: ")+s[lang].h,"",isAr?"مرحباً، أود الاستفسار عن هذا الطلب:":"Hello, I'd like to ask about this request:"].join("\n"));}
  function logOrder(){
    if(!SHEET_ORDER_URL) return;
    const ids=Object.keys(cart).filter(id=>cart[id]>0);
    const items=ids.map(id=>{const p=PRODUCTS[id];const nm=(p.name&&(p.name.en||p.name.ar))||"";return {name:nm, qty:cart[id], unit:p.price, total:p.price*cart[id]};});
    const data={
      store:STORE.en,
      date:new Date().toLocaleString("en-GB"),
      name:$("#coFirst").value.trim()+" "+$("#coLast").value.trim(),
      phone:$("#coPhone").value.trim(),
      city:$("#coCity").value,
      address:$("#coAddr").value.trim(),
      items:items,
      payment:payMethod==="card"?"electronic":"cash on delivery"
    };
    try{
      fetch(SHEET_ORDER_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(data)});
    }catch(e){}
  }

  const r=document.documentElement.style;
  r.setProperty("--brand",cfg.color.brand);r.setProperty("--brand-dark",cfg.color.dark);r.setProperty("--brand-light",cfg.color.light);
  $$(".dot").forEach(el=>el.textContent=cfg.emoji);

  document.addEventListener("click",e=>{
    const t=e.target;
    const add=t.closest("[data-id]");if(add){addToCart(add.dataset.id);if(add.classList.contains("pd-add")){const pd=$("#pdModal");if(pd)pd.classList.remove("open");}return;}
    const inc=t.closest("[data-inc]");if(inc){cart[inc.dataset.inc]++;updateCount();renderCart();return;}
    const dec=t.closest("[data-dec]");if(dec){const id=dec.dataset.dec;cart[id]=Math.max(0,cart[id]-1);if(!cart[id])delete cart[id];updateCount();renderCart();return;}
    const rem=t.closest("[data-rem]");if(rem){delete cart[rem.dataset.rem];updateCount();renderCart();return;}
    const view=t.closest("[data-view]");if(view){openProduct(+view.dataset.view);return;}
    const cat=t.closest("[data-cat]");if(cat){const c=CATS[+cat.dataset.cat];activeCategory=(activeCategory===c.en)?null:c.en;activeBrand=null;$("#searchInput").value="";renderCats();renderProducts();document.querySelector("#products").scrollIntoView({behavior:"smooth"});return;}
    const br=t.closest("[data-brand]");if(br){activeBrand=br.dataset.brand;activeCategory=null;$("#searchInput").value="";renderCats();renderProducts();document.querySelector("#products").scrollIntoView({behavior:"smooth"});return;}
    const sp=t.closest("[data-special]");if(sp){window.open(waLink(buildSpecial(sp.dataset.special)),"_blank");return;}
    const nav=t.closest("[data-nav]");if(nav){e.preventDefault();const m={categories:"#categories",brands:"#brands",special:"#special"};document.querySelector(m[nav.dataset.nav]).scrollIntoView({behavior:"smooth"});$$(".mainnav a[data-nav]").forEach(a=>a.classList.toggle("active",a===nav));return;}
    const pay=t.closest(".pay-opt");if(pay){payMethod=pay.dataset.pay;$$(".pay-opt").forEach(o=>o.classList.remove("sel"));pay.classList.add("sel");$("#cardSubs").style.display=payMethod==="card"?"block":"none";return;}
    const cs=t.closest("[data-cardsub]");if(cs){cardType=cs.dataset.cardsub;$$(".card-sub").forEach(o=>o.classList.remove("sel"));cs.classList.add("sel");return;}
  });
  $("#langBtn").onclick=()=>{lang=lang==="en"?"ar":"en";applyLang();};
  $("#cartBtn").onclick=openCart;$("#closeCart").onclick=closeAll;$("#overlay").onclick=closeAll;$("#closeCheckout").onclick=closeAll;
  $("#clearFilter").onclick=()=>{activeBrand=null;activeCategory=null;$("#searchInput").value="";renderCats();renderProducts();};
  $("#searchInput").oninput=e=>{activeBrand=null;activeCategory=null;renderCats();renderProducts(e.target.value);};
  $("#toCheckoutBtn").onclick=openCheckout;
  $("#placeOrderBtn").onclick=()=>{if(!validate()){showToast(lang==="ar"?"يرجى إكمال الحقول المطلوبة":"Please complete required fields");return;}logOrder();window.open(waLink(buildOrder()),"_blank");};
  ["soFb"].forEach(id=>$("#"+id).href=SOCIAL.facebook);["soIg"].forEach(id=>$("#"+id).href=SOCIAL.instagram);["soTk"].forEach(id=>$("#"+id).href=SOCIAL.tiktok);
  ["soWa"].forEach(id=>$("#"+id).href=`https://wa.me/${WHATSAPP_NUMBER}`);
  $("#waFloat").href=`https://wa.me/${WHATSAPP_NUMBER}`;$("#footWa").href=`https://wa.me/${WHATSAPP_NUMBER}`;
  $("#cardSubs").style.display="block";
  applyLang();updateCount();loadCatalog();
}
