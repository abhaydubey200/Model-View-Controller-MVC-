const express = require('express');
const {
  enquiryInsert,
  enquiryList,
  enquiryUpdate,
  enquiryDelete
} = require('../../controllers/web/userEnquiryController');

const router = express.Router();

router.post('/insert', enquiryInsert);
router.get('/list', enquiryList);
router.put('/update/:id', enquiryUpdate);
router.delete('/delete/:id', enquiryDelete);

module.exports = router;
