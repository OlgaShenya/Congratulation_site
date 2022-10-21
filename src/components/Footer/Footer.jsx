import Container from '../Container/Container';
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as PTIcon } from '../../img/pinterest.svg';
import { ReactComponent as STIcon } from '../../img/stumbleupon.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Designer:<a href='#'>xxx</a></p>
                    <p>Coder:<a href='#'>xxx</a></p>
                    <p>© HBCard, 2022</p>
                </div>

                <ul className={style.social}>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <VKIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <PTIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <STIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <TGIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);
export default Footer;