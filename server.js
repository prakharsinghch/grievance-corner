const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const geoip = require('geoip-lite');

dotenv.config();

const app = express();

// Configure CORS
app.use(cors({
  origin: ['https://grievance-corner.vercel.app', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to get IP address
const getIpAddress = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress;
};

// Function to get location from IP
const getLocationFromIp = (ip) => {
  const geo = geoip.lookup(ip);
  if (geo) {
    return {
      country: geo.country,
      region: geo.region,
      city: geo.city,
      ll: geo.ll
    };
  }
  return null;
};

app.post('/api/submit-form', async (req, res) => {
  try {
    const { title, complaint, mood, remedy } = req.body;
    const ip = getIpAddress(req);
    const location = getLocationFromIp(ip);

    // Create email content with all form fields
    const emailContent = `
      🌟 New Complaint Received! 🌟

      📝 Title: ${title}

      😤 What's Bothering Them:
      ${complaint}

      😎 Current Mood: ${mood}

      💭 Suggested Remedy:
      ${remedy}

      📍 Location: ${location ? `${location.city}, ${location.country}` : 'Unknown location'}
      🌐 IP Address: ${ip}
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Complaint: ${title}`,
      text: emailContent
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Complaint submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Failed to submit complaint' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 