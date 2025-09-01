import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import router from './routes/index.js';
import { conectar } from './public/services/conexion.js';
import { ConsultarProductos } from './public/services/conexion.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router)
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
conectar()
ConsultarProductos()