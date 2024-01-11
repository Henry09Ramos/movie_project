// auth.service.ts
import axios, { AxiosError } from 'axios';
import API_URL from "../utils/auth";


export interface LoginResponse {
  ok: boolean;
  message: string;
  tokenb: string;
}

// Modifica la función loginRequest para especificar el tipo de respuesta
export const loginRequest = async (email: string, password: string) => {
  try {
    const resLogin = await API_URL.post('/login/sign', { email, password });
    return resLogin.data;  // Devuelve directamente el objeto data de la respuesta
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en la solicitud de inicio de sesión:', (error as AxiosError).response?.data);
      throw new Error('Error en la solicitud de inicio de sesión');
    } else {
      console.error('Error no identificado:', error);
      throw new Error('Error no identificado');
    }
  }
};

