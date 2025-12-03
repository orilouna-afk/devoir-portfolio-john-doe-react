import './Header.css'
import banner from '../../assets/images/banner.jpg'

const Header = () => {
    return (
        <header 
        className='header-page'
        style={{backgroundImage: `url(${banner})`}}
        />
    );
};

export default Header;