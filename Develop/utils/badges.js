// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function LicenseBadge(license) {
    switch (license) {
      case 'Apache License 2.0':
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
        break
      case 'MIT License':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
        break
      case 'BSD 3-Clause "New" or "Revised" License':
        return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
        break
      case 'GNU General Public License v3.0':
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
        break
      default:
        return ''
    }
  }
  
  module.exports = LicenseBadge