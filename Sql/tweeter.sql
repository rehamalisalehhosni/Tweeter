-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 03, 2018 at 09:13 PM
-- Server version: 5.5.59-0ubuntu0.14.04.1
-- PHP Version: 5.6.33-3+ubuntu14.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tweeter`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tweet`
--

CREATE TABLE IF NOT EXISTS `tweet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tweet` text COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=24 ;

--
-- Dumping data for table `tweet`
--

INSERT INTO `tweet` (`id`, `tweet`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'twwweeet', 1, '2018-03-03 15:13:28', '2018-03-03 15:13:28'),
(2, 'twwweeet', 1, '2018-03-03 15:14:18', '2018-03-03 15:14:18'),
(3, 'twwweeetssssssss', 1, '2018-03-03 15:14:30', '2018-03-03 15:14:30'),
(4, 'dddddddddd', 1, '2018-03-03 16:00:19', '2018-03-03 16:00:19'),
(5, 'twwweeetdd', 1, '2018-03-03 16:07:30', '2018-03-03 16:07:30'),
(6, 'twwweeetdd', 1, '2018-03-03 16:09:00', '2018-03-03 16:09:00'),
(7, 'twwweeetdd', 1, '2018-03-03 16:09:41', '2018-03-03 16:09:41'),
(8, 'twwweeetdd', 1, '2018-03-03 16:14:02', '2018-03-03 16:14:02'),
(9, 'twwweeetdd', 1, '2018-03-03 16:15:45', '2018-03-03 16:15:45'),
(10, 'twwweeetssssssss', 1, '2018-03-03 16:16:44', '2018-03-03 16:16:44'),
(11, 'twwweeet', 1, '2018-03-03 16:17:21', '2018-03-03 16:17:21'),
(12, 'twwweeet', 1, '2018-03-03 16:18:22', '2018-03-03 16:18:22'),
(13, 'twwweeetssssssss', 1, '2018-03-03 16:20:25', '2018-03-03 16:20:25'),
(14, 'twwweeet', 1, '2018-03-03 16:22:01', '2018-03-03 16:22:01'),
(15, 'twwweeetdd', 1, '2018-03-03 16:23:03', '2018-03-03 16:23:03'),
(16, 'twwweeetdd', 1, '2018-03-03 16:24:36', '2018-03-03 16:24:36'),
(17, 'twwweeetdd', 1, '2018-03-03 16:26:25', '2018-03-03 16:26:25'),
(18, 'twwweeetdd', 1, '2018-03-03 16:27:47', '2018-03-03 16:27:47'),
(19, 'twwweeetdd', 1, '2018-03-03 16:28:18', '2018-03-03 16:28:18'),
(20, 'twwweeetdd', 1, '2018-03-03 16:28:52', '2018-03-03 16:28:52'),
(21, 'twwweeetdd', 1, '2018-03-03 16:29:28', '2018-03-03 16:29:28'),
(22, 'sssssssssssss', 1, '2018-03-03 16:31:05', '2018-03-03 16:31:05'),
(23, 'twwweeetdd', 2, '2018-03-03 16:34:57', '2018-03-03 16:34:57');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'reham ali', 'engreham.ali2011@gmail.com', '$2y$10$CSt5iKwkxjbJBuYdvTtdA.EKV27zTlg5AcSpA/56DrZo8bpc0oyOW', 'wNojOEj9chUJ8yT7W3J6WZnHEiDtMoHeTJJ51rfw2mi0dbDxFecv9w3zMpP0', '2018-03-03 14:45:50', '2018-03-03 14:45:50'),
(2, 'demo', 'demo@un4web.com', '$2y$10$3VF82oU.zDgmFDDGCYjhOOBs5lqG5zMEpLo1N2GQDct/0b1hE5j8q', NULL, '2018-03-03 16:34:49', '2018-03-03 16:34:49');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
