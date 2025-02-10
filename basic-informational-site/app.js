const express = require('express');
const app = express();

const path =
  '/Users/fathysameh/web/TOP/repos/The-Odin-Project/basic-informational-site/';

app.get('/', (req, res) => {
  res.sendFile(`${path}index.html`);
});

app.get('/about', (req, res) => {
  res.sendFile(`${path}about.html`);
});

app.get('/contact-me', (req, res) => {
  res.sendFile(`${path}contact-me.html`);
});

app.use((req, res) => {
  res.sendFile(`${path}404.html`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Your app is running at port ${port}`);
});
