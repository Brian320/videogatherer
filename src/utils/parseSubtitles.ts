import filterSubtitlesByLang from "./filterSubtitlesByLang.js";

const parseSubtitles = (subtitles: any, shouldFilterSubtitles: boolean) => {
    const isString = typeof subtitles === 'string';
    const subtitlesArray = isString ? subtitles.split(',') : subtitles;
    const subtitlesSource = isString ? subtitlesArray.map((item: string) => {
        // Encontrar la posición del primer corchete cuadrado
        const bracketIndex = item.indexOf(']');
        
        // Extraer el lenguaje y la URL
        const language = item.substring(1, bracketIndex);
        const source = item.substring(bracketIndex + 1);
        
        return { language, source };
    }) : subtitlesArray;

    if (shouldFilterSubtitles) {
        const filteredSubtitles = filterSubtitlesByLang(subtitlesSource);
        return filteredSubtitles;
    }

    return subtitlesSource;
};

export default parseSubtitles;