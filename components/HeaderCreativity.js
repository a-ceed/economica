import {HeaderBackground} from "./HeaderBackground";
import {SiteNav} from "./SiteNav"
import Link from "next/link";
import Image from "next/image";
import mainLogo from "../public/dark8.png";



function HeaderCreativity (props){

    return (
        <header className="site-home-header">
            <div className="outer site-header-background no-image">
                <div className="inner"><SiteNav className="site-nav" />
                    <div className="site-header-content">
                        <h1 className="site-title">
                            {/*<Link href="/">*/}
                            {/*    <a>*/}
                            {/*        <div*/}
                            {/*            className="site-logo"*/}
                            {/*            style={{*/}
                            {/*                marginTop: '8px',*/}
                            {/*                height: '100px',*/}
                            {/*                width: '100px',*/}
                            {/*                textAlign: "center",*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            /!*<Image src={mainLogo} alt="{Художественные произведения книги и кино на экологическую тему}" layout="responsive" quality="95" width="100" height="100" />*!/*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</Link>*/}
                            Художественные фильмы, сериалы и книги  на тему экологии</h1>
                        <h2 className="site-description">(собранные экологическим подпольем)</h2>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default HeaderCreativity
