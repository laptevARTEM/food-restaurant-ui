import './Header.css';
import React from "react";
import Logo from "./Logo";
import Telegram from "./Socials/Telegram";
import Instagram from "./Socials/Instagram";
import LinkedIn from "./Socials/LinkedIn";
import SearchIcon from "./SearchIcon";
import CartLogo from "./CartLogo";
import ActionButton from "./ActionButton";

function Header() {

    return (
        <React.StrictMode>
            <header className="header-wrapper flex-container">
                <div className="header-logo-container">
                    <Logo />
                </div>
                <div className="header-nav-container">
                    <div className="header-top-container flex-container">
                        <div className="header-socials flex-container">
                            <Telegram/>
                            <Instagram/>
                            <LinkedIn/>
                        </div>
                        <div className="header-nav">
                            <ul className="nav-menu flex-container">
                                <li className="nav-menu-item">
                                    Главная
                                </li>
                                <li className="nav-menu-item">
                                    Меню
                                </li>
                                <li className="nav-menu-item">
                                    О нас
                                </li>
                                <li className="nav-menu-item">
                                    Галерея
                                </li>
                                <li className="nav-menu-item">
                                    Вакансии
                                </li>
                                <li className="nav-menu-item">
                                    Блог
                                </li>
                            </ul>
                        </div>
                        <div className="book-btn-container">
                            Бронирорвание
                        </div>
                        <div className="auth-block">
                            Вход\Регистрация
                        </div>
                    </div>
                    <div className="header-bottom-container flex-container">
                        <div className="header-search-block flex-container">
                            <input className="header-search-input" type="search" />
                            <SearchIcon />
                        </div>
                        <div className="header-cart-block flex-container">
                            <span className="header-cart-title">Корзина</span>
                            <CartLogo />
                        </div>
                        <div className="header-actions-block">
                            <ActionButton />
                        </div>
                    </div>
                </div>
            </header>
        </React.StrictMode>
    );
}

export default Header;
