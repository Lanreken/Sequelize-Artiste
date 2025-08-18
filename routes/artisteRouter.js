const express = require("express");
const {
  createArtiste,
  getAllArtistes,
  getOneArtiste,
  updateArtiste,
  deleteOneArtiste,
  deleteAllArtistes,
} = require("../controllers/artisteController");

const router = express.Router();

router.post("/artiste", createArtiste);

router.get("/all-artiste", getAllArtistes);

router.get("/artiste/:id", getOneArtiste);

router.put("/update-artiste/:id", updateArtiste);

router.delete("/delete-artiste/:id", deleteOneArtiste);

router.delete("/delete-all-artistes", deleteAllArtistes);

module.exports = router;
