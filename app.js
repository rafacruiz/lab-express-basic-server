// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
import express from 'express';
import morgan from 'morgan';
import path from "path";
import { fileURLToPath } from "url";


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));


// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '/views/home.html')));

app.get('/blog', (req, res) => res.status(200).sendFile(path.join(__dirname, '/views/blog.html')));


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
    console.log('Ready');
});