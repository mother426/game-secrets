const router = require("express").Router();
const postsController = require("../../controllers/postsController");

router 
    .route("/")
    .get(postsController.findAll)
    .post(postsController.create);

router
    .route("/:id")
    .get(postsController.findById)
    .delete(postsController.remove);
router
    .route("/findsecrets")
    .get(postsController.findByTitle);

module.exports = router