import { Product } from '../../../src/application/entities/product'
import {
  ProductsRepository,
  updatedProps
} from '../../../src/application/repositories/products-repository'

export class InMemoryProductsRepository implements ProductsRepository {
  public products: Product[] = []

  async create (product: Product): Promise<void> {
    this.products.push(product)
  }

  async load (): Promise<Product[]> {
    return this.products
  }

  async loadByName (name: string): Promise<Product> {
    const product = this.products.find((product) => product.name === name)
    return product
  }

  async loadById (id: string): Promise<Product> {
    const product = this.products.find((product) => product.id === id)
    return product
  }

  async update ({ id, data }: updatedProps): Promise<void> {
    const productUpdate = this.products.find((product) => product.id === id)
    productUpdate.setProps({ ...data })
  }

  async delete (productId: string): Promise<void> {
    const productsUpdated = this.products.filter(
      (product) => product.id !== productId
    )
    this.products = productsUpdated
  }
}
