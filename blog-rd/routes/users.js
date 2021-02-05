const router = require('koa-router')()
const user = require('../controllers/user');

router.prefix('/user')
console.log(11111);
router.post('/login', user.login)

module.exports = router
