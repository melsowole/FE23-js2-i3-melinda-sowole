import ApiClient, { Product } from "./modules/ApiClient.ts";
import ProductRenderer from "./modules/ProductRenderer.ts";

ApiClient.fetchData().then((products: Product[]) => {
  for (const product of products) {
    ProductRenderer.render(product);
  }
});
