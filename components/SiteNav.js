/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from "./Navigation";
import mainLogo from "../public/favicon.ico";

export const SiteNav = () => {
const navigation = ""



  return (
    <nav className="site-nav">
      <div className="site-nav-left-wrapper">
        <div className="site-nav-left">
          <Link href="/">
              <a className="site-nav-logo">
                  <div>
                  <Image src={mainLogo} alt="fggfgf" layout="responsive" quality="1" width="6" height="6" />
                  </div>
              </a>
          </Link>
          <div className="site-nav-content">
            <Navigation data={navigation} />
           <span className="nav-post-title"></span>
          </div>
        </div>
      </div>
      <div className="site-nav-right">

          <div className="social-links">
            {/*<SocialLinks {...{ siteUrl, site }} />*/}
          </div>

      </div>
    </nav>
  )
}
