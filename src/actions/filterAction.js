const setFilterText = (text) => {
    console.log("Текст изменен на: ", text);
    return {
        type: "SET_FILTER_TEXT",
        text: text
    }
};

const setFilterRange = (min, max) => {
    console.log("Range изменен на: ", min,"-", max);
    return {
        type: "SET_FILTER_RANGE",
        range: [min, max]
    }
};
export {setFilterText, setFilterRange};