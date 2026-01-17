const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Email setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

// Contact API
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields required" });
    }

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL,
            subject: "New Contact Form Message",
            html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
        });

        res.json({ success: true, msg: "Message sent!" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Email failed" });
    }
});

app.get("/", (req, res) => {
    res.send("🚀 DevAI Contact API Running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
