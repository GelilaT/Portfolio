// server.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const TELEGRAM_API_URL = `https://api.telegram.org/bot7386014003:AAGeXzmxwKwxjOy3K12QtrzGhXMMFuW41Mk/sendMessage`;
const CHAT_ID = '5163498269'; 

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3001',
}));


app.post('/send-message', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).send('Message is required.');
  }

  try {
    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: CHAT_ID,
      text: message,
    });

    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.status(500).send('Error sending message.');
  }
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
