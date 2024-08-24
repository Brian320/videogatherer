import { ERRORS } from "../constants/messages.js";
import { SERVERS } from "../constants/servers.js";
import handleServer from "./handleServers.js";

const handleMovie = async (movieId, server, res, parser) => {
    const serverInstance = handleServer(server);
    const serverName = Object.values(SERVERS).find(s => s === server);
    try {
        const movieResponse = await serverInstance.movie(movieId);
        const response = parser ? parser(movieResponse) : movieResponse

        res.send({
            ...response,
            server: serverName,
        }, 200);
    } catch(error) {
        console.error('Error: ', error);
        res.send({
            message: ERRORS.FETCHING_MOVIE,
            server: serverName,
        }, 400);
    }
}

export default handleMovie