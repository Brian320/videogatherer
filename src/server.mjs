import express from "express";
import { SERVERS } from "./constants/servers.js";
import parseSourcesWithSubtitles from "./utils/parseSourcesWithSubtitles.js";
import handleMovie from "./utils/handleMovie.js";
import session from "express-session";
import dotenv from "dotenv";
// import { handleFetchSubtitlesByMovie, loginOpenSubtitles } from "./sources/opensubtitles.js";

const env = dotenv.config().parsed;
const app = express();
const port = 3030;

app.use(session({
    secret: env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

app.get('/', async (req, res) => {
    // if (!req.session.isLoggedIn) {
    //     await loginOpenSubtitles(req);
    // }
    console.log({isLoggedIn: req.session.isLoggedIn, os_token: req.session.os_token});
    res.send('Welcome to my server!');
});

app.get('/movie/vidsrc/:movieId', async ({ params, ...req }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.VIDSRC, res);
    // await handleFetchSubtitlesByMovie(movieId, req);
});

app.get('/movie/vidsrcme/:movieId', async ({ params }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.VIDSRCME, res, parseSourcesWithSubtitles);
});

app.get('/movie/flixhq/:movieId', async ({ params }, res) => {
    const { movieId } = params;
    handleMovie(movieId, SERVERS.FLIXHQ, res, parseSourcesWithSubtitles);
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