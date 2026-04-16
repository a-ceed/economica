import Image from "next/image";

export default function History({ frontmatter, content, dataArray }) {
    return (
        <main id="site-main" className="site-main outer">
            <div className="inner">
                <article className="post-full post tag-getting-started featured">
                    <header className="post-full-header">
                        <h1>Историческая рулетка</h1>
                        <p className="post-full-custom-excerpt">Визуализация исторических пересечений</p>

                        <div className="post-full-byline">
                            <section className="post-full-byline-content">
                                <ul className="author-list">
                                    <li className="author-list-item">
                                        <a className="author-avatar">
                                            <Image
                                                src="https://temniyecolog.ru/_next/static/media/dark8.5416d8b1.png"
                                                alt="Экология Тёмного эколога"
                                                width={100}
                                                height={100}
                                                quality={25}
                                            />
                                        </a>
                                    </li>
                                </ul>
                                <section className="post-full-byline-meta">
                                    <h4 className="author-name">Тёмный эколог</h4>
                                    <div className="byline-meta-content">
                                        <time className="byline-meta-date">09.03.2026</time>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </header>
                </article>

                <span><a href="https://temniyecolog.ru/historical-roulette.html">Программа</a> представляет собой некий барабан с карточками исторических личностей размещенных на временной шкале истории, что позволяет как взглянуть на глобальный исторический процесс в целостности, так и узнать о взаимоотношениях конкретных личностей в истории. Программа упрощает восприятие и запоминание глобального исторического процесса ввиду формирования наглядной взаимосвязи личностей в истории.</span>

                <section className="post-full-content">
                    <div>
                        <Image
                            src="/media-image/rulette.png"
                            alt="Экология Тёмного эколога"
                            width={1919}
                            height={920}
                            quality={25}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <br/>
                        <br/>
                        <br/>

                        <span>Можно искать и группировать карточки для выявления взаимосвязи.</span>
                        <br/>
                        <br/>

                        <Image
                            src="/media-image/rulette2.png"
                            alt="Экология Тёмного эколога"
                            width={800}
                            height={500}
                            quality={25}
                        />
                        <br/>
                        <br/>

                        <span>Это тестовая версия для проверки идеи, карточки с описанием составляла нейросетка, пока не правил.</span><br/>
                        <span>Для перемещения по шкале времени и вращения барабана двигайте зажатой ЛКМ: </span>
                        <br/>
                        <br/>
                        <a href="https://temniyecolog.ru/history-drum-insert-base-v0.0.3.html">Историческая рулетка</a><br/>
                        <br/>

                        <br/>
                        <br/>

                    </div>
                    <div className="wrapper-telegram" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="wrapper-align-telegram" style={{ display: 'flex' }}>
                            <div className="block-telegram" style={{ marginRight: '15px', marginBottom: '15px', maxHeight: '81px', maxWidth: '251px' }}>
                                <a className="author-telegram" href="https://t.me/darkecologist" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/ecologic-blog.png"
                                        alt="Экологический блог в телеграме Тёмного эколога"
                                        width={251}
                                        height={81}
                                    />
                                </a>
                            </div>
                            <div style={{ maxHeight: '81px', maxWidth: '316px' }}>
                                <a className="author-telegram" href="https://t.me/+cW-J3353tF03YzEy" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/ecologic-blog-podpole.png"
                                        alt="Экологический чат в телеграме Тёмного эколога"
                                        width={316}
                                        height={81}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export async function getStaticProps() {
    return { props: {} };
}