import express from 'express';
import UsersRoute from './routes/createUsersRoute.mjs';

const PORT = 3000;

/** @type {Express} */
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-HEADERS', 'Authorization, Content-Type, Origin, X-Requested-With');
  res.type('json');
  next();
});

app.use(express.urlencoded({ extended: true, inflate: true }));
app.use(express.json({ inflate: true }));
app.use('/user', UsersRoute());

app.listen(PORT, '127.0.0.1', 1, () => console.log(`server started at http://localhost:${PORT}`));
