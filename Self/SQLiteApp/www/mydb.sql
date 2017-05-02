-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2016 at 06:22 AM
-- Server version: 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `ques` varchar(500) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `isAnswered` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `ques`, `username`, `isAnswered`) VALUES
(1001, 'Write a program for palindrome. Display 1 if yes, and 0 if not.', 'johndoe08', 1),
(1002, 'Write a program for reversing a string.', 'johndoe08', 0),
(2001, 'Write a program for verifying an Armstrong number. Display 1 if yes, and 0 if not.', 'jessedoe27', 0),
(2002, 'Write a program for checking whether two strings are anagrams. Display 1 if yes, and 0 if not.', 'jessedoe27', 0);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `username` varchar(30) NOT NULL,
  `pass` varchar(30) DEFAULT NULL,
  `lang` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`username`, `pass`, `lang`) VALUES
('jessedoe27', 'jessedoe', 'Python'),
('johndoe08', 'johndoe', 'Java');

-- --------------------------------------------------------

--
-- Table structure for table `testcase`
--

CREATE TABLE `testcase` (
  `id` int(11) NOT NULL,
  `input` varchar(50) DEFAULT NULL,
  `output` varchar(50) DEFAULT NULL,
  `isVisible` tinyint(1) DEFAULT NULL,
  `quesID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testcase`
--

INSERT INTO `testcase` (`id`, `input`, `output`, `isVisible`, `quesID`) VALUES
(10011, 'abccba', '1', 1, 1001),
(10012, 'abcdcba', '1', 0, 1001),
(10013, 'database', '0', 0, 1001),
(10021, 'Reverse', 'esreveR', 1, 1002),
(10022, 'abcdcba', 'abcdcba', 0, 1002),
(10023, 'Python', 'nohtyP', 0, 1002),
(20011, '371', '1', 1, 2001),
(20012, '388', '0', 0, 2001),
(20013, '407', '1', 0, 2001),
(20021, 'gulp plug', '1', 1, 2002),
(20022, 'sector escort', '1', 0, 2002),
(20023, 'lessened needless', '1', 0, 2002);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `testcase`
--
ALTER TABLE `testcase`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quesID` (`quesID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`username`) REFERENCES `student` (`username`);

--
-- Constraints for table `testcase`
--
ALTER TABLE `testcase`
  ADD CONSTRAINT `testcase_ibfk_1` FOREIGN KEY (`quesID`) REFERENCES `question` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
