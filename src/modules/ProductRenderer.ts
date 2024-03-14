import { Product } from "./ApiClient.ts";

export default class ProductRenderer {
  static render(product: Product, container: HTMLElement) {
    const article = document.createElement("article");
    article.classList.add("product");

    container.append(article);

    article.innerHTML = `
      <div class="product-image-wrapper">
          <img src="${product.image}" alt="">
          ${
            product.discount
              ? "<span class='discount'>-" + product.discount + "%</span>"
              : ""
          }
      </div>
      <div class="brand-rating-wrapper">
        <h3 class="brand"><small>${product.brand}</small></h3>
        <div aria-label="rated ${
          product.rating
        } out of 5" class="rating material-symbols-outlined">${this.getRatingString(
      product.rating
    )}</div>
      </div>
      <h3 class="title"><b>${product.title}</b></h3>
      <p class="description"><small>${product.description}</small></p>
      <p class="price" aria-label="Original price $${
        product.price
      }. Now $${this.getProductPrice(product)}">
      ${
        product.discount
          ? "<small class='original-price' aria-hidden='true'>$" +
            product.price +
            "</small>"
          : ""
      }
      <b aria-hidden='true' class=" ${
        product.discount ? "price" : null
      }">$${this.getProductPrice(product)}</b>
      </p>
      <button class="add-to-cart">Add to Cart</button>
    `;
  }

  private static getProductPrice({ price, discount }: Product): number {
    return Math.round(price * ((100 - discount) / 100));
  }

  private static getRatingString(rating: number): string {
    let string = "";

    for (let i = 0; i < Math.round(rating); i++) {
      string += "star_rate";
    }

    if (5 - rating >= 0.5) {
      string += "star_rate_half";
    }

    return string;
  }
}
