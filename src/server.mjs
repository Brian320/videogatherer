import express from "express";
import { SERVERS } from "./constants/servers.js";
import parseVidsrcMe from "./utils/parseVidsrcMe.js";
import handleMovie from "./utils/handleMovie.js";

const app = express();
const port = 3030;

app.get('/', async (req, res) => {
    res.send('Welcome to my server!');
});

app.get('/movie/vidsrc/:movieId', async ({ params }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.VIDSRC, res);
});

app.get('/movie/vidsrcme/:movieId', async ({ params }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.VIDSRCME, res, parseVidsrcMe);
});

app.get('/movie/flixhq/:movieId', async ({ params }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.FLIXHQ, res);
});

app.get('/movie/myflixerz/:movieId', async ({ params }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.MYFILXERZ, res);
});

app.get('/movie/watchseriesx/:movieId', async ({ params }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.WATCHSERIESX, res);
});

app.get('/movie/aniwave/:movieId', async ({ params }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.ANIWAVE, res);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});