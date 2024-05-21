export interface Posiciones {
  total: number
  page: number
  perPage: number
  posiciones: Posicion[]
}

export interface Posicion {
  id: string
  fechaEntregaInicio: string
  moneda: string
  precio: number
  Producto: Producto
  Empresa: Empresa
}

export interface Producto {
  nombre: string
  usoFrecuente: boolean
}

export interface Empresa {
  razonSocial: string
}
