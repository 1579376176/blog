const router = require("koa-router")();

const blog = require('../controllers/blog')

const { verifyToken } = require("../auth");

router.prefix("/blog");

router.get("/list", verifyToken, blog.listBlog);

router.get("/detail", blog.getBlog);

router.post('/post', blog.postBlog);

router.post("/comment", verifyToken, blog.postBlogCom);

module.exports = router;

