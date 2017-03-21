#drops schema if it exists
DROP SCHEMA `attendance`;
CREATE SCHEMA `attendance` ;

#creating class table
CREATE TABLE `attendance`.`classtbl` (
  `classid` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `active` INT NOT NULL,
  PRIMARY KEY (`classid`),
  UNIQUE INDEX `classid_UNIQUE` (`classid` ASC));

#inserting information for classtable
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('Java', '1');
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('.NET', '1');
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('VMWare', '1');
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('Angular', '1');
INSERT INTO `attendance`.`classtbl` (`title`, `active`) VALUES ('linux', '0');

#creating attendance table
CREATE TABLE `attendance`.`workstatus` (
  `workstatusid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `active` INT NOT NULL,
  PRIMARY KEY (`workstatusid`));
  
#inserting information table
INSERT INTO `attendance`.`workstatus` (`title`, `active`) VALUES ('US Citizen', '1');
INSERT INTO `attendance`.`workstatus` (`title`, `active`) VALUES ('Green Card', '1');
INSERT INTO `attendance`.`workstatus` (`title`, `active`) VALUES ('EAD (GC)', '1');
INSERT INTO `attendance`.`workstatus` (`title`, `active`) VALUES ('Work Permit', '1');
INSERT INTO `attendance`.`workstatus` (`title`, `active`) VALUES ('EAD(TPS)', '1');
INSERT INTO `attendance`.`workstatus` (`title`, `active`) VALUES ('EAD(OPT)', '1');
INSERT INTO `attendance`.`workstatus` (`title`, `active`) VALUES ('EAD(CPT)', '1');

