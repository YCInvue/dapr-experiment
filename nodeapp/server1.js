// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/order', (_req, res) => {
  res.json({message: 'Hello from get order'});
});

app.listen(port, () => console.log(`Node App listening on port ${port}!`));