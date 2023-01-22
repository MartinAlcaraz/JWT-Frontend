
const ModalMessage = ({ setAccepted }) => {

    const animacion = 'animacion-in';    // animacion para la entrada de la ventana
    function onclickAceptar() {
        setAccepted(true);
    }

    return (
        <div className={ "bg-black/50 fixed h-screen w-screen top-0 left-0 z-20 pt-[30vh] "+ animacion}>
            <div className="m-auto w-3/4">
                <p className="text-center p-4 mx-auto bg-primary border-primary">Registro exitoso!</p>
                <div className="flex justify-around">
                    <button className="button-primary w-1/3 " onClick={onclickAceptar}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalMessage;