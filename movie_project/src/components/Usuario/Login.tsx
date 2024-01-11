import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../services/auth.service";
import { useAuthStore } from "../../store/auth.store";
import { User } from "../../types/user.types";
import { LoginResponse } from '../../services/auth.service';

export default function Login() {
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = async (data: User) => {
    try {
      const resLogin: LoginResponse = await loginRequest(data.email, data.password);
  
      // Verifica si la respuesta contiene el campo 'ok' y es true
      if (resLogin.ok) {
        setToken(resLogin.tokenb);
        navigate("/home");
      } else {
        console.error("Login failed:", resLogin.message);
      }
    } catch (error) {
      // Handle login error (e.g., show error message)
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-[calc(100vh-95px)] flex-col justify-center items-center outline-none"
      >
        <p className="place-self-start font-semibold text-base text-[#5473E3]">Log in</p>

        <input
          {...register("email", { required: "Email field is required.", pattern: /^\S+@\S+$/i })}
          type="email"
          placeholder="Email"
          className={`block peer rounded-[5px] w-[25rem] mt-5 ${errors.email ? "border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]" : "border-[#AEBBCD] focus:outline-none focus:ring-1"}`}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">{errors.email?.message}</span>

        <input
          {...register("password", { required: "Password field is required." })}
          type="password"
          placeholder="Contraseña"
          className={`block peer rounded-[5px] w-[25rem] mt-5 ${errors.password ? "border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]" : "border-[#AEBBCD] focus:outline-none focus:ring-1"}`}
        />
        <span className="place-self-start text-[14px] text-[#C93B32]">{errors.password?.message}</span>

        <button
          type="submit"
          className="rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 mt-5 hover:bg-[#2347C5] mb-5"
        >
          SIGN IN
        </button>

        <Link to="/user/signup" className="hover:text-[#2347C5] hover:underline">
          <p className="text-[#5473E3] mb-5">Don't have an account? Sign up</p>
        </Link>
      </form>
    </div>
  );
}
