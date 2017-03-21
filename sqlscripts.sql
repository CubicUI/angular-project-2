CREATE SCHEMA `attendance` ;

CREATE TABLE `attendance`.`classtbl` (
  `classid` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `active` INT NOT NULL,
  PRIMARY KEY (`classid`),
  UNIQUE INDEX `classid_UNIQUE` (`classid` ASC));

INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('Java', '1');
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('.NET', '1');
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('VMWare', '1');
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('Angular', '1');
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('linux', '0');
