const router = require("express").Router();
const orderssController = require("./orders.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

const ordersRouter = require("../orders/orders.router")

// /orders routes
router.route("/:orderId")
    // .get(ordersController.read)
    // .put(ordersController.update)
    .all(methodNotAllowed)

router.route("/")
    // .get(ordersController.list)
    // .post(ordersController.create)
    .all(methodNotAllowed)

module.exports = router;
