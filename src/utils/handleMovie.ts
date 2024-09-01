import { ERRORS } from "../constants/messages.js";
import { SERVERS } from "../constants/servers.js";
import handleServer from "./handleServers.js";

const handleMovie = async (movieId: string, server: string, res: any, parser?: any) => {
    const serverInstance = handleServer(server);
    const serverName = Object.values(SERVERS).find(s => s === server);
    try {
        const movieResponse = await serverInstance.movie(movieId);
        const response = parser ? parser(movieResponse) : movieResponse

        res
        .status(200)
        .send({
            ...response,
            server: serverName,
        });
    } catch(error) {
        console.error('Error: ', error);
        res
        .status(400)
        .send({
            message: ERRORS.FETCHING_MOVIE,
            server: serverName,
        });
    }
}

export default handleMovie