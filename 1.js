-- Ejemplo con SQL
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE mind_maps (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE nodes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    map_id INT,
    parent_id INT NULL,
    title TEXT NOT NULL,
    content TEXT,
    position_x INT,
    position_y INT,
    color VARCHAR(7),
    FOREIGN KEY (map_id) REFERENCES mind_maps(id),
    FOREIGN KEY (parent_id) REFERENCES nodes(id)
);
