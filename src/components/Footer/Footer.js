/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css'
import logo from '../../assets/images/logo.png'
import fbImg from '../../assets/images/fb.png'
import igImg from '../../assets/images/ig.png'
import twImg from '../../assets/images/tw.png'

const Footer = () => {
    return (
        <footer>
            <div className='redesSociais'>
                <a href="#"><img src={fbImg} alt="Imagem Facebook"/></a>
                <a href="#"><img src={igImg} alt="Imagem Instagram"/></a>
                <a href="#"><img src={twImg} alt="Imagem Twitter"/></a>
            </div>
            <div className='logo'>
            <img src={logo} alt="Logo Organo"/>
            </div>
            <div className='infoDev'>
                <p>Desenvolvido por <a href='https://github.com/DevPedro10'>Natã Pedro</a></p>
            </div>
        </footer>
    )
}

export default Footer;