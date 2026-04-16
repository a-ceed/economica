import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from 'next/router';
import Banner from './Banner'
import HeaderIndex from "./HeaderIndex";
import HeaderCreativity from "./HeaderCreativity";


export default function Layout({ children }) {

    const url = useRouter();
    let isHome;
    let isCreativity;


    if ( url.asPath ==="/" ) {
        isHome = "true"
    }
    if ( url.asPath ==="/creativity" ) {
        isCreativity = "true"
    }

  return (
    <div className="site-wrapper">

        {isHome ? <HeaderIndex /> : <Header />}
        {isCreativity ? <HeaderCreativity /> : <Header />}

      {children}
      <Footer />
    </div>
  );
}
