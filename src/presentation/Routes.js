const { Router }  = require("express");

const router = Router()

const UserController = require("./controllers/UserController");

router.get("/", UserController.getUsers);

router.get("/customer", UserController.getUsers);

router.post("/person", UserController.postPerson)

module.exports = router;
