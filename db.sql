-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Erstellungszeit: 13. Aug 2018 um 17:48
-- Server-Version: 5.7.21
-- PHP-Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Datenbank: `mowe`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `User`
--

CREATE TABLE `User` (
  `UserID` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Passwort` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `User`
--

INSERT INTO `User` (`UserID`, `Name`, `Passwort`) VALUES
(100, 'Max', '123'),
(101, 'Hans', '321'),
(102, 'Manni', 'Oettinger');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `User`
--
ALTER TABLE `User`
  MODIFY `UserID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
