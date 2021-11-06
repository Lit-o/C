import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul className={style.ul}>
                    <li><NavLink className={style.link} to="/exchange" activeClassName={style.active}>Exchange
                        rates</NavLink></li>
                    <li><NavLink className={style.link} to="/converter"
                                 activeClassName={style.active}>Currency converter</NavLink></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;