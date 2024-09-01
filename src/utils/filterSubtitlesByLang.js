const DEFAULT_SUBTITLES_WHITELIST = ['Spanish', 'English'];

const filterSubtitlesByLang = (subtitles = [], whitelist = DEFAULT_SUBTITLES_WHITELIST) => 
    subtitles.filter(({ language, label }) => {
        console.log({language, label})
        return whitelist.includes(label ?? language)
    }
);

export default filterSubtitlesByLang;