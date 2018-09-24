/*
    Generates formatters for data labels,
    with default configuration changes 1200000 to 1.2mln

    Example usage:
    label: {
        formatter: createNumberFormatter({
         defaultText: 'brak danych',
        })
    }    
*/

export const createNumberFormatter = (options) => {
    const defaults = {
        accessor: (item) => item.data,
        digitsAfterPoint: 1,
        defaultText: "-",
        scaleValue: 1000000,
        scaleUnitName: "mln"
    };

    const config = Object.assign({}, defaults, options);

    const numbersToText = (param) => {
        const value = config.accessor(param);
        const { defaultText, scaleUnitName, scaleValue, digitsAfterPoint } = config;

        if (typeof value !== "undefined" && !isNaN(value)) {
            const formattedValue = (value / scaleValue).toFixed(digitsAfterPoint);
            return `${formattedValue} ${scaleUnitName}`;
        } else {
            return defaultText;
        }
    };

    return numbersToText;
};
