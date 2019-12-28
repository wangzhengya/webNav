const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to zhengyang‘s website navigation' })
);

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/links', require('./routes/links'));
app.use('/api/categories', require('./routes/categories'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`服务器运行在端口：${PORT}`));
