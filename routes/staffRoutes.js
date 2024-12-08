const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

// Route to create a new staff member
router.post("/", staffController.createStaff);

// Route to read details of a specific staff member
router.get("/:id", staffController.getStaffById);

// Route to update an existing staff member
router.put("/:id", staffController.updateStaff);

// Route to delete a staff member
router.delete("/:id", staffController.deleteStaff);

// Route to list all staff members
router.get("/", staffController.listAllStaff);

module.exports = router;
