CREATE TABLE
    IF NOT EXISTS users (
        id BIGSERIAL PRIMARY KEY,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        username VARCHAR(25) UNIQUE NOT NULL,
        hashed_password TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS businesses (
        id BIGSERIAL PRIMARY KEY,
        business_owner_id BIGINT NOT NULL,
        FOREIGN KEY (business_owner_id) REFERENCES users (id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(50) UNIQUE NOT NULL,
        location TEXT NOT NULL,
        description VARCHAR(75) NOT NULL,
        category VARCHAR(25) NOT NULL,
        phone_number VARCHAR(15) NOT NULL,
        website_link VARCHAR(50)
    );

CREATE TABLE
    IF NOT EXISTS services (
        id BIGSERIAL PRIMARY KEY,
        business_id BIGINT NOT NULL,
        FOREIGN KEY (business_id) REFERENCES businesses (id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(25) NOT NULL,
        price MONEY NOT NULL,
        description VARCHAR(75),
        duration VARCHAR(7),
        category VARCHAR(15)
    );

CREATE TABLE
    IF NOT EXISTS bookings (
        id BIGSERIAL PRIMARY KEY,
        business_id BIGINT NOT NULL,
        service_id BIGINT NOT NULL,
        customer_id BIGINT NOT NULL,
        FOREIGN KEY (business_id) REFERENCES businesses (id),
        FOREIGN KEY (customer_id) REFERENCES users (id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        location TEXT NOT NULL,
        description VARCHAR(75),
        current_offer MONEY NOT NULL,
        status VARCHAR(10) NOT NULL DEFAULT 'Sent'
    );

CREATE TABLE
    IF NOT EXISTS tags (
        id BIGSERIAL PRIMARY KEY,
        content VARCHAR(12) UNIQUE
    );

CREATE TABLE
    IF NOT EXISTS service_tag (
        service_id BIGINT NOT NULL,
        tag_id BIGINT NOT NULL,
        PRIMARY KEY (service_id, tag_id),
        FOREIGN KEY (service_id) REFERENCES services (id) ON DELETE CASCADE,
        FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE
    );