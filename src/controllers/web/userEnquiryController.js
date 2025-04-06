const UserEnquiry = require('../../models/enquiry.model');

// CREATE
const enquiryInsert = async (req, res) => {
    try {
        const newEnquiry = new UserEnquiry(req.body);
        await newEnquiry.save();
        res.status(201).json({
            message: 'Enquiry submitted successfully',
            data: newEnquiry
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error submitting enquiry',
            error: err.message
        });
    }
};

// READ (LIST)
const enquiryList = async (req, res) => {
    try {
        const enquiries = await UserEnquiry.find();
        res.status(200).json({
            message: 'Enquiries retrieved successfully',
            data: enquiries
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error retrieving enquiries',
            error: err.message
        });
    }
};

// UPDATE
const enquiryUpdate = async (req, res) => {
    try {
        const updated = await UserEnquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message: 'Enquiry updated successfully',
            data: updated
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error updating enquiry',
            error: err.message
        });
    }
};

// DELETE
const enquiryDelete = async (req, res) => {
    try {
        await UserEnquiry.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Enquiry deleted successfully'
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error deleting enquiry',
            error: err.message
        });
    }
};

module.exports = {
    enquiryInsert,
    enquiryList,
    enquiryUpdate,
    enquiryDelete
};
