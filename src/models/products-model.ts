import { pool } from "../database/postgres";
import { Product } from "../types/products";
import { QueryResult } from "pg";

export class ProductsModel {
  async getAllProducts() {
    try {
      const query: QueryResult<Product> = await pool.query(
        "SELECT * FROM products;"
      );
      const { rows } = query;
      return rows;
    } catch (error) {
      throw new Error("Database connection error", { cause: error });
    }
  }
  async getProduct(id: string) {
    try {
      const query: QueryResult<Product> = await pool.query(
        "SELECT name, description, price, quantity FROM products WHERE id = $1;",
        [id]
      );
      const { rows } = query;
      return rows[0];
    } catch (error) {
      throw new Error("Database connection error", { cause: error });
    }
  }
  async createProduct({ name, description, price, quantity }: Product) {
    const getProduct: QueryResult<Product> = await pool.query(
      "SELECT name FROM products WHERE name = $1;",
      [name]
    );

    const { rows } = getProduct;

    if (rows.length > 0) {
      throw new Error("Product already exists");
    }

    try {
      await pool.query(
        "INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4);",
        [name, description, price, quantity]
      );

      return {
        name,
        description,
        price,
        quantity,
      };
    } catch (error) {
      throw new Error("Database connection error", { cause: error });
    }
  }
  async updateProduct(
    id: string,
    { name, description, price, quantity }: Product
  ) {
    try {
      const getProductId: QueryResult<Product> = await pool.query(
        "SELECT id FROM products WHERE id = $1;",
        [id]
      );

      await pool.query(
        "UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5;",
        [name, description, price, quantity, id]
      );

      return {
        id,
        name,
        description,
        price,
        quantity,
      };
    } catch (error) {
      throw new Error("Database connection error", { cause: error });
    }
  }
  async deleteProduct(id: string) {
    try {
      const getProductId: QueryResult<Product> = await pool.query(
        "SELECT id FROM products WHERE id = $1;",
        [id]
      );

      await pool.query("DELETE FROM products WHERE id = $1;", [id]);

      const { rows } = getProductId;

      return rows[0];
    } catch (error) {
      throw new Error("Database connection error", { cause: error });
    }
  }
}
