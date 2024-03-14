class t{static{this.baseUrl="https://dummyjson.com/products"}static async fetchData(t){let e=this.baseUrl+("string"==typeof t?`/category/${t}`:""),a=await fetch(e),s=await a.json();return this.parseProductsData(s.products)}static parseProductsData(t){return t.map(({images:t,title:e,description:a,rating:s,stock:i,brand:r,category:n,price:c,discountPercentage:o})=>({title:e,brand:r,price:c,discount:10*Math.round(o/10),description:a,category:n,image:t[0],rating:JSON.parse(s.toFixed(1)),stock:i}))}}class e{static render(t,e){let a=document.createElement("article");a.classList.add("product"),e.append(a),a.innerHTML=`
      <div class="product-image-wrapper">
          <img src="${t.image}" alt="">
          ${t.discount?"<span class='discount'>-"+t.discount+"%</span>":""}
      </div>
      <div class="brand-rating-wrapper">
        <h3 class="brand"><small>${t.brand}</small></h3>
        <div aria-label="rated ${t.rating} out of 5" class="rating material-symbols-outlined">${this.getRatingString(t.rating)}</div>
      </div>
      <h3 class="title"><b>${t.title}</b></h3>
      <p class="description"><small>${t.description}</small></p>
      <p class="price" aria-label="Original price $${t.price}. Now $${this.getProductPrice(t)}">
      ${t.discount?"<small class='original-price' aria-hidden='true'>$"+t.price+"</small>":""}
      <b aria-hidden='true' class=" ${t.discount?"price":null}">$${this.getProductPrice(t)}</b>
      </p>
      <button class="add-to-cart">Add to Cart</button>
    `}static getProductPrice({price:t,discount:e}){return Math.round((100-e)/100*t)}static getRatingString(t){let e="";for(let a=0;a<Math.round(t);a++)e+="star_rate";return 5-t>=.5&&(e+="star_rate_half"),e}}const a=[{name:"tech",items:["smartphones","laptops"]},{name:"cosmetics",items:["fragrances","skincare"]},{name:"womens",items:["tops","womens-dresses","womens-shoes","womens-watches","womens-bags","womens-jewellery"]},{name:"mens",items:["mens-shirts","mens-shoes","mens-watches"]},{name:"accesories",items:["sunglasses"]},{name:"home",items:["home-decoration","lighting","furniture"]},{name:"vehicles",items:["motorcycle","automotive"]},{name:"groceries",items:["groceries"]}];class s{static render(t){for(let e of a){let a=document.createElement("div");t.append(a);let s=this.createCategoryLabel(e.name),i=document.createElement("div");for(let t of(i.classList.add("item-wrapper"),a.append(s,i),e.items))i.append(this.createCategoryItem(t))}}static createCategoryLabel(t){let e=document.createElement("label");return e.classList.add("category-name"),e.innerHTML=`<small><b>${t}</b></small>`,e}static createCategoryItem(t){let e=document.createElement("button");return e.textContent=t.split("-").join(" "),e.classList.add("item"),e.id=t,e}}const i=document.querySelector(".page-name"),r=document.querySelector(".product-container"),n=document.querySelector("nav");(class{static init(){s.render(n),this.initNav(),this.displayProducts()}static async displayProducts(a){for(let s of(this.clearContainer(),await t.fetchData(a||void 0)))e.render(s,r)}static clearContainer(){r.innerHTML=""}static initNav(){n.addEventListener("click",t=>{let e=t.target;"BUTTON"==e.tagName&&(i.textContent="Filter: '"+e.textContent+"'",console.log("hello"),this.displayProducts(e.id))})}}).init();
//# sourceMappingURL=index.adae2a70.js.map
