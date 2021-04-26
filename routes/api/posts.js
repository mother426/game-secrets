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
    .delete(postsController.remove);
router 
    .route("/image/upload")
    .post(upload, postsController.uploadImage);
router 
    .route("/comments")
    .post(postsController.postComment);
module.exports = router