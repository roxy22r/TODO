import express, { response } from 'express';
import morgan from 'morgan';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import {router as todoToRuter} from './TodoApi/index.js';
import bodyParser from "body-parser";
import cors from 'cors';
const app = express();
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));

app.use(morgan('common', { immediate: true }));

app.use(express.urlencoded({ extended: false }));

app.use('/todo', todoToRuter);

app.get('/', (request, response) => response.redirect('/todo'));

app.listen(PORT, () => {
    console.log(`Server startet at: http://localhost:${PORT}`);
})