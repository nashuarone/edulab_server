const Router = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const newsController = require("../controllers/newsController");

const router = new Router();

router.post("", authMiddleware, newsController.createNews);
router.get("", authMiddleware, newsController.getAllNews);

module.exports = router;
