const express = require('express');
const { createPDF } = require("./createPdf");
const { createImage } = require("./createImage");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = 3003;
const REACT_APP_TEMPLATE_PORT = 3002;
const LOCAL_LOCATION = `http://localhost:${REACT_APP_TEMPLATE_PORT}`

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/', async (req, res) => {
  let headers, body, status;
  const location = req?.body?.href || LOCAL_LOCATION;

  if (req.body.type === undefined || req.body.size === undefined) {
    status = 400;
    body = 'Please specify a valid export size and type';
  } else if (req.body.type === 'png') {
    const imageBuffer = await createImage(location, req.body.size);

    headers = { 'Content-Type': 'image/png' };
    status = 200;
    body = imageBuffer;
  } else if (req.body.type === 'pdf') {
    const pdfBuffer = await createPDF(location, req.body.size);

    headers = { 'Content-Type': 'application/pdf', 'Content-Length': pdfBuffer.length };
    status = 200;
    body = pdfBuffer;
  } else {
    status = 400;
    body = 'Please specify either an image or pdf type';
  }

  res.set(headers);
  res.status(status).send(body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})