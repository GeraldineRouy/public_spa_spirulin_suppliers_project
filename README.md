# Project Title

## Introduction
This project is a Vue.js application that allows users to discover suppliers based on their geolocation. It utilizes various Vue.js features and libraries to enhance functionality and user experience.

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [API Integration](#api-integration)
- [Geolocation and Map Display](#geolocation-and-map-display)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Getting Started
To get started with this project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
```

## Features
- Discover suppliers based on user geolocation.
- Utilize Vue.js components for a modular architecture.
- Fetch data from APIs using Axios.
- Display supplier locations on a map with Leaflet.
- Handle API request exceptions gracefully.

  ## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
```
2. Navigate to the project directory:
```bash
cd your-repo-name
```
3. Install the required dependencies:
```bash
npm install
```
4. Add a Vue library/dependency using NPM:
```bash
npm install timeago.js
npm install axios
```

## Usage
1. Run the application:
```bash
npm run serve
```
2. Open your browser and navigate to `http://localhost:8080` to view the application.

## Components Overview
- **Main Component:** Handles the overall layout and routing.
- **SupplierList Component:** Displays the list of suppliers.
- **SupplierMap Component:** Shows suppliers on a map based on user geolocation.

## API Integration
- Utilize Axios for HTTP requests:
```javascript
import axios from 'axios';

axios.get('https://api.example.com/suppliers')
     .then(response => {
         // Handle successful response
     })
     .catch(error => {
         // Handle error
     });
```

## Geolocation and Map Display
- Use Leaflet API to display the geolocation of suppliers:
   ```javascript
   import L from 'leaflet';

   const map = L.map('map').setView([latitude, longitude], zoomLevel);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
   ```

## License
This project is the property of **Campus Numérique In The Alps Grenoble**. All rights reserved.

