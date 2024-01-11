import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { ICreateUser } from '../../types/user.types';

export default function SignUp() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register, 
    handleSubmit,
    formState: { errors },
    
  } = useForm<ICreateUser>();

  const onSubmit = async (data: ICreateUser) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Usuario creado con éxito
        setSuccessMessage('Usuario creado con éxito. Redirigiendo a la página de inicio de sesión...');
        setTimeout(() => {
          navigate('/login/sign');
        }, 3000);
      } else {
        // Manejar errores del servidor
        try {
          const errorData = await response.json();
          setErrorMessage(errorData.message || 'Error al crear el usuario');
        } catch (error) {
          console.error('Error al procesar la respuesta JSON:', error);
          setErrorMessage('Error al procesar la respuesta del servidor');
        }
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      setErrorMessage('Error al procesar la solicitud');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center outline-none">
        <p className="place-self-start font-semibold text-base text-[#5473E3]">Regístrese en el sistema</p>

        {/* Nombre */}
        <input
          {...register('name', {
            required: 'El campo de nombre es obligatorio.',
            minLength: {
              value: 3,
              message: 'El campo de nombre debe contener al menos 3 caracteres.',
            },
          })}
          type="text"
          placeholder="Nombre"
          className={errors.name ? 'block peer rounded-[5px] w-[25rem] mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]' : 'block peer rounded-[5px] mt-5 border-[#AEBBCD] w-[25rem] focus:outline-none focus:ring-1'}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">
          {errors.name?.message}
        </span>

        {/* Email */}
        <input
          {...register('email', {
            required: 'El campo de correo electrónico es obligatorio.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Por favor, introduce un correo electrónico válido.',
            },
          })}
          type="email"
          placeholder="Correo electrónico"
          className={errors.email ? 'block peer rounded-[5px] w-[25rem]  mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]' : 'block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1'}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">
          {errors.email?.message}
        </span>

        {/* Contraseña */}
        <input
          {...register('password', {
            required: 'El campo de contraseña es obligatorio.',
            minLength: {
              value: 8,
              message: 'Introduce una contraseña de al menos 8 caracteres.',
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              message: 'La contraseña debe contener al menos 1 número, 1 minúscula, 1 mayúscula y 1 carácter especial.',
            },
          })}
          type="password"
          placeholder="Contraseña"
          className={errors.password ? 'block peer rounded-[5px] w-[25rem] mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]' : 'block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1'}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">
          {errors.password?.message}
        </span>
          {/* Bloques de código para mostrar mensajes de error y éxito */}
        {errorMessage && (
          <div className="text-[#C93B32]">
            <p>{errorMessage}</p>
          </div>
        )}

        {successMessage && (
          <div className="text-[#3D5FD9]">
            <p>{successMessage}</p>
          </div>
        )}

        {/* Botón de envío */}
        <button
          type="submit"
          className={`rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 mt-5 hover:bg-[#2347C5] mb-5`}
        >
          REGISTRARSE
        </button>

        {/* Enlace a Iniciar sesión */}
        <Link to="/" className="hover:text-[#2347C5] hover:underline">
          <p className="text-[#5473E3] mb-5">¿Ya tienes una cuenta? Inicia sesión</p>
        </Link>
      </form>

      {/* Bloque de código existente para mostrar requisitos de contraseña */}
      <div className="text-[#6D7989] w-[25rem]">
        <label className="text-[#404B5A]">Senha deve conter:</label>

        <div className="mt-2 ">
          {errors.password?.message ? <FaTimes className="inline-block mr-2" /> : <FaCheck className="inline-block mr-2" />}
          <p className="inline-block">Introduce una contraseña de al menos 8 caracteres;</p>
        </div>

        <div>
          {errors.password?.message ? <FaTimes className="inline-block mr-2" /> : <FaCheck className="inline-block mr-2" />}
          <p className="inline-block">Introduce al menos 1 número;</p>
        </div>

        <div>
          {errors.password?.message ? <FaTimes className="inline-block mr-2" /> : <FaCheck className="inline-block mr-2" />}
          <p className="inline-block">Introduce al menos 1 letra minúscula;</p>
        </div>

        <div>
          {errors.password?.message ? <FaTimes className="inline-block mr-2" /> : <FaCheck className="inline-block mr-2" />}
          <p className="inline-block">Introduce al menos 1 letra mayúscula;</p>
        </div>

        <div>
          {errors.password?.message ? <FaTimes className="inline-block mr-2" /> : <FaCheck className="inline-block mr-2" />}
          <p className="inline-block">Introduce al menos 1 carácter especial;</p>
        </div>
      </div>
    </div>
  );
}
