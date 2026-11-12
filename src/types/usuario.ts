export type RolUsuario = 'cliente' | 'admin';

export interface Usuario {
    id: string;
    rut: string;
    nombre: string;
    email: string;
    rol: RolUsuario;
}

export interface AuthState {
    usuario: Usuario | null;
    estaAutenticado: boolean;
}