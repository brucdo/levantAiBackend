-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: levantai
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cycles`
--

DROP TABLE IF EXISTS `cycles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cycles` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `user_id` int(15) NOT NULL,
  `start_focus` datetime NOT NULL,
  `end_focus` datetime NOT NULL,
  `start_break` datetime NOT NULL,
  `end_break` datetime NOT NULL,
  `activity_id` int(15) NOT NULL,
  `activity_status` varchar(15) NOT NULL,
  `feedback` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id_idx` (`user_id`),
  KEY `fk_activity_id_idx` (`activity_id`),
  CONSTRAINT `fk_activity_id` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cycles`
--

LOCK TABLES `cycles` WRITE;
/*!40000 ALTER TABLE `cycles` DISABLE KEYS */;
INSERT INTO `cycles` VALUES (1,1,'2022-05-01 10:00:00','2022-05-01 10:25:00','2022-05-01 10:26:00','2022-05-01 10:31:00',3,' ',' '),(2,2,'2022-05-03 10:00:00','2022-05-03 10:25:00','2022-05-03 10:26:00','2022-05-03 10:31:00',3,' ',' ');
/*!40000 ALTER TABLE `cycles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-08 20:23:43
