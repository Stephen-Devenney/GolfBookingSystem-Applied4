-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2018 at 08:58 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `golf`
--

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `memberNo` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`memberNo`, `firstName`, `lastName`, `password`) VALUES
(0, 'Guest', 'Guest', 'noentry'),
(1001, 'Briana', 'Lee', 'applied4'),
(1002, 'Dylan', 'Irwin', 'applied4'),
(1003, 'Chris', 'McGonagle', 'applied4'),
(1004, 'Stephen', 'Devenney', 'applied4'),
(1005, 'Joey', 'McLaughlin', 'applied4'),
(1006, 'Sharon', 'Doherty', 'applied4'),
(1007, 'Deirdre', 'Lynch', 'applied4'),
(1008, 'Gary', 'Doherty', 'applied4'),
(1009, 'Mary', 'McLaughlin', 'applied4'),
(1010, 'Jenny', 'Doherty', 'applied4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
