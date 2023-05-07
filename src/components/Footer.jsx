import { useEffect, useState } from 'react';


export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <>
            <div className='flex justify-center items-center mt-12 cursor-pointer text-sm'>
                {isVisible && (
                    <div
                        onClick={() => scrollToTop()}
                    >
                        <p>Ir al inicio de página</p>
                    </div>
                )}
            </div>
            <footer className='flex justify-between items-center botton-0 w-full py-5 px-8 text-sm font-light bg-white mt-6'>
                <p>Shopi</p>
                <p>By <a href='https://silviajcn.vercel.app/' target='_blank' rel='noreferrer' className='font-semibold'>Silvi</a> 💚</p>
            </footer>
        </>
    )
};