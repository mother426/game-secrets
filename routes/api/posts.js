const router = require("express").Router();
const postsController = require("../../controllers/postsController");
const { upload } = require("../../controllers/upload");

router 
    .route("/")
    .get(postsController.findAll)
    .post(postsController.createPost);
router
    .route("/findsecrets")
    .post(postsController.findByTitle);

router
    .route("/:id")
    .get(postsController.findById)
    .post(postsController.postComment)
    .delete(postsController.remove);
router 
    .route("/image/upload")
    .post(upload, postsController.uploadImage);

module.exports = router