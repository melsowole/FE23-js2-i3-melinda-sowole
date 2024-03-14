class e{static{this.baseUrl="https://dummyjson.com/products"}static async fetchData(e){let t=this.baseUrl+("string"==typeof e?`/category/${e}`:""),a=await fetch(t),s=await a.json();return this.parseProductsData(s.products)}static parseProductsData(e){return e.map(({images:e,title:t,description:a,rating:s,stock:r,brand:i,category:c,price:n,discountPercentage:o})=>({title:t,brand:i,price:n,discount:10*Math.round(o/10),description:a,category:c,image:e[0],rating:JSON.parse(s.toFixed(1)),stock:r}))}}var t=`
    <article class="product">
        <div class="product-image-wrapper">
            -!IMAGE!-
            -!DISCOUNT FLAG!-
        </div>
        <div class="brand-rating-wrapper">
            <h3 class="brand"><small>-!BRAND!-</small></h3>
            <div
            aria-label="Rated -!RATING!- out of 5"
            class="rating material-symbols-outlined"
            >
            -!RATING STARS!-
            </div>
        </div>
        <h3 class="title"><b>-!TITLE!-</b></h3>
        <p class="description"><small>-!DESCRIPTION!-</small></p>
        <p class="price" aria-label="-!PRODUCT PRICE DESCRIPTION!-">
            -!PRICE DROP!-
            <b class="price" aria-hidden="true">-!PRICE!-</b>
        </p>
        <button class="add-to-cart">Add to Cart</button>
    </article>
`;class a{static render(e,a){let s=t;s=this.removePlaceholders(s,e);let r=document.createElement("li");r.innerHTML=s,a.append(r)}static getProductPrice(e,t){return Math.round((100-t)/100*e)}static getRatingString(e){let t="";for(let a=0;a<Math.round(e);a++)t+="star_rate";return 5-e>=.5&&(t+="star_rate_half"),t}static getImageTag({image:e,title:t}){return`<img src="${e}" alt="Image of ${t}">`}static getDiscountFlag({discount:e}){return`<span class='discount'> ${e} %</span>`}static removePlaceholders(e,t){let a=e;return(a=(a=(a=(a=(a=(a=(a=(a=(a=a.replace("-!IMAGE!-",this.getImageTag(t))).replace("-!DISCOUNT FLAG!-",t.discount?this.getDiscountFlag(t):"")).replace("-!BRAND!-",t.brand)).replace("-!RATING!-",JSON.stringify(t.rating))).replace("-!RATING STARS!-",this.getRatingString(t.rating))).replace("-!TITLE!-",t.title)).replace("-!DESCRIPTION!-",t.description)).replace("-!PRODUCT PRICE DESCRIPTION!-",this.getProductPriceDescription(t))).replace("-!PRICE DROP!-",t.discount?this.getOGPrice(t):"")).replace("-!PRICE!-",JSON.stringify(this.getProductPrice(t.price,t.discount)))}static getOGPrice({price:e}){return`<small class="original-price" aria-hidden="true"> $${e}</small>`}static getProductPriceDescription({price:e,discount:t}){return t?`Original price $${e}. Now $${this.getProductPrice(e,t)}.`:"Price $${price}"}}const s=[{name:"tech",items:["smartphones","laptops"]},{name:"cosmetics",items:["fragrances","skincare"]},{name:"womens",items:["tops","womens-dresses","womens-shoes","womens-watches","womens-bags","womens-jewellery"]},{name:"mens",items:["mens-shirts","mens-shoes","mens-watches"]},{name:"accesories",items:["sunglasses"]},{name:"home",items:["home-decoration","lighting","furniture"]},{name:"vehicles",items:["motorcycle","automotive"]},{name:"groceries",items:["groceries"]}];class r{static render(e){for(let t of s){let a=document.createElement("div");e.append(a);let s=this.createCategoryLabel(t.name),r=document.createElement("div");for(let e of(r.classList.add("item-wrapper"),a.append(s,r),t.items))r.append(this.createCategoryItem(e))}}static createCategoryLabel(e){let t=document.createElement("label");return t.classList.add("category-name"),t.innerHTML=`<small><b>${e}</b></small>`,t}static createCategoryItem(e){let t=document.createElement("button");return t.textContent=e.split("-").join(" "),t.classList.add("item"),t.id=e,t}}const i=document.querySelector(".page-name"),c=document.querySelector(".product-container"),n=document.querySelector("nav");(class{static init(){r.render(n),this.initNav(),this.displayProducts()}static async displayProducts(t){for(let s of(this.clearContainer(),await e.fetchData(t||void 0)))a.render(s,c)}static clearContainer(){c.innerHTML=""}static initNav(){n.addEventListener("click",e=>{let t=e.target;"BUTTON"==t.tagName&&(i.textContent="Filter: '"+t.textContent+"'",console.log("hello"),this.displayProducts(t.id))})}}).init();
//# sourceMappingURL=index.a7966cc8.js.map
