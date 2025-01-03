import { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react'


const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false);
    const [hideSubOpen, setHideSubOpen] = useState(false);

    const menuRef = useRef(null);
    
    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setSubOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    
    const quitModal = () =>{
        setHideSubOpen(false);
        setOpen(false);
    }

    return(
        <div className="nav">
            <div className="nav_main">
                <Link to = '/'><img src= '/images/logo.svg' alt = "로고"  className="nav_img"/></Link>
                <div className="nav_hide">
                <Hamburger toggled={isOpen} toggle={setOpen} rounded/>
                </div>
            </div>
            {isOpen && (
            <div>
                <div className="nav_modal">
                <div className="modal_menu">
                    <ul className="ul">
                    <li onClick={() => setHideSubOpen(!hideSubOpen)}>
                        <Link to='/intro' className={hideSubOpen ? 'clicked': ''}>협회소개</Link>
                        {hideSubOpen && (
                        <div className="modal_submenu">
                            <ul className="modal_sub">
                            <li>
                                <Link to='/intro' onClick={quitModal} >
                                협회 소개
                                </Link>
                            </li>
                            <li>
                                <Link to='/intro/president' onClick={quitModal}>
                                협회장 소개
                                </Link>
                            </li>
                            <li>
                                <Link to='/intro/map' onClick={quitModal}>
                                오시는 길
                                </Link>
                            </li>
                            </ul>
                        </div>
                        )}
                    </li>
                    <li className="li" onClick={quitModal}><Link to='/sihf'>SIHF</Link></li>
                    <li className="li" onClick={quitModal}><Link to='/info'>알림마당</Link></li>
                    <li className="li" onClick={quitModal}><Link to='/resource'>자료마당</Link></li>
                    </ul>
                </div>
                </div>
                <div className="modal_back"></div>
            </div>
            )}
            <div className="nav_menu">
                <ul className="nav_menuls">
                <li
                className="sub"
                ref={menuRef}
                onMouseEnter={() => setSubOpen(true)} 
                >
                    <Link to="/intro">협회소개</Link>
                    {subOpen &&
                    <div className="nav_submenu"
                    onMouseEnter={() => setSubOpen(true)} 
                    onMouseLeave={() => setSubOpen(false)} >
                    <ul className="nav_sub">
                        <li><Link to = '/intro' onClick={() => setSubOpen(false)}>협회 소개</Link></li>
                        <li><Link to = '/intro/president' onClick={() => setSubOpen(false)}>협회장 소개</Link></li>
                        <li><Link to = '/intro/map' onClick={() => setSubOpen(false)}>오시는 길</Link></li>
                    </ul>
                    </div>
                    }
                </li>
                    <li><Link to='/sihf'>SIHF</Link></li>
                    <li><Link to='/info'>알림마당</Link></li>
                    <li><Link to='/resource'>자료마당</Link></li>
                </ul>
            </div>

        </div>
    )
}
export default Nav;