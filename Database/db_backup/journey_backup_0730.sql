-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: TravelMaker
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `TravelMaker`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `TravelMaker` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `TravelMaker`;

--
-- Table structure for table `Journey`
--

DROP TABLE IF EXISTS `Journey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Journey` (
  `journey_id` int(20) NOT NULL AUTO_INCREMENT,
  `journey_name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `user_id` int(20) NOT NULL,
  `privacy` tinyint(1) NOT NULL,
  `thumbnail_id` int(20) NOT NULL,
  `edit_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`journey_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Journey`
--

LOCK TABLES `Journey` WRITE;
/*!40000 ALTER TABLE `Journey` DISABLE KEYS */;
INSERT INTO `Journey` VALUES (1,'台北之旅','台北好好玩',1,0,1,'2023-07-26 15:18:33'),(2,'台中之旅','台中好好玩',1,1,4,'2023-07-26 15:20:57'),(3,'台南之旅','台南好好玩',2,1,8,'2023-07-26 15:20:57'),(4,'高雄之旅','高雄好好玩',3,1,10,'2023-07-26 15:47:37'),(5,'台東之旅','台東好好玩',3,1,10,'2023-07-27 14:07:33');
/*!40000 ALTER TABLE `Journey` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `check_privacy` BEFORE INSERT ON `Journey` FOR EACH ROW BEGIN
	IF new.privacy NOT IN (0, 1) THEN
    	SIGNAL SQLSTATE '60000' SET MESSAGE_TEXT = 'invalid privacy argument, privacy field only accept [0, 1]';
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER update_edit_time BEFORE UPDATE ON Journey FOR EACH ROW
BEGIN
    IF new.edit_time <> old.edit_time THEN
        SET new.edit_time = CURRENT_TIMESTAMP;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Journey_event`
--

DROP TABLE IF EXISTS `Journey_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Journey_event` (
  `event_id` int(20) NOT NULL AUTO_INCREMENT,
  `event_name` varchar(100) NOT NULL,
  `event_description` varchar(255) DEFAULT NULL,
  `journey_id` int(20) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Journey_event`
--

LOCK TABLES `Journey_event` WRITE;
/*!40000 ALTER TABLE `Journey_event` DISABLE KEYS */;
INSERT INTO `Journey_event` VALUES (1,'早餐','麥當勞',1,'2023-07-25 08:00:00','2023-07-25 09:00:00'),(2,'中餐','肯德基',1,'2023-07-25 12:00:00','2023-07-25 13:00:00'),(3,'晚餐','漢堡王',1,'2023-07-25 18:00:00','2023-07-25 19:00:00'),(4,'早餐','小熊咖啡',2,'2023-07-26 08:00:00','2023-07-26 09:00:00'),(5,'中餐','屋馬',2,'2023-07-26 12:00:00','2023-07-26 13:00:00'),(6,'晚餐','金色山脈',2,'2023-07-26 18:00:00','2023-07-26 19:00:00'),(7,'早餐','麥味登',3,'2023-07-27 08:00:00','2023-07-27 09:00:00'),(8,'中餐','頂呱呱',3,'2023-07-27 12:00:00','2023-07-27 13:00:00'),(9,'晚餐','牛肉湯',3,'2023-07-27 18:00:00','2023-07-27 19:00:00');
/*!40000 ALTER TABLE `Journey_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Journey_image`
--

DROP TABLE IF EXISTS `Journey_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Journey_image` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `image_id` int(20) NOT NULL,
  `journey_id` int(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Journey_image`
--

LOCK TABLES `Journey_image` WRITE;
/*!40000 ALTER TABLE `Journey_image` DISABLE KEYS */;
INSERT INTO `Journey_image` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,2),(5,5,2),(6,6,2),(7,7,3),(8,8,3),(9,9,3),(10,1,5),(11,2,5);
/*!40000 ALTER TABLE `Journey_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'TravelMaker'
--
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_journey_duration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_journey_duration`(IN `search_id` INT)
BEGIN
    SELECT MIN(Journey_event.start_time) as journey_start, MAX(Journey_event.end_time) as journey_end 
    FROM Journey_event 
    WHERE Journey_event.journey_id = search_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_journey_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_journey_id`(name varchar(100))
BEGIN
	SELECT journey_id
    FROM Journey
    WHERE journey_name = name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-30  0:04:04
