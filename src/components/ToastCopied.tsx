import type { JSX } from "astro/jsx-runtime";
import type { FunctionComponent } from "react";



const now: Date = new Date();
const time: string = now.getHours() + ":" + now.getMinutes();

const ToastCopied: FunctionComponent = (): JSX.Element => {
    return (
        <>

            <div className="chat chat-end p-2 mt-15 animate-slide-in-bottom animate-delay-300 animate-duration-slow">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Carlos chat bubble component"
                            src="../src/assets/images/profile_image.webp"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Carlos dice a las:
                    <time className="text-xs opacity-50">{time}</time>
                </div>
                <div className="chat-bubble chat-bubble-success "> <p>Muchas gracias por copiar mi correo electrónico!!.</p><p>Estaré encantado de contestarte si me envias un mensaje.</p></div>
            </div>
        </>
    )
}

export default ToastCopied