export type TCurrency = {
    name: string
    value: string
}

export const updadeCurrencyDataFormat = (
    currencies: {
        [name: string]: number
    },
    baseCurrency: string
): Array<TCurrency> => {
    const data: Array<TCurrency> = []

    Object.keys(currencies).forEach((key) => {
        if (1 / currencies[key] >= 1) {
            data.push({
                name: `1 ${key}`,
                value: (1 / currencies[key]).toFixed(2) + ` ${baseCurrency}`,
            })
        } else if (10 / currencies[key] >= 1) {
            data.push({
                name: `10 ${key}`,
                value: (10 / currencies[key]).toFixed(2) + ` ${baseCurrency}`,
            })
        } else if (100 / currencies[key] >= 1) {
            data.push({
                name: `100 ${key}`,
                value: (100 / currencies[key]).toFixed(2) + ` ${baseCurrency}`,
            })
        } else if (1000 / currencies[key] >= 1) {
            data.push({
                name: `1 000 ${key}`,
                value: (1000 / currencies[key]).toFixed(2) + ` ${baseCurrency}`,
            })
        } else {
            data.push({
                name: `10 000 ${key}`,
                value:
                    (10000 / currencies[key]).toFixed(2) + ` ${baseCurrency}`,
            })
        }
    })

    return data
}
