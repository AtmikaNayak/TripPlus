# TripPlus

TripPlus is a simple travel website built using Node.js, Express.js, EJS, HTML, and CSS. The application allows users to explore popular travel destinations, browse curated travel packages, view destination details, and access a contact page.

## Features

- Home page with travel-themed landing section
- Destinations page featuring popular locations
- Dynamic destination details using EJS
- Travel packages page
- Contact page
- Reusable navigation and footer design
- Static asset handling with Express
- Dynamic routing for destination pages

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- EJS

### Backend
- Node.js
- Express.js

---

## Screenshots

### Home Page

![Home](public/home.png)

### Destinations Page

![Destinations](public/destinations.png)

### Packages Page

![Packages](public/packages.png)

### Contact Page

![Contact](public/contact.png)

---

## Project Structure

```text
TripPlus/
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── pages
│   ├── home.html
│   ├── destinations.html
│   ├── packages.html
│   └── contact.html
├── public
│   ├── balitemple.png
│   ├── bg.png
│   ├── bg1.png
│   ├── contact.png
│   ├── destination.png
│   ├── destinations.png
│   ├── eiffeltower.png
│   ├── favicon.ico
│   ├── home.png
│   ├── japan.png
│   ├── logo.png
│   ├── newyork.png
│   ├── packages.png
│   ├── sagradafamilia.png
│   └── style.css
└── views
    └── destination.ejs
```

---

## Routes

| Method | Route | Description |
|----------|----------|----------|
| GET | / | Home page |
| GET | /destinations | View all destinations |
| GET | /packages | View travel packages |
| GET | /contact | Contact page |
| GET | /destinations/:name | Dynamic destination details |

---

## Dynamic Destinations

The application uses a destination object in `app.js` to render destination-specific pages dynamically.

Available destinations:

- City of Lights (Paris)
- Land of the Rising Sun (Tokyo)
- Island of Gods (Bali)
- The Big Apple (New York)
- Gothic Gem (Barcelona)

Example route:

```text
/destinations/city_of_lights
```

---

## Application Workflow

### Home Page
- Introduces the platform.
- Provides quick access to destinations and travel packages.

### Destinations
- Displays available travel destinations.
- Each destination links to a dedicated detail page.

### Destination Details
- Rendered dynamically using EJS.
- Shows destination image, itinerary, duration, and package pricing.

### Packages
- Displays curated travel packages with descriptions and durations.

### Contact
- Provides a simple inquiry form for users.

---

## Installation

```bash
git clone <repository-url>

cd TripPlus

npm install

node app.js
```

Open:

```text
http://localhost:5000
```

---

## Author

### Atmika Nayak

GitHub: https://github.com/AtmikaNayak