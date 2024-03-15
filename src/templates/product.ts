export default `
    <article class="product">
        <div class="product-image-wrapper">
            {{IMAGE}}
            {{DISCOUNT FLAG}}
        </div>
        <div class="brand-rating-wrapper">
            <h3 class="brand"><small>{{BRAND}}</small></h3>
            <div
            aria-label="Rated {{RATING}} out of 5"
            class="rating material-symbols-outlined"
            >
            {{RATING STARS}}
            </div>
        </div>
        <h3 class="title"><b>{{TITLE}}</b></h3>
        <p class="description"><small>{{DESCRIPTION}}</small></p>
        <p class="price" aria-label="{{PRODUCT PRICE DESCRIPTION}}">
            <b class="price" aria-hidden="true">$ {{PRICE}}</b>
            {{PRICE DROP}}
        </p>
        <small class="stock {{WARNING}}">Left in stock: {{STOCK}}</small>
        <button class="add-to-cart" id="{{ID}}">Add to Cart</button>
    </article>
`;
