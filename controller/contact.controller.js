let contactService = require("../service/contact.service");
let addContact = (req, res, next) => {
  try {
    let { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      throw new Error("Contact ma'lumot to'liq emas!!!");
    }
    let contact = contactService.addContact({ name, email, subject, message });
    res.status(201).json(contact);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { addContact };
