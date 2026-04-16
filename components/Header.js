import {HeaderBackground} from "./HeaderBackground";
import {SiteNav} from "./SiteNav"
import Link from "next/link";
import Image from "next/image";
import mainLogo from "../public/favicon.ico";



function Header (props){

    return (
        <header className="site-home-header">
            <div className="outer site-nav-main">

                <div className="inner">
                    <SiteNav className="site-nav" />

                </div>

            </div>
        </header>
    )
}

export default Header
