-- --------------------------------------------------------
-- Database: `hospitalapi`
-- --------------------------------------------------------
USE hospitalapi;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `appointments`;
DROP TABLE IF EXISTS `patient_records`;
DROP TABLE IF EXISTS `packages`;
DROP TABLE IF EXISTS `patients`;
DROP TABLE IF EXISTS `doctors`;

-- --------------------------------------------------------
-- Table structure for table `packages`
-- --------------------------------------------------------
CREATE TABLE `packages` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(13,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `packages` (`name`, `description`, `price`) VALUES
('Package 1', 'Description of Package 1', '0.00'),
('Package 2', 'Description of Package 2', '0.00'),
('Package 3', 'Description of Package 3', '0.00'),
('Package 4', 'Description of Package 4', '0.00'),
('Package 5', 'Description of Package 5', '0.00'),
('Package 6', 'Description of Package 6', '0.00'),
('Package 7', 'Description of Package 7', '0.00'),
('Package 8', 'Description of Package 8', '0.00'),
('Package 10', 'Description of Package Ten', '0.00'),
('Package 9', 'Description of Package 9', '0.00');

-- --------------------------------------------------------
-- Table structure for table `patients`
-- --------------------------------------------------------
CREATE TABLE `patients` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `ic` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO patients(`name`, `ic`, `email`, `contact`) VALUES 
('Shah', '123456-78-9012', 'shah@abc.def', '012-3456789'), 
('Danil', '234567-89-0123', 'danil@abc.def', '123-4567890'),
('Hasrul', '345678-90-1234', 'hasrul@abc.def', '234-5678901');

-- --------------------------------------------------------
-- Table structure for table `doctors`
-- --------------------------------------------------------
CREATE TABLE `doctors` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `ic` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `doctors` (`name`, `ic`, `email`, `contact`) VALUES 
('Azimah', '123456-78-9012', 'azimah@azalea.com.my', '012-3456789'), 
('Renu', '234567-89-0123', 'renu@azalea.com.my', '123-4567890');

-- --------------------------------------------------------
-- Table structure for table `patient_records`
-- --------------------------------------------------------
CREATE TABLE `patient_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `diagnosis` varchar(255) NOT NULL,
  `treatment` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY(patient_id) REFERENCES patients(id),
  FOREIGN KEY(doctor_id) REFERENCES doctors(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `patient_records` (`patient_id`, `doctor_id`, `diagnosis`, `treatment`) VALUES 
((select id from patients where name='Shah'), (select id from doctors where name='Azimah'), 'High fever', 'Administer paracetamol for 3 days'), 
((select id from patients where name='Shah'), (select id from doctors where name='Renu'), 'High fever', 'Administer paracetamol for 5 days'),
((select id from patients where name='Danil'), (select id from doctors where name='Azimah'), 'High fever', 'Administer paracetamol for 2 days'), 
((select id from patients where name='Danil'), (select id from doctors where name='Renu'), 'High fever', 'Administer paracetamol for 1 day'), 
((select id from patients where name='Hasrul'), (select id from doctors where name='Azimah'), 'High fever', 'Administer paracetamol 1 day'), 
((select id from patients where name='Hasrul'), (select id from doctors where name='Renu'), 'High fever', 'Rest for 1 day with plenty of water');

-- --------------------------------------------------------
-- Table structure for table `appoinments`
-- --------------------------------------------------------
CREATE TABLE `appointments` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `start_time` varchar(10) NOT NULL,
  `end_time` varchar(10) NOT NULL,
  `status` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(11) NOT NULL,
  FOREIGN KEY(patient_id) REFERENCES patients(id),
  FOREIGN KEY(doctor_id) REFERENCES doctors(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
COMMIT;
-- --------------------------------------------------------
