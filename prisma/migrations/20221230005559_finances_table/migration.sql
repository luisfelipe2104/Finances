-- CreateTable
CREATE TABLE Users (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE Finances (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profit` BOOLEAN NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `value` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE Finances ADD CONSTRAINT `Finances_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES Users(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
