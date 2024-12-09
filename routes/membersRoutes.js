const express = require("express");
const router = express.Router();
const memberController = require("../controllers/membersController");

// Route to create a new library member
router.post("/", memberController.createMember);

// Route to read details of a specific library member
router.get("/:id", memberController.getMemberById);

// Route to update an existing library member
router.put("/:id", memberController.updateMember);

// Route to delete a library member
router.delete("/:id", memberController.deleteMember);

// Route to list all library members
router.get("/", memberController.listAllMembers);

module.exports = router;
