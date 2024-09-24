import "./ModalMail.css"


async function submit(e: SubmitEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/sendMail", {
        method: "POST",
        body: formData,
    });
    const data = await response.json();
    if (data.message) {
        localStorage.setItem('message', 'true');
        window.location.reload();
    }
}


export default function ModalMail() {
    return (
        <dialog
            id="formContacto"
            class="modal backdrop-grayscale bg-[rgba(0,0,0,0.5)] flex justify-center items-center "
        >

            <div
                className=" w-[90%] max-w-3xl lg:max-w-[1000px] rounded-3xl h-auto  bg-transparent  text-[#3A3E32]"
            >

                <div
                    className="flex flex-col  bg-[#D4DCC0] gap-5 pt-2 pb-5 px-3  rounded-xl"
                >

                    <div className="w-full flex justify-end items-center">
                        <form method="dialog">
                            <button
                                className="font-bold text-xl bg-[#D4DCC0] hover:bg-[#D4DCC0] border-0 border-none border-transparent shadow-none hover:text-red-500"
                            >✕
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col md:flex-row flex-auto justify-between items-center gap-y-4 md:m-1 md:px-3 w-full h-auto ">

                        <div className="h-auto w-full md:w-1/2 m-auto">
                            <p className=" text-[clamp(1.7rem,5vw,3rem)] font-semiboldt mt-3">
                                Contactenos
                            </p>
                            <p className=" text-pretty mt-2">
                                Por favor, complete el formulario y
                                diganos en qué podemos ayudarlo.
                            </p>
                            <div
                                className="flex justify-center items-center gap-4 my-5"
                            >
                                <a
                                    aria-label="Link al Instagram de Islay Asesores de Seguros"
                                    href="https://www.instagram.com/islayseguros/"
                                    target="_blank"
                                    className="transition hover:scale-150"
                                >
                                    <svg
                                        id="instagram-icon"
                                        className="icon icon-tabler icon-tabler-brand-instagram"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.8"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ><defs>
                                            <linearGradient
                                                id="instagram-gradient"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="0%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stop-color="#E1306C"
                                                ></stop>
                                                <stop
                                                    offset="50%"
                                                    stop-color="#FF9800"
                                                ></stop>
                                                <stop
                                                    offset="100%"
                                                    stop-color="#FFD600"
                                                ></stop>
                                            </linearGradient>
                                        </defs>
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                                        >
                                        </path>
                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"> </path>
                                        <path d="M16.5 7.5l0 .01"> </path>
                                    </svg>
                                </a>

                                {/*                             <a
                                aria-label="Link al Linkedin de Ricardo Pablo Pesce Hijos Asesores de Seguros"
                                href="https://www.facebook.com/p/Ricardo-Pablo-Pesce-Hijos-Asesores-de-Seguros-100083078217553/?_rdr"
                                target="_blank"
                                className="transition hover:scale-150 hover:text-[#3b5998] text-pesceBlack-50"
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path><path
                                    d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                                ></path>
                                </svg>
                                {                                <svg
                                    className="icon icon-tabler icon-tabler-brand-linkedin"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.8"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path><path
                                    d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                                ></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"
                                ></path><path d="M12 16l0 -5"></path><path
                                    d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>}
                            </a> */}

                                <a
                                    aria-label="Link para mensaje directo al Wathsapp de Islay Asesores de Seguros"
                                    href="https://wa.me/59899991100?text=Hola, quiero hacerles una consulta"
                                    target="_blank"
                                    className="transition hover:scale-150 hover:text-[#2bd46a] text-pesceBlack-50"
                                >
                                    <svg
                                        className="icon icon-tabler icon-tabler-brand-whatsapp"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.8"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ><path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"
                                    ></path><path
                                        d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
                                    ></path></svg>
                                </a>
                            </div>
                        </div>
                        {<form
                            onSubmit={submit}
                            className=" grid grid-cols-1 gap-y-4 md:m-1 md:px-3 md:w-1/2 h-auto w-full"
                        >
                            <select
                                aria-label="tema"
                                id="tema"
                                required
                                name="tema"
                                className="select select-bordered shrink "
                            >
                                <option
                                    aria-label="Motivo de contacto"
                                    disabled
                                    selected
                                >
                                    Motivo de contacto</option>
                                <option aria-label="Líneas Personales">Hogar</option>
                                <option aria-label="Líneas Comerciales">Automotores</option>
                                <option aria-label="Líneas Industriales">Construcción</option>
                                <option aria-label="Líneas Agricolas">Garantias</option>
                                <option aria-label="Otros">Otros</option>
                            </select>

                            <label for="fullname" className="input input-bordered flex w-[clamp(180px,5vw,auto)] items-center gap-2 ">
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70 "
                                ><path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                ></path></svg>
                                <input
                                    id="fullname"
                                    type="text"
                                    className=""
                                    placeholder="Nombre y Apellido"
                                    name="fullname"
                                    required
                                />
                            </label>
                            <label for="telefono" className="input input-bordered flex items-center gap-2">
                                <svg
                                    className="icon icon-tabler icon-tabler-phone-filled "
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path><path
                                    d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                                    stroke-width="0"
                                    fill="currentColor"
                                    className="opacity-70"
                                ></path></svg>
                                <input
                                    id="telefono"
                                    type="text"
                                    className="grow"
                                    placeholder="Telefono"
                                    name="telefono"
                                    required
                                />
                            </label>
                            <label for="email" className="input input-bordered flex items-center gap-2">
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70 "
                                ><path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                                ></path><path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                                ></path>
                                </svg>
                                <input
                                    id="email"
                                    type="text"
                                    className="grow"
                                    placeholder="Email"
                                    name="email"
                                    required
                                />
                            </label>
                            <label for="mensaje" className="textarea textarea-bordered flex items-start gap-2  ">
                                <div className="grid place-items-start opacity-70 h-full mt-1 ">
                                    <svg
                                        className="icon icon-tabler icon-tabler-message-circle-2-filled "
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        stroke="black"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ><path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path><path
                                        d="M5.821 4.91c3.898 -2.765 9.469 -2.539 13.073 .536c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447 -7.965 4.583 -12.231 2.805l-.232 -.101l-4.375 .931l-.075 .013l-.11 .009l-.113 -.004l-.044 -.005l-.11 -.02l-.105 -.034l-.1 -.044l-.076 -.042l-.108 -.077l-.081 -.074l-.073 -.083l-.053 -.075l-.065 -.115l-.042 -.106l-.031 -.113l-.013 -.075l-.009 -.11l.004 -.113l.005 -.044l.02 -.11l.022 -.072l1.15 -3.451l-.022 -.036c-2.21 -3.747 -1.209 -8.392 2.411 -11.118l.23 -.168z"
                                        stroke-width="0"
                                        fill="currentColor"
                                    ></path></svg>
                                </div>
                                <textarea
                                    id="mensaje"
                                    className="grow bg-transparent border-none outline-none resize-none text-base 
                                "
                                    name="mensaje"
                                    placeholder="Mensaje"
                                ></textarea>
                            </label>
                            <div className="w-full grid place-items-center">
                                <button className="btnModal"
                                    id="btnMail">
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Enviar</span>
                                </button>
                            </div>


                        </form>}
                    </div>

                </div >
            </div >
        </dialog >
    )
}