const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando app
const app = express();
app.use(express.json());
app.use(cors()); // Libera acessos para todos os domínios

require('./src/config/config');

requireDir('./src/models');

// rota
app.use('/', require('./src/routes'));

// const Product = mongoose.model('Product');

app.listen(3001);

