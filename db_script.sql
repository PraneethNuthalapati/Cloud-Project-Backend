CREATE TABLE `venues` (
  `venueId` int(11) NOT NULL AUTO_INCREMENT,
  `equipmentId` int(11) NOT NULL,
  `venueName` varchar(45) NOT NULL,
  `quantity` int(11) NOT NULL,
  `orderStatus` varchar(45) NOT NULL,
  PRIMARY KEY (`venueId`,`equipmentId`)
);

CREATE TABLE `searchs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `venueName` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `supplies` (
  `equipmentId` int(11) NOT NULL,
  `venueId` varchar(100) NOT NULL,
  `userId` varchar(100) NOT NULL,
  `qty` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(100) NOT NULL,
  `result` varchar(100) NOT NULL,
  PRIMARY KEY (`equipmentId`,`venueId`,`userId`)
);

CREATE TABLE `Users` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE `equipments` (
  `Equipment_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Equipment_Name` varchar(45) DEFAULT NULL,
  `Qoh` int(11) DEFAULT NULL,
  PRIMARY KEY (`Equipment_ID`)
);