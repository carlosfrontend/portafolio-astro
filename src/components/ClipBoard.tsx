import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState, type FunctionComponent } from "react";
import Logo from "./Logo";
import ToastCopied from "./ToastCopied";
import type { JSX } from "astro/jsx-runtime";

type EmailType = string

const ClipBoard: FunctionComponent = (): JSX.Element => {
    const email: EmailType = 'carlosfrontend@hotmail';
    const [emailCopied, setEmailCopied] = useState<boolean>(false);
    const notify = (time: string): string => toast.custom(<ToastCopied time={time} />);


    useEffect(() => {
        if (emailCopied) {
            setTimeout(() => {
                setEmailCopied(false);
            }, 4000);
        }
    }, [emailCopied])

    const handleCopyClick: React.MouseEventHandler<HTMLButtonElement> = async (e): Promise<void> => {

        try {
            await window.navigator.clipboard.writeText(email)
            const now: Date = new Date();
            const currentTime: string = now.getHours() + ":" + now.getMinutes();
            notify(currentTime);
            setEmailCopied(true);
        } catch (err) {

            alert("Copy to clipboard failed.");
        }
    }
    return (

        <div className='flex flex-col justify-center items-center gap-4'>
            <span>
                {emailCopied ? (
                    <Logo

                        id='#check'
                        className='size-5'
                        title='check logo'
                    />
                ) : (
                    <Logo

                        id='#copy'
                        className='size-5'
                        title='copy logo'
                    />
                )}
            </span>
            <Toaster position='top-center' toastOptions={{ duration: 3000 }} />
            <button onClick={(e) => handleCopyClick(e)} className='btn btn-sm w-70 py-5 md:w-auto btn-outline'
            >{emailCopied ? 'Email Copiado' : 'Copiar Email'}</button>

        </div>

    )
}

export default ClipBoard