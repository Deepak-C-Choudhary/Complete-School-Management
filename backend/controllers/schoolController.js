
const School = require("../models/School");

exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    // Basic validation
    if (
      !name ||
      !address ||
      latitude === undefined ||
      longitude === undefined
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const schoolId = await School.create(name, address, latitude, longitude);
    res.status(201).json({
      message: "School added successfully",
      schoolId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (latitude === undefined || longitude === undefined) {
      const schools = await School.findAll();
      return res.json(schools);
    }

    const nearbySchools = await School.findNearbySchools(
      parseFloat(latitude),
      parseFloat(longitude)
    );
    res.json(nearbySchools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
