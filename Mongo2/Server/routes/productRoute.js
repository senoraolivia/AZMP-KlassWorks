const express = require("express");

const {
    getData,
    getDataById,
    deleteData,
    postData

} = require("../controllers/productController")


const router = express.Router();

router.get("/", getData);
router.get("/:id:", getDataById);
router.delete("/:id:", deleteData);
router.post("/", postData);


module.exports = router;

