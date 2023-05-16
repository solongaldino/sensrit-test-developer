SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sensrit-api
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sensrit-api
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sensrit-api` ;
USE `sensrit-api` ;

-- -----------------------------------------------------
-- Table `sensrit-api`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sensrit-api`.`Product` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `value` DECIMAL(8,2) NOT NULL,
  `description` VARCHAR(1000) NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sensrit-api`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sensrit-api`.`Customer` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sensrit-api`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sensrit-api`.`User` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sensrit-api`.`Sale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sensrit-api`.`Sale` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `customerId` INT UNSIGNED NOT NULL,
  `userId` INT UNSIGNED NOT NULL,
  `amount` DECIMAL(8,2) NOT NULL,
  `status` ENUM('open', 'finished') NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Sale_Customer1_idx` (`customerId` ASC) VISIBLE,
  INDEX `fk_Sale_User1_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `fk_Sale_Customer1`
    FOREIGN KEY (`customerId`)
    REFERENCES `sensrit-api`.`Customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sale_User1`
    FOREIGN KEY (`userId`)
    REFERENCES `sensrit-api`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sensrit-api`.`Item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sensrit-api`.`Item` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `amount` INT NOT NULL,
  `value` DECIMAL(8,2) NOT NULL,
  `saleId` INT UNSIGNED NOT NULL,
  `productId` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Item_Sale1_idx` (`saleId` ASC) VISIBLE,
  INDEX `fk_Item_Product1_idx` (`productId` ASC) VISIBLE,
  CONSTRAINT `fk_Item_Sale1`
    FOREIGN KEY (`saleId`)
    REFERENCES `sensrit-api`.`Sale` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Item_Product1`
    FOREIGN KEY (`productId`)
    REFERENCES `sensrit-api`.`Product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
