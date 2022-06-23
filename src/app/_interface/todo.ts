export interface ToDo {
    id?: number, // ? bedeutet es muss nicht gesetzt werden -> ohne ? -> z.B title muss gesetzt werden
    title: string,
    description?: string,
    status: boolean,
    position: number;
}
