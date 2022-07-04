-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2022 at 05:28 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `navegador`
--

-- --------------------------------------------------------

--
-- Table structure for table `justificacion`
--

CREATE TABLE `justificacion` (
  `id` int(200) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `curso` varchar(20) NOT NULL,
  `asunto` varchar(200) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `justificacion`
--

INSERT INTO `justificacion` (`id`, `nombre`, `apellido`, `curso`, `asunto`, `mensaje`) VALUES
(30, '3123123', '123123', '123123', '123123', '123123');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `rut` varchar(11) NOT NULL,
  `password` varchar(32) NOT NULL,
  `nombre` varchar(32) NOT NULL,
  `apellido` varchar(32) NOT NULL,
  `curso` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `rut`, `password`, `nombre`, `apellido`, `curso`) VALUES
(11, '20529577-1', '$2a$10$cLfoQjVokhnw.OygwukTh.Yrx', 'Lucas', 'Cruz', '3ero Medio'),
(12, '20529577-1', '$2a$10$8otSZsjL46nQJ4cphBknbOJr2', 'Lucas', 'Cruz', '3ero Medio'),
(13, '20529577-2', '$2a$10$ESP8cXOfmMbKdaMyiNlAA.2im', 'Lucas', 'Cruz', '3ero Medio'),
(14, '20529577-3', '$2a$10$8Hihw6Rk/0KpfkbEbk4cLOFyo', 'Lucas', 'Cruz', '3ero Medio'),
(15, '20529577-4', '$2a$10$TIFz2Ncypc6hzUJYfDnLvOmxk', 'Palta', 'mayo', '3ero Medio');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `justificacion`
--
ALTER TABLE `justificacion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Nombre` (`nombre`,`apellido`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `justificacion`
--
ALTER TABLE `justificacion`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
