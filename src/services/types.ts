export type TCurrency = {
    base: string
    date: string
    rates: {
        [name: string]: number
    }
    success: boolean
    timestamp: number
}
