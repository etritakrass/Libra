const express = require('express');
const cors = require('cors');
const { poolPromise } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());




app.listen(PORT, () => console.log('Serveri po punon ne porten ${PORT}'));