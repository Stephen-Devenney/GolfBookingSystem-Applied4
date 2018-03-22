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
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `bookingRef` int(10) NOT NULL,
  `bookingDate` varchar(50) NOT NULL,
  `bookingTime` varchar(6) NOT NULL,
  `bookingName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `player1` varchar(50) NOT NULL,
  `player2` varchar(50) NOT NULL,
  `player3` varchar(50) NOT NULL,
  `player4` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`bookingRef`, `bookingDate`, `bookingTime`, `bookingName`, `email`, `player1`, `player2`, `player3`, `player4`) VALUES
(1, '17/03/2018', '07:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(2, '18/03/2018', '07:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(3, '19/03/2018', '07:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(4, '20/03/2018', '07:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(5, '21/03/2018', '08:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(6, '22/03/2018', '08:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(7, '23/03/2018', '08:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(8, '24/03/2018', '08:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(9, '25/03/2018', '09:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(10, '26/03/2018', '09:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(11, '27/03/2018', '09:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(12, '28/03/2018', '09:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(13, '29/03/2018', '10:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(14, '30/03/2018', '10:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(15, '31/03/2018', '10:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(16, '01/04/2018', '10:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(17, '02/04/2018', '11:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(18, '03/04/2018', '11:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(19, '04/04/2018', '11:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(20, '05/04/2018', '11:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(21, '06/04/2018', '12:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(22, '07/04/2018', '12:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(23, '08/04/2018', '12:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(24, '09/04/2018', '12:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(25, '10/04/2018', '13:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(26, '11/04/2018', '13:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(27, '12/04/2018', '13:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(28, '13/04/2018', '13:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(29, '14/04/2018', '14:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(30, '15/04/2018', '14:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(31, '16/04/2018', '14:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(32, '17/04/2018', '14:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(33, '18/04/2018', '15:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(34, '19/04/2018', '15:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(35, '20/04/2018', '15:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(36, '21/04/2018', '15:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(37, '22/04/2018', '16:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(38, '23/04/2018', '16:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(39, '24/04/2018', '16:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(40, '25/04/2018', '16:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(41, '26/04/2018', '17:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(42, '27/04/2018', '17:15', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', ''),
(43, '28/04/2018', '17:30', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', '', ''),
(44, '29/04/2018', '17:45', 'Applied Team 4', '', 'Chris McGonagle', '', '', ''),
(45, '30/04/2018', '18:00', 'Applied Team 4', '', 'Chris McGonagle', 'Dylan Irwin', 'Briana Lee', 'Stephen Devenney'),
(47, '01/06/2018', ' 07:00', ' Cyril Higgins', 'Cyril.Higgins@lyit.ie', 'Cyril Higgins', 'Helen McMahon', 'Martin Robinson', 'Paul Corey');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`bookingRef`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `bookingRef` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
