const Member = require("../models/memberModel");

/**
 * Creates a new library member.
 * @param {Object} req - The HTTP request object containing member details in req.body.
 * @param {Object} res - The HTTP response object.
 */
exports.createMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to create member", details: error.message });
  }
};

/**
 * Retrieves a library member by ID.
 * @param {Object} req - The HTTP request object containing member ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve member", details: error.message });
  }
};

/**
 * Updates a library member's details.
 * @param {Object} req - The HTTP request object containing updates in req.body and member ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.updateMember = async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMember) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to update member", details: error.message });
  }
};

/**
 * Deletes a library member.
 * @param {Object} req - The HTTP request object containing member ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.deleteMember = async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    if (!deletedMember) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete member", details: error.message });
  }
};

/**
 * Lists all library members.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.listAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: "Failed to list members", details: error.message });
  }
};
