import { Facebook, Instagram, Mail } from "./icons"

export const Footer = () => {
    return (
           <div className="toolbar">
                <div>
                    <h3>Diaz web app</h3>
                    <p>
                        Plataforma dedicada al desarrollo de paginas web, apps móviles y otros tipos de software, para gestionar e impulsar todo tipo de prendimiento, negocios y empresas a través del desarrollo tecnológico.
                    </p>

                    <h3>Contácto</h3>
                    <div className="social_menu_small">
                        <a className="icon_btn" target='blank' href="https://facebook.com/diazwebapp">
                            <Facebook/> <p>Facebook</p>
                        </a>
                        <a className="icon_btn" target='blank' href="mailto:diazwebapp@gmail.com">
                            <Mail/> <p>Gmail</p>
                        </a>
                    </div>
                </div>

                <div>
                        <h3>Erick Díaz</h3>

                        <p>
                            Emprendedor, desarrollador de software y administrador de sistemas. Fundador y representante de la plataforma <b>Diaz web app</b>
                        </p>

                        <h3>Contácto</h3>

                        <div className="social_menu_small" >
                            <a className="icon_btn" target='blank' href="https://facebook.com/erickoficial69">
                                <Facebook/> <p>Facebook</p>
                            </a>
                            <a className="icon_btn" target='blank' href="https://instagram.com/erickoficial69">
                                <Instagram/> <p>Instagram</p>
                            </a>
                            <a className="icon_btn" target='blank' href="mailto:erickoficial69@gmail.com">
                                <Mail/> <p>Gmail</p>
                            </a>
                        </div>
                </div>
           </div>
    )
}