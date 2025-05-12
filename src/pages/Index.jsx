import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Nav from '../components/Nav';
import Button from '../components/Button';
import home01 from '../assets/home_01.png';
import home02 from '../assets/home_02.png';
import home03 from '../assets/home_03.png';
import homeBottom from '../assets/home_bottom.png';
import homeTop from '../assets/home_top.png';
import icFacebook from '../assets/ic_facebook.svg';
import icTwitter from '../assets/ic_twitter.svg';
import icYoutube from '../assets/ic_youtube.svg';
import icInstagram from '../assets/ic_instagram.svg';
import './Index.css';

function Index() {
    return (<div id="index">
        <Helmet>
            <title>판다마켓</title>
        </Helmet>
        <Nav type="default" />
        <section className="banner top">
            <div>
                <div className="banner-explain">
                    <h2 className="heading">일상의 모든 물건을 <br className="enter" />거래해 보세요</h2>
                    <Button styleType="large" to="/items">구경하러 가기</Button>
                </div>
                <img src={homeTop} />
            </div>
        </section>
        <main>
            <article>
                <div className="article-left">
                    <img src={home01} />
                    <div className="article-text">
                        <div className="article-top-text">Hot item</div>
                        <h2 className="heading">인기 상품을 <br className="enter" />확인해 보세요</h2>
                        <div className="article-explain">가장 HOT한 중고거래 물품을<br />판다 마켓에서 확인해 보세요</div>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-right">
                    <img src={home02} />
                    <div className="article-text">
                        <div className="article-top-text">Search</div>
                        <h2 className="heading">구매를 원하는 <br className="enter" />상품을 검색하세요</h2>
                        <div className="article-explain">구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요</div>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-left">
                    <img src={home03} />
                    <div className="article-text">
                        <div className="article-top-text">Register</div>
                        <h2 className="heading">판매를 원하는 <br className="enter" />상품을 등록하세요</h2>
                        <div className="article-explain">어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요</div>
                    </div>
                </div>
            </article>
        </main>
        <section className="banner bottom">
            <div>
                <div className="banner-explain">
                    <h2 className="heading">믿을 수 있는 <br />판다마켓 중고 거래</h2>
                </div>
                <img src={homeBottom} />
            </div>
        </section>
        <footer>
            <div>
                <div className="footer-copyright">@codeit - 2024</div>
                <div className="footer-link">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
                <ul className="footer-sns">
                    <li>
                        <a href="https://www.facebook.com" target="_blank"><img src={icFacebook} /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank"><img src={icTwitter} /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com" target="_blank"><img src={icYoutube} /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank"><img src={icInstagram} /></a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>);
}

export default Index;