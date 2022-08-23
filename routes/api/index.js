const router = require("express").Router();
const pizzaRoutes = require("./pizza-route");

// add prefix of `/pizzas` to routes in `pizza-routes.js`
router.use("/pizzas", pizzaRoutes);

module.exports = router;
