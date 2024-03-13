export type Product = {
  image: string;
  title: string;
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  price: number;
  discount: number | false; // round
};

export default class ApiClient {
  static baseUrl = "https://dummyjson.com/products";

  static async fetchData(category?: string): Promise<Product[]> {
    const res = await fetch(this.baseUrl);
    const data = await res.json();

    return this.parseProductsData(data.products);
  }

  private static parseProductsData(productsData: any[]): Product[] {
    return productsData.map(
      ({
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
          title,
          brand,
          price,
          discount: Math.round(discountPercentage),
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
