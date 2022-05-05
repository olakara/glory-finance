const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('finance:app');
const morgan = require('morgan');
const financeRoutes = require('./src/routes/finance.routes');

const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(morgan('short'));

// App status
app.get('/', (req, res) => {
    res.send('ok')
});

// App Routes
app.use('/finance', financeRoutes);

app.listen(PORT, HOST, () => {
    debug('Listening on port: ' + chalk.green(PORT));
});