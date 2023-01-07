import { AppError } from "../../../errors/app-error";
import { Product } from "../../models/product";
import { ProductsRepository } from "../../repositories/products-repository";

interface CreateProductDTO {
  name: string;
  price: number;
  quantity: number;
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ name, price, quantity }: CreateProductDTO): Promise<Product> {
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Product already exists", 409);
    }

    const product = new Product({
      name,
      price,
      quantity,
    });
    await this.productsRepository.create(product);

    return product;
  }
}
