-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2018 at 08:57 PM
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
-- Table structure for table `bookingtimes`
--

CREATE TABLE `bookingtimes` (
  `bookingTimes` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookingtimes`
--

INSERT INTO `bookingtimes` (`bookingTimes`) VALUES
('07:00'),
('07:15'),
('07:30'),
('07:45'),
('08:00'),
('08:15'),
('08:30'),
('08:45'),
('09:00'),
('09:15'),
('09:30'),
('09:45'),
('10:00'),
('10:15'),
('10:30'),
('10:45'),
('11:00'),
('11:15'),
('11:30'),
('11:45'),
('12:00'),
('12:15'),
('12:30'),
('12:45'),
('13:00'),
('13:15'),
('13:30'),
('13:45'),
('14:00'),
('14:15'),
('14:30'),
('14:45'),
('15:00'),
('15:15'),
('15:30'),
('15:45'),
('16:00'),
('16:15'),
('16:30'),
('16:45'),
('17:00'),
('17:15'),
('17:30'),
('17:45'),
('18:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
