const express = require('express');

const router = express.Router();
const app = express();

router.route('/').get().post();
router.route('/').delete().put();
// router.route("/delete/:noteId").delete()

module.exports = router;
