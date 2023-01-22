import { Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import UserServices from '../services/userServices.js'
import ModalMessage from '../components/ModalMessage'

const Register = () => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [showModalView, setShowModalView] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const onsubmit = handleSubmit(async (values) => {
        const response = await UserServices.registerUser(values);

        if (response.status == 409) {
            //el nombre de usuario ya existe
            setError("username", { type: "focus", message: 'El nombre de usuario ya existe.' }, { shouldFocus: true });
        }
        if (response.status == 201) {
            //regitro exitoso, ir a la pagina de login
            setIsDisabled(true); // se deshabilitan los inputs
            setShowModalView(true); // se muestra la ventana modal para notificar del exito del registro           
        }
        if(response == null){
            alert('Ocurrio un error');
        }
    });

    // se ejecuta cuando se acepta la notificacion del modal view.
    useEffect(()=>{
        if(accepted){
            navigate('/login', { replace: true });
        }
    }, [accepted]);

    return (
        <div>
            {showModalView ? <ModalMessage setAccepted={setAccepted} /> : <></>}

            <form onSubmit={onsubmit} className="bg-blue-gray-400 border-2 rounded-lg flex flex-col w-1/2 mx-auto p-2">

                <h2 className='mt-4 mb-4 font-semibold text-lg'>Register</h2>
                <label htmlFor="username">Username</label>
                <input {...register("username", {
                    required: "This field is required.",
                })}
                    id="username"
                    disabled={isDisabled}
                    className='input-class'
                    autoFocus={true} />
                {errors.username ? <p className='warning-message h-4'>{errors.username.message}</p> : <p className='h-4'></p>}

                <label htmlFor="password">Password</label>
                <input {...register("password", {
                    required: "This field is required.",
                })} className='input-class' id='password' type="password" disabled={isDisabled} />
                {errors.password ? <p className='warning-message h-4'>{errors.password.message}</p> : <p className='h-4'></p>}
                <br />

                <Button variant="gradient" size="sm" className="w-1/4 active:translate-x-[1px] active:translate-y-[1px] mx-auto">
                    <input type="submit" disabled={isDisabled} />
                </Button>
            </form>
        </div>
    );
}

export default Register;
