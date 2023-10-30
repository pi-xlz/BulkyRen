import * as fs from 'fs';
import express, { Express, Request, Response } from 'express';

const PORT = process.env.PORT || 2003;

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO FROM SATORU GOJO');
});

app.get('/hi', (req, res) => {
  res.send('HEy FROM SATORU GOJO');
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
