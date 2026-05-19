const auth = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

const {
    addComplaint,
    getComplaints,
    updateComplaint,
    searchByLocation
} = require("../controllers/complaintController");

router.post("/", addComplaint);

router.get("/", auth, getComplaints);

router.put("/:id", updateComplaint);

router.get("/search/location", searchByLocation);

module.exports = router;