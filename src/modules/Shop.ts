import ApiClient, { Product } from "./ApiClient.ts";
import ProductRenderer from "./ProductRenderer.ts";
import Navigation from "./navigation.ts";

const pageName = document.querySelector(".page-name") as HTMLHeadingElement;
const container = document.querySelector(".product-container") as HTMLElement;
const nav = document.querySelector("nav") as HTMLElement;

export default class Shop {
  static init(): void {
    Navigation.render(nav);
    this.initNav();
    this.displayProducts();
  }

  static async displayProducts(filter?: string): Promise<any> {
    this.clearContainer();

    const query: string | undefined = filter ? filter : undefined;

    const products: Product[] = await ApiClient.fetchData(query);

    for (const product of products) {
      ProductRenderer.render(product, container);
    }
  }

  private static clearContainer(): void {
    container.innerHTML = "";
  }

  private static initNav(): void {
    nav.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.tagName == "BUTTON") {
        pageName.textContent = "Filter: '" + target.textContent + "'";

        console.log("hello");

        this.displayProducts(target.id);
      }
    });
  }
}
