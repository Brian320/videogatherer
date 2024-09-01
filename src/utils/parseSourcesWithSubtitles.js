import parseSubtitles from "./parseSubtitles.js";


const parseSourcesWithSubtitles = (response) => {
    const { subtitle, tracks } = response;
    const subtitlesSource = subtitle ?? tracks;
    if (subtitlesSource) {
        const subtitles = parseSubtitles(subtitlesSource, true);

        return {
            ...response,
            subtitle: subtitles
        };
    }
    return response;
};

export default parseSourcesWithSubtitles;
