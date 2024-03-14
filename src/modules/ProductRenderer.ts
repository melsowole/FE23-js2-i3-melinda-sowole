import { Product } from "./ApiClient.ts";

export default class ProductRenderer {
  static render(product: Product, container: HTMLElement) {
    const article = document.createElement("article");
    article.classList.add("product");

    container.append(article);

    article.innerHTML = `
      <div class="product-image-wrapper">
          <img src="${product.image}" alt="">
      </div>
      <h3 class="brand"><small>${product.brand}</small></h3>
      <h3 class="title"><b>${product.title}</b></h3>
      <p class="description"><small>${product.description}</small></p>
      <p class="price">
      <b class=" ${product.discount ? "discount" : null}">$${product.price}</b>
      </p>
      <button class="add-to-cart">Add to Cart</button>
    `;
  }
}
