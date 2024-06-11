// Navbar.tsx
import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import Login from '../components/Login';

const Navbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const loginRef = useRef<HTMLDivElement>(null);

    const navItems: { link: string, path: string }[] = [
        { link: "ABOUT US", path: "aboutus" },
        { link: "HOW IT WORKS?", path: "how" },
        { link: "CONTACT US", path: "contact" },
    ];

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='w-full bg-white md:bg-transparent  top-0 left-0 right-0'>
            <nav className={'py-10 px-40'}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href='' className='text-2x1 font-semibold flex items-center space-x-3'>
                        <img src={logo} alt=""></img>
                    </a>
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => (
                                <li key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>
                                    <a href={path}>{link}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button
                            onClick={toggleModal}
                            className='test-white py-2 px-4 transition-all duration-300 rounded-full border-black border-2 hover:bg-brandPrimary hover:text-white'>
                            Login
                        </button>
                    </div>
                </div>
            </nav>
            {isModalOpen &&
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div ref={loginRef} className="bg-white py-20 px-14 rounded-md "style={{background: "linear-gradient(225deg, #A7DA7C, #FFFFFF 50%, #DCB0FE)"}}>
                        <Login />
                    </div>
                </div>
            }
        </header>
    );
};

export default Navbar;
