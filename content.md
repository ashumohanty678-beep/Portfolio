---
theme: Terminal Precision
name: Terminal Precision
project: Ashutosh Mohanty Portfolio
document: Content Source & Section Mapping
version: 1.4.0
source_files:
  - Profile.pdf
  - EnergyForecast (c:\Users\ashum\OneDrive\Desktop\EnergyForecast)
  - DepthWizard (c:\Users\ashum\OneDrive\Desktop\DepthWizard)
---

# Content Inventory & Section Mapping — Terminal Precision Theme

> **Rule of Content Authenticity**: Ground all portfolio entries strictly in verified source materials. No fabricated projects, imaginary metrics, or invented credentials.

---

## 1. Verified Personal Data (`Profile.pdf`)

- **Full Name**: Ashutosh Mohanty
- **Professional Headline**:
  > "B.TECH CSE AIML STUDENT 2nd YEAR| skilled with python, SQL, c language| Seeking for internship in software development"
- **Location**: Gunupur, Odisha, India
- **Contact Details**:
  - Email: `ashumohanty678@gmail.com`
  - LinkedIn: `www.linkedin.com/in/ashutosh-mohanty-892867385`
- **Top Skills**:
  - C (Programming Language)
  - SQL
  - Python (Programming Language)
- **Education**:
  - Institution: GIET University Gunupur
  - Degree: Bachelor of Technology - BTech, Computer Science Engineering In Artifical intelligence(AI) and Machine learning(ML)
  - Duration: August 2025 – August 2029

---

## 2. Verified Project Data (Inspected Local Repositories)

### Project 1: EnergyForecast
- **Source**: `c:\Users\ashum\OneDrive\Desktop\EnergyForecast`
- **Git Remote**: `https://github.com/ashumohanty678-beep/Repository-name-EnergyForecast.git`
- **Purpose**: Machine learning-driven residential electricity consumption forecasting and analytics web application.
- **Tech Stack**: Python, Flask, Scikit-Learn (`RandomForestRegressor`), SQLite, Chart.js, Pandas, NumPy
- **Key Features (Verified from source code)**:
  1. Random Forest regression model forecasting energy demand (kWh) from temperature, humidity, occupants, and prior consumption.
  2. Automated efficiency classification (Low <10 kWh, Moderate 10–20 kWh, High >20 kWh) paired with actionable energy-saving tips.
  3. Interactive Chart.js analytics dashboard featuring historical consumption trend lines, load distribution pie charts, and aggregate metrics.
  4. Searchable audit log system with multi-parameter search filtering (date, temperature, prediction) and CSV dataset export.
  5. SQLite database integration with secure user authentication and persistent user prediction records.
- **Image**: `public/projects/energy.png` (from repo's static assets)
- **Reported Missing Information**: No public live URL hosted (runs locally on Flask).

### Project 2: DepthWizard
- **Source**: `c:\Users\ashum\OneDrive\Desktop\DepthWizard`
- **Purpose**: Geospatial satellite imagery ingestion and terrain depth analysis web application.
- **Tech Stack**: Python, Flask, PyTorch (configured in virtual environment), HTML5/CSS3
- **Key Features (Verified from source code)**:
  1. Multi-format satellite imagery ingestion pipeline supporting high-resolution `.tif`, `.tiff`, `.png`, and `.jpg` formats.
  2. Automated upload handling, file type validation, and structured server-side asset storage.
  3. Integrated web-based visual inspection view for rapid verification of uploaded aerial captures.
  4. Configured PyTorch environment prepared for monocular depth estimation models.
- **Image**: `public/projects/depth_wizard.jpg` (Technical satellite terrain elevation and depth map preview)
- **Reported Missing Information**: No `.git` remote configured in local directory; no README file; deep learning inference pipeline is in prototyping phase; no public live demo URL.

---

## 3. Section Availability Summary

| Section | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| **01 // Hero** | Populated | `Profile.pdf` | Headline, Student Status, Core Skills |
| **02 // About** | Populated | `Profile.pdf` | Authentic background narrative |
| **03 // Skills** | Populated | `Profile.pdf` | C, SQL, Python |
| **04 // Projects** | Populated | Local Repositories | EnergyForecast & DepthWizard |
| **05 // Education** | Populated | `Profile.pdf` | GIET University (2025–2029) |
| **06 // Achievements**| Populated | User Experience | Energy Forecasting Project, Depth Wizard Presentation, HAL Koraput Summer Internship |
| **07 // Contact** | Populated | `Profile.pdf` | Email, LinkedIn, Location |