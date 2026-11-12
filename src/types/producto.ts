export type CategoriaGas = 'Cilindro' | 'Accesorio' | 'Industrial';

export interface Producto {
    id: string;
    nombre: string;
    capacidadKg?: number; // Ejemplo: 5, 11, 15, 45
    precio: number;
    stock: number;
    categoria: CategoriaGas;
    imagen: string;
    descripcion: string;
}

export interface ItemCarrito {
    producto: Producto;
    cantidad: number;
}