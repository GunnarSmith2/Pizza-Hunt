const router = require("express").Router();
const commentRoutes = require("./comment-route");
const pizzaRoutes = require("./pizza-route");

// add prefix of `/pizzas` to routes in `pizza-routes.js`
router.use("/comments", commentRoutes);
router.use("/pizzas", pizzaRoutes);

module.exports = router;
