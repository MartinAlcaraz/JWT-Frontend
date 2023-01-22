import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UserServices from '../services/userServices.js';
import { UserContext } from '../context/UserContext.jsx';
import { useContext  } from 'react';

const Login = () => {
    const { setLoggedUser } = useContext(UserContext);    
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onsubmit = handleSubmit(async (values) => {
        const response = await UserServices.loginUser(values);

        if (response.status == 200) {
            //regitro exitoso, ir a la pagina de login
            setLoggedUser();
            navigate('/dashboard');
        }

        if (response.status == 401) {
            //Nombre de usuario o contraseña incorrectos
            setError("password", { type: "focus", message: 'Nombre de usuario o contraseña incorrectos.' }, { shouldFocus: true });
        }
        if(response == null) {
            alert('Ocurrio un error...')
        }
    });

    return (
        <form onSubmit={onsubmit} className="bg-blue-gray-400 border-2 rounded-lg flex flex-col w-1/2 mx-auto p-2">
            <h2 className='mt-4 mb-4 font-semibold text-lg'>Login</h2>
            <label htmlFor="username">Username</label>
            <input {...register("username", {
                required: "This field is required.",
            })}
                id="username"
                className='input-class'
                autoFocus={true} />
            
            <br className='h-4'/>

            <label htmlFor="password">Password</label>
            <input {...register("password", {
                required: "This field is required.",
            })} className='input-class' id='password' type="password" />
            {errors.password ? <p className='warning-message h-4'>{errors.password.message}</p> : <p className='h-4'></p>}
            <br />

            <Button variant="gradient" size="sm" className="w-1/4 active:translate-x-[1px] active:translate-y-[1px] mx-auto">
                <input type="submit"/>
            </Button>
        </form>
    );
}

export default Login;
