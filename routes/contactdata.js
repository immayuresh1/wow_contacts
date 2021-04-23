const express = require("express");
const router = express.Router();
const {
  createContact,
  getContactById,
  deleteContact,
  updateContact,
  getAllContacts,
  getContact,
  getContactByName,getContactByNumber
} = require("../controllers/contactdata");

router.param("ContactId", getContactById);
router.param("ContactName",getContactByName)
router.param("ContactNumber",getContactByNumber)

router.post("/createContact", createContact);

router.put("/contact/:ContactId", updateContact);

router.delete("/contact/:ContactId", deleteContact);

router.get("/contacts", getAllContacts);

router.get("/contact/:ContactName", getContact);
router.get("/contact/:ContactNumber", getContactByNumber);

module.exports = router;
