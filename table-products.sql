CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL CHECK(price > 0),
    quantity INTEGER NOT NULL
);