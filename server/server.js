const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors({
  origin: 'https://english-app-frontend.onrender.com', // ✅ domain frontend của bạn
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json()); // Ensure this line is present to parse JSON bodies

// Routes
app.use('/api/chat', require('./routes/chat.routes'));
app.use('/api/conversations', require('./routes/conversation.routes'));
app.use('/api/messages', require('./routes/messages.routes'));
app.use('/api', require('./routes/auth.routes')); 
app.use('/api', require('./routes/vocabulary.routes'));

app.get('/', (req, res) => {
  res.send('API Server is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});