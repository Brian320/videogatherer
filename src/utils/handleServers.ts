import { SERVERS } from "../constants/servers.js";
import { Watchseries } from '../sources/watchseries.js';
import { Vidsrc } from '../sources/vidsrc.js';
import { Aniwave } from '../sources/aniwave.js';
import { Myflixerz } from '../sources/myflixerz.js';
import { FlixHQ } from '../sources/flixhq.js';
import { VidsrcMe } from '../sources/vidsrc.me.js';
import { VidsrcCC } from "../sources/vidsrc.cc.js";
import { VidsrcPro } from "../sources/vidsrc.pro.js";
import { VidStream } from "../sources/vidstream.to.js";
import { ViewVault } from "../sources/viewvault.org.js";

const handleServer = (server: string) => {
    switch(server) {
        case SERVERS.ANIWAVE:
            return Aniwave;
        case SERVERS.FLIXHQ:
            return FlixHQ;
        case SERVERS.MYFILXERZ:
            return Myflixerz;
        case SERVERS.VIDSRC_CC:
            return VidsrcCC;
        case SERVERS.VIDSRC_ME:
            return VidsrcMe;
        case SERVERS.VIDSRC_PRO:
            return VidsrcPro;
        case SERVERS.VIDSRC:
            return Vidsrc;
        case SERVERS.VIDSTREAM_TO:
            return VidStream;
        case SERVERS.VIEWVAULT_ORG:
            return ViewVault;
        case SERVERS.WATCHSERIES:
            return Watchseries;
        default:
            return null;
    }
}

export default handleServer;