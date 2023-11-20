-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2023 at 04:25 PM
-- Server version: 5.5.10
-- PHP Version: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `location_voiture`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `cni` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `num_permis` varchar(50) NOT NULL,
  PRIMARY KEY (`cni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`cni`, `nom`, `prenom`, `date_naissance`, `adresse`, `num_permis`) VALUES
('12A', 'Cdje', 'Lucas', '1999-11-11', '2 RUE DU TEST', '13922NZ2'),
('13A', 'Abdj', 'Remy', '1998-11-15', '3 RUE DU COURS', '282993N2');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `num_location` int(11) NOT NULL,
  `date_location` date NOT NULL,
  `caution` int(11) NOT NULL,
  `prix_location` int(11) NOT NULL,
  `duree` varchar(50) NOT NULL,
  `kilometrage_max` int(11) NOT NULL,
  `cni` varchar(50) NOT NULL,
  `immatriculation` varchar(50) NOT NULL,
  PRIMARY KEY (`num_location`),
  KEY `immatriculation` (`immatriculation`),
  KEY `cni` (`cni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locations`
--


-- --------------------------------------------------------

--
-- Table structure for table `voitures`
--

CREATE TABLE IF NOT EXISTS `voitures` (
  `immatriculation` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `prix_achat` int(11) NOT NULL,
  `marque` varchar(50) NOT NULL,
  `couleur` varchar(50) NOT NULL,
  `nbre_porte` int(11) NOT NULL,
  `carburant` varchar(50) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `boite_vitesse` int(11) NOT NULL,
  PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voitures`
--

INSERT INTO `voitures` (`immatriculation`, `model`, `prix_achat`, `marque`, `couleur`, `nbre_porte`, `carburant`, `kilometrage`, `boite_vitesse`) VALUES
('GG 715 AE', 'RS6', 180, 'AUDI', 'NOIR', 5, 'ESSENCE', 2400, 0),
('GR 234 AE', 'RSQ8', 200000, 'AUDI', 'NOIR', 5, 'ESSENCE', 4500, 0);
