export type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  price: number;
  discount: number; // round
};

export default class ApiClient {
  static baseUrl = "https://dummyjson.com/products";

  static async fetchData(category?: string): Promise<Product[]> {
    const url =
      this.baseUrl +
      (typeof category == "string" ? `/category/${category}` : "");

    let res = await fetch(url);
    const data = await res.json();

    return this.parseProductsData(data.products);
  }

  private static parseProductsData(productsData: any[]): Product[] {
    return productsData.map(
      ({
        id,
        images,
        title,
        description,
        rating,
        stock,
        brand,
        category,
        price,
        discountPercentage,
      }) => {
        return {
          id,
          title,
          brand,
          price,
          discount: Math.round(discountPercentage / 10) * 10,
          description,
          category,
          image: images[0],
          rating: JSON.parse(rating.toFixed(1)),
          stock,
        };
      }
    );
  }
}
