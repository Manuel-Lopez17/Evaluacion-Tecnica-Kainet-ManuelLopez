export interface Posiciones {
    total: number
    page: number
    perPage: number
    posiciones: Posicion[]
}

export interface Posicion {
    id: string
    idEmpresa: string
    idPrdoucto: string
    fechaEntregaInicio: string
    moneda: string
    precio: number
    Productos: Productos
}

export interface Productos {
    usoFrecuente: boolean
}
