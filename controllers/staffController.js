const Staff = require("../models/staffModel");

/**
 * Creates a new staff member.
 * @param {Object} req - The HTTP request object containing staff details in req.body.
 * @param {Object} res - The HTTP response object.
 */
exports.createStaff = async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    res.status(500).json({ error: "Failed to create staff member", details: error.message });
  }
};

/**
 * Retrieves a staff member by ID.
 * @param {Object} req - The HTTP request object containing staff ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) {
      return res.status(404).json({ error: "Staff member not found" });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve staff member", details: error.message });
  }
};

/**
 * Updates a staff member's details.
 * @param {Object} req - The HTTP request object containing updates in req.body and staff ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.updateStaff = async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStaff) {
      return res.status(404).json({ error: "Staff member not found" });
    }
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(500).json({ error: "Failed to update staff member", details: error.message });
  }
};

/**
 * Deletes a staff member.
 * @param {Object} req - The HTTP request object containing staff ID in req.params.id.
 * @param {Object} res - The HTTP response object.
 */
exports.deleteStaff = async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
    if (!deletedStaff) {
      return res.status(404).json({ error: "Staff member not found" });
    }
    res.status(200).json({ message: "Staff member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete staff member", details: error.message });
  }
};

/**
 * Lists all staff members.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.listAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: "Failed to list staff members", details: error.message });
  }
};
