const SUBTITLES_WHITELIST = ['Spanish', 'English'];

const parseVidsrcMe = (response) => {
    const { subtitle } = response;
    if (subtitle) {
        const result = subtitle
            .split(',')
            .map(item => {
                // Encontrar la posición del primer corchete cuadrado
                const bracketIndex = item.indexOf(']');
                
                // Extraer el lenguaje y la URL
                const language = item.substring(1, bracketIndex);
                const source = item.substring(bracketIndex + 1);
                
                return { language, source };
            })
            .filter(({ language }) => SUBTITLES_WHITELIST.includes(language));

        return {
            ...response,
            subtitle: result
        };
    }
    return response;
};

export default parseVidsrcMe;
