import Image from "next/image";

export default function Loansharks({ frontmatter, content, dataArray }) {
    return (
        <main id="site-main" className="site-main outer">
            <div className="inner">
                <article className="post-full post tag-getting-started featured">
                    <header className="post-full-header">
                        <h1>Акулы ростовщики</h1>
                        <p className="post-full-custom-excerpt">Математический симулятор ростовщичества</p>

                        <div className="post-full-byline">
                            <section className="post-full-byline-content">
                                <ul className="author-list">
                                    <li className="author-list-item">
                                        <a className="author-avatar">
                                            <Image
                                                src="https://economica.su/_next/static/media/dark8.5416d8b1.png"
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

                <span>Эта игра — экономический симулятор, демонстрирующий так называемый эффект «банковского пылесоса»: когда банк выдаёт кредит, он вводит в экономику деньги только на сумму долга, но требует возврата долг + проценты.


<br/><br/>Поскольку проценты нигде дополнительно не создаются, банк фактически забирает деньги из экономики. Рано или поздно большая часть денежных средств стекается к банкам, а участники рынка оказываются в затруднительном финансовом положении.


<br/><br/>В математике, в разделе теории вероятностей, в подразделе теории игр этот эффект называется игры с ненулевой суммой.


<br/><br/>Показанный механизм основной генератор кризисных явлений в капиталистической системе, от финансовых до экологических, поскольку вынуждает всех участников рынка постоянно наращивать прибыль любой ценой — под угрозой банкротства.

<br/><br/>Кроме того, манипулирование величиной процентной ставки позволяет ростовщическим мафиям провоцировать запланированные кризисы. В результате череды банкротств они могут скупать активы страны за бесценок как это было в России в 90‑х, когда ключевая ставка достигала 200%.


<br/><br/>К настоящему моменту страны — участники Международного валютного фонда (МВФ) в той или иной степени передали право устанавливать базовую кредитную ставку этой международной организации — формально добровольно, но зачастую под определённым давлением. В России, как и в большинстве стран, Центральный банк обладает независимостью и не подчиняется напрямую органам государственной власти.
<br/><br/>Последней страной, в которой процентная ставка по кредитам регулировалась государственной системой в интересах населения, был СССР. Среди лидеров, предпринимавших попытки усилить государственный контроль над центральными банками Джон Ф. Кеннеди (США) и Муаммар Каддафи (Ливия).</span>

                <section className="post-full-content">
                    <div>
                        <Image
                            src="/media-image/aculi-rostovchiki2.png"
                            alt="Экология Тёмного эколога"
                            width={800}
                            height={500}
                            quality={25}
                        />
                        <br/>
                        <br/>
                        <Image
                            src="/media-image/aculi-rostovchiki1.png"
                            alt="Экология Тёмного эколога"
                            width={1919}
                            height={920}
                            quality={25}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <br/>
                        <br/>
                        <br/>

                        <span>Как играть?</span>
                        <br/>
                        <br/>



                        <br/><br/><span>Каждый цикл (условно месяц) игроки производят взаиморасчеты в своем бизнесе от 1 до 10 монет друг другу. Когда игрок берет кредит (это происходит при балансе 50 монет), он увеличивает цены на свои услуги добавляя к стоимости платежи по своему кредиту (это и есть истинная причина инфляции).</span>
                        <br/><br/><span>Если игрок не может выплачивать долг по кредиту, банк через 10 циклов просрочки забирает его бизнес.</span>
                        <br/><br/><span>Циклы можно запускать по одному в ручную нажатием кнопки или автоматически - кнопка АВТО.</span>
                        <br/><br/><span>В конце игры изучите отображаемую статистику и логи.</span>
                        <br/>
                        <br/>
                        <a href="https://economica.su/loan-sharks.html">Игра Акулы ростовщики</a><br/>
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