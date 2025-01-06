import { useEffect, useState,useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react'


const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false);
    const [hideSubOpen, setHideSubOpen] = useState(false);

    const location = useLocation(); // 현재 경로를 가져옵니다.
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
                                인사말
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
                    <li className="li" onClick={quitModal}><Link to='/notice'>알림마당</Link></li>
                    <li className="li" onClick={quitModal}><Link to='/question'>문의하기</Link></li>
                    </ul>
                </div>
                </div>
                <div className="modal_back"></div>
            </div>
            )}
            <div className="nav_menu">
                <ul className="nav_menuls">
                <li
                style={{fontWeight: location.pathname === "/intro" ? "600" : "normal",}}
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
                        <li>
                        <Link to = '/intro' onClick={() => setSubOpen(false)}>협회 소개</Link></li>
                        <li><Link to = '/intro/president' onClick={() => setSubOpen(false)}>인사말</Link></li>
                        <li><Link to = '/intro/map' onClick={() => setSubOpen(false)}>오시는 길</Link></li>
                    </ul>
                    </div>
                    }
                </li>
                    <li style={{fontWeight: location.pathname === "/sihf" ? "600" : "normal",}}><Link to='/sihf'>SIHF</Link></li>
                    <li style={{fontWeight: location.pathname === "/notice" ? "600" : "normal",}}><Link to='/notice'>알림마당</Link></li>
                    <li style={{fontWeight: location.pathname === "/question" ? "600" : "normal",}}><Link to='/question'>문의하기</Link></li>
                </ul>
            </div>

        </div>
    )
}
export default Nav;