const Complaint = require("../models/Complaint");

exports.addComplaint = async (req, res) => {
    try {

        const complaint = new Complaint(req.body);

        await complaint.save();

        res.status(201).json({
            message: "Complaint Added",
            complaint
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getComplaints = async (req, res) => {
    try {

        const complaints = await Complaint.find();

        res.json(complaints);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateComplaint = async (req, res) => {
    try {

        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(complaint);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchByLocation = async (req, res) => {
    try {

        const complaints = await Complaint.find({
            location: req.query.location
        });

        res.json(complaints);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};