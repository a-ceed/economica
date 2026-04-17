import Link from "next/link";

function Footer (props){


    return (
        <footer className="site-footer outer">
            <div className="site-footer-content inner">
                <section className="copyright">
                    <a href="https://temniyecolog.ru">Блог Темного эколога</a>
                </section>

                <nav className="site-footer-nav">

                        <a href="https://t.me/darkecologist" target="_blank" rel="noopener noreferrer">
                           Телеграм
                        </a>


                    <a href="https://vk.com/darkecologist" target="_blank" rel="noopener noreferrer">
                        Вконтакте
                    </a>
                </nav>
            </div>
        </footer>
    )

}

export default Footer
