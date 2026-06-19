const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

const destinations = {
    city_of_lights:{
        name: "City of Lights",
        itinerary: "Paris, France",
        image: "eiffeltower.png",
        price: "$1,200",
        duration: "5 days"
    },
    land_of_the_rising_sun:{
        name: "Land of the Rising Sun",
        itinerary: "Tokyo, Japan",
        image: "japan.png",
        price: "$1,800",
        duration: "7 days"
    },
    island_of_gods:{
        name: "Island of Gods",
        itinerary: "Bali, Indonesia",
        image: "balitemple.png",
        price: "$900",
        duration: "6 days"
    },
    the_big_apple:{
        name: "The Big Apple",
        itinerary: "New York, USA",
        image: "newyork.png",
        price: "$1,500",
        duration: "4 days"
    },
    gothic_gem:{
        name: "Gothic Gem",
        itinerary: "Barcelona, Spain",
        image: "sagradafamilia.png",
        price: "$1,100",
        duration: "5 days"
    }
};

app.get("/destinations/:name", (req,res) => {
    const data = destinations[req.params.name];
    res.render("destination", {data});
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "pages", "home.html"))
});

app.get("/destinations", (req,res) => {
    res.sendFile(path.join(__dirname, "pages", "destinations.html"))
});

app.get("/packages", (req,res) => {
    res.sendFile(path.join(__dirname, "pages", "packages.html"))
});

app.get("/contact", (req,res) => {
    res.sendFile(path.join(__dirname, "pages", "contact.html"))
});

app.listen(5000, () => {
    console.log("Running~~~~~~~~~~~~~~~~~~~");
});