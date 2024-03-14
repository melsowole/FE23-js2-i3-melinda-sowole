type productCategory = {
  name: string;
  items: string[];
};

const navCategories: productCategory[] = [
  {
    name: "tech",
    items: ["smartphones", "laptops"],
  },
  {
    name: "cosmetics",
    items: ["fragrances", "skincare"],
  },
  {
    name: "womens",
    items: [
      "tops",
      "womens-dresses",
      "womens-shoes",
      "womens-watches",
      "womens-bags",
      "womens-jewellery",
    ],
  },
  {
    name: "mens",
    items: ["mens-shirts", "mens-shoes", "mens-watches"],
  },
  {
    name: "accesories",
    items: ["sunglasses"],
  },
  {
    name: "home",
    items: ["home-decoration", "lighting", "furniture"],
  },
  {
    name: "vehicles",
    items: ["motorcycle", "automotive"],
  },
  {
    name: "groceries",
    items: ["groceries"],
  },
];

export default class Navigation {
  static render(container: HTMLElement): void {
    for (const category of navCategories) {
      const categoryContainer = document.createElement("div");
      container.append(categoryContainer);

      const label = this.createCategoryLabel(category.name);

      const itemWrapper = document.createElement("div");
      itemWrapper.classList.add("item-wrapper");

      categoryContainer.append(label, itemWrapper);

      for (const item of category.items) {
        itemWrapper.append(this.createCategoryItem(item));
      }
    }
  }

  private static createCategoryLabel(name: string): HTMLElement {
    const categoryName = document.createElement("label");
    categoryName.classList.add("category-name");
    categoryName.innerHTML = `<small><b>${name}</b></small>`;

    return categoryName;
  }

  private static createCategoryItem(name: string): HTMLElement {
    const item = document.createElement("button");
    item.textContent = unKebab(name);
    item.classList.add("item");
    item.id = name;
    return item;
  }
}

function unKebab(string: string): string {
  return string.split("-").join(" ");
}
