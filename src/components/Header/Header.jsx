import 'react';
import './Header.css'
import logo from "../../../image/nav-image.jpg"
const Header = () => {
    return (
        <nav>
            <div>
                <h2>Knowledge Cafe</h2>
            </div>
            <div className='nav-title'>
                <div className='nav-text'>
                    <a href="/home">Home</a>
                    <a href="/About">About</a>
                    <a href="/learn">Learn More</a>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Header;