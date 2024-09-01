import { SERVERS } from "../constants/servers.js";
import { Watchseries } from '../sources/watchseries.js';
import { Vidsrc } from '../sources/vidsrc.js';
import { Aniwave } from '../sources/aniwave.js';
import { Myflixerz } from '../sources/myflixerz.js';
import { FlixHQ } from '../sources/flixhq.js';
import { VidsrcMe } from '../sources/vidsrc.me.js';

const handleServer = (server: string) => {
    switch(server) {
        case SERVERS.WATCHSERIES:
            return Watchseries;
        case SERVERS.VIDSRC:
            return Vidsrc;
        case SERVERS.ANIWAVE:
            return Aniwave;
        case SERVERS.MYFILXERZ:
            return Myflixerz;
        case SERVERS.FLIXHQ:
            return FlixHQ;
        case SERVERS.VIDSRCME:
            return VidsrcMe;
        default:
            return null;
    }
}

export default handleServer;