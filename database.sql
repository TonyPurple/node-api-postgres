CREATE DATABASE apicompanytest;

CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    company_id INT,
    name VARCHAR(30),
    CONSTRAINT fk_company
        FOREIGN KEY(company_id)
            REFERENCES customer(customer_id)
);

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    company_id INT,
    name VARCHAR(30),
    CONSTRAINT fk_company
        FOREIGN KEY(company_id)
            REFERENCES product(product_id)
);

CREATE TABLE sales(
    sales_id SERIAL PRIMARY KEY,
    company_id INT,
    customer_id INT,
    product_id INT,
    CONSTRAINT fk_company FOREIGN KEY(company_id) REFERENCES company(company_id),
    CONSTRAINT fk_customer FOREIGN KEY(customer_id) REFERENCES customer(customer_id),
    CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES product(product_id)
);