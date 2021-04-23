const Contact = require("../models/contacts");

exports.createContact = (req, res) => {
  const contact = new Contact(req.body);
  contact.save((err, contact) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "NOT able to save contact in DB",
      });
    }
    res.json({ contact });
  });
};

exports.getContactById = (req, res, next, id) => {
  Contact.findById(id).exec((err, con) => {
    if (err) {
      return res.status(400).json({
        error: "Contact not found in DB",
      });
    }
    req.contact = con;
    next();
  });
};

exports.getContactByName = (req, res, next, name) => {
  Contact.find({ name }).exec((err, con) => {
    if (err) {
      return res.status(400).json({
        error: "Contact not found in DB",
      });
    }
    req.contact = con;
    next();
  });
};

exports.getContactByNumber = (req, res, next, no) => {
  Contact.find({ phone_no }).exec((err, num) => {
    if (err) {
      return res.status(400).json({
        error: "Contact not found in DB",
      });
    }
    req.contactnum = num;
    next();
  });
};

exports.deleteContact = (req, res) => {
  const contact = req.contact;

  contact.remove((err, contact) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this contact",
      });
    }
    res.json({
      message: "Successfull deleted",
    });
  });
};

exports.updateContact = (req, res) => {
  const contact = req.contact;
  contact.name = req.body.name;
  contact.phone_no = req.body.phone_no;

  contact.save((err, updatedContact) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update contact",
      });
    }
    res.json(updatedContact);
  });
};

exports.getAllContacts = (req, res) => {
  Contact.find().exec((err, contacts) => {
    if (err) {
      return res.status(400).json({
        error: "NO contacts found",
      });
    }
    res.json(contacts);
  });
};

exports.getContact = (req, res) => {
  return res.json(req.contact);
};

exports.getContactByNumber = (req, res) => {
  return res.json(req.contact);
};
