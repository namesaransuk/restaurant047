const express = require('express');
const restaurants = require('../data');
const router = express.Router();

// http://localhost:3000/api/
router.get('/', (req, res) => {
    res.send('<h1>Restaurant API</h1>');
});

// http://localhost:3000/api/restaurants
router.get('/restaurants', (req, res) => {
    res.json(restaurants);
});

// http://localhost:3000/api/restaurants/1
router.get("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
    res.json(restaurant);
});

// http://localhost:3000/api/restaurants
router.post("/restaurants", (req, res) => {
    const newRestaurant = {
      ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
  });  

// http://localhost:3000/api/restaurants/1
router.put("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    const updatedRestaurant = {
      id:restaurantId,
      ...req.body
    };
    restaurants[restaurantIndex] = updatedRestaurant;
    res.json(updatedRestaurant);
  });
  

// http://localhost:3000/api/restaurants/1
router.delete("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    restaurants.splice(restaurantIndex, 1);
    res.sendStatus(204);
});

module.exports = router;