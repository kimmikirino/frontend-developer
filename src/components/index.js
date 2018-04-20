import React from 'react';
import Albums from './albums';
import logo from '../assets/images/logo.png';
import './page.css';

class Home extends React.Component {
    render() {
        return (
            <main className="container">
                <header className="page-header">
                    <img src={logo} alt="superbid" className="page-header__logo"></img>
                </header>
                <Albums />
            </main>
        )
    }
}

export default Home;
