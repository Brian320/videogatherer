import { ERRORS } from "../constants/messages.js";
import { SERVERS } from "../constants/servers.js";
import handleServer from "./handleServers.js";

const handleMovie = async (movieId: string, server: string, res: any, parser?: any, simpleResponse = false) => {
    const serverInstance = handleServer(server);
    const serverName = Object.values(SERVERS).find(s => s === server);
    try {
        const movieResponse = await serverInstance.movie(movieId);
        const response = parser ? parser(movieResponse) : movieResponse
        const result = {
            ...response,
            server: serverName,
        };

        if (!simpleResponse) {
            res
        .status(200)
        .send(result);
        } else {
            return {
                ...result,
            }
        }
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