CREATE TABLE IF NOT EXISTS "users"
(
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    username VARCHAR(25) UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "businesses"
(
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    business_owner_id BIGINT NOT NULL,
    FOREIGN KEY (business_owner_id) REFERENCES users(id), 
    business_name VARCHAR(50) UNIQUE NOT NULL,
    business_location TEXT NOT NULL,
    business_description VARCHAR(75) NOT NULL,
    category VARCHAR(25),
    phone_number VARCHAR(15),
    website VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS "services"
(
    id BIGSERIAL PRIMARY KEY,
    business_id BIGINT NOT NULL,
    FOREIGN KEY (business_id) REFERENCES businesses(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    service_title VARCHAR(25) NOT NULL,
    price MONEY NOT NULL,
    service_description VARCHAR(75),
    duration VARCHAR(7)
);

CREATE TABLE IF NOT EXISTS "bookings"
(
    id BIGSERIAL PRIMARY KEY,
    service_id BIGINT NOT NULL,
    provider_id BIGINT NOT NULL,
    customer_id BIGINT NOT NULL,
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (provider_id) REFERENCES users(id),
    FOREIGN KEY (customer_id) REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    service_location TEXT NOT NULL,
    current_offer_price MONEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "tags"
(
    id BIGSERIAL PRIMARY KEY,
    content VARCHAR(12) UNIQUE
);

CREATE TABLE IF NOT EXISTS "service_tag"
(
    service_id BIGINT NOT NULL,
    tag_id BIGINT NOT NULL,
    PRIMARY KEY (service_id, tag_id),
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);