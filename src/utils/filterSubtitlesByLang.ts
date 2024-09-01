import { Subtitle } from './../utils';
const DEFAULT_SUBTITLES_WHITELIST = ['Spanish', 'English'];

interface FilteredSubtitle extends Subtitle {
    language: string;
}

const filterSubtitlesByLang = (subtitles: FilteredSubtitle[] = [], whitelist = DEFAULT_SUBTITLES_WHITELIST) => 
    subtitles.filter(({ language, label }) => {
        console.log({language, label})
        return whitelist.includes(label ?? language)
    }
);

export default filterSubtitlesByLang;