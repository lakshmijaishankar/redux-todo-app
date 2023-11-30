import React, { PureComponent } from 'react';
import Navbar from "../navbar/Navbar";

class Header extends PureComponent {

    render() {
        return (
            <header className="todo-nav-header flex">
                < Navbar />
            </header>
        )
    }

}

export default Header