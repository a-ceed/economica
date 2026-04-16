import {HeaderBackground} from "./HeaderBackground";
import {SiteNav} from "./SiteNav"
import Link from "next/link";
import Image from "next/image";
import mainLogo from "../public/favicon.ico";



function Banner (props){

    return (
        <div className="site-header-content">
            <h1 className="site-title">
                <Link href="/">
                    <a>
                        <div
                            className="site-logo"
                            style={{
                                marginTop: '8px',
                                height: '25px',
                                width: '25px',
                            }}
                        >
                            <Image src={mainLogo} alt="fggfgf" layout="responsive" quality="1" width="72" height="72" />
                        </div>
                    </a>
                </Link>
                H1 Заголовок</h1>
            <h2 className="site-description">H2 Описание</h2>
        </div>
    )
}

export default Banner
