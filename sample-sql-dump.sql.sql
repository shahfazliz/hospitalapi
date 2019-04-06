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
  `image` varchar(255) NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `packages` (`name`, `description`, `price`, `image`) VALUES
('Corporate Wellness Screening (Single)', '', '600.00', 'corporate_wellness_screening.jpg'),
('Corporate Wellness Screening (Couple)', '', '1000.00', 'corporate_wellness_screening.jpg'),
('3D 4D HD Live', '', '150.00', '3D_4D_HD_live.png'),
('Neonatal Jaundice Test', '', '50.00', 'neonatal_jaundice_test.jpg'),
('Womans Wellness', '', '280.00', 'womans_wellness_package_2.jpg');

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
  `date_time` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(11) NOT NULL,
  FOREIGN KEY(patient_id) REFERENCES patients(id),
  FOREIGN KEY(doctor_id) REFERENCES doctors(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `appointments` (`patient_id`, `doctor_id`, `date_time`, `description`) VALUES
((select id from patients where name='Shah'), (select id from doctors where name='Azimah'), '2019-04-06 10:00:00', 'Corporate wellness screening (single)'), 
((select id from patients where name='Shah'), (select id from doctors where name='Renu'), '2019-04-06 10:30:00', 'Corporate wellness screening (single)'),
((select id from patients where name='Danil'), (select id from doctors where name='Azimah'), '2019-04-06 11:00:00', 'Corporate wellness screening (single)'), 
((select id from patients where name='Danil'), (select id from doctors where name='Renu'), '2019-04-06 11:30:00', 'Corporate wellness screening (single)'), 
((select id from patients where name='Hasrul'), (select id from doctors where name='Azimah'), '2019-04-06 12:00:00', 'Corporate wellness screening (single)'), 
((select id from patients where name='Hasrul'), (select id from doctors where name='Renu'), '2019-04-06 12:30:00', 'Corporate wellness screening (single)');

-- --------------------------------------------------------
COMMIT;
-- --------------------------------------------------------
