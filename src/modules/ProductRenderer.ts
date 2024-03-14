import { Product } from "./ApiClient.ts";
import template from "../templates/product.ts";

export default class ProductRenderer {
  static render(product: Product, container: HTMLElement) {
    let article: string = template;

    article = this.removePlaceholders(article, product);

    const liEl = document.createElement("li");

    liEl.innerHTML = article;

    container.append(liEl);
  }

  private static getProductPrice(price: number, discount: number): number {
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

  private static getImageTag({ image, title }: Product) {
    return `<img src="${image}" alt="Image of ${title}">`;
  }

  private static getDiscountFlag({ discount }: Product): string {
    return `<span class='discount'> ${discount} %</span>`;
  }

  private static removePlaceholders(article: string, product: Product): string {
    let newArticle = article;

    newArticle = newArticle.replace("-!IMAGE!-", this.getImageTag(product));

    newArticle = newArticle.replace(
      "-!DISCOUNT FLAG!-",
      product.discount ? this.getDiscountFlag(product) : ""
    );

    newArticle = newArticle.replace("-!BRAND!-", product.brand);

    newArticle = newArticle.replace(
      "-!RATING!-",
      JSON.stringify(product.rating)
    );

    newArticle = newArticle.replace(
      "-!RATING STARS!-",
      this.getRatingString(product.rating)
    );

    newArticle = newArticle.replace("-!TITLE!-", product.title);

    newArticle = newArticle.replace("-!DESCRIPTION!-", product.description);

    newArticle = newArticle.replace(
      "-!PRODUCT PRICE DESCRIPTION!-",
      this.getProductPriceDescription(product)
    );

    newArticle = newArticle.replace(
      "-!PRICE DROP!-",
      product.discount ? this.getOGPrice(product) : ""
    );

    newArticle = newArticle.replace(
      "-!PRICE!-",
      JSON.stringify(this.getProductPrice(product.price, product.discount))
    );

    return newArticle;
  }

  private static getOGPrice({ price }: Product): string {
    return `<small class="original-price" aria-hidden="true"> $${price}</small>`;
  }

  private static getProductPriceDescription({
    price,
    discount,
  }: Product): string {
    return discount
      ? `Original price $${price}. Now $${this.getProductPrice(
          price,
          discount
        )}.`
      : "Price $${price}";
  }
}
