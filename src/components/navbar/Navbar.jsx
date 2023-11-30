import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { themeAction } from '../../redux/actions/themeAction';
import sun_icon from '../../assets/images/icon-sun.png';
import moon_icon from '../../assets/images/icon-moon.png'

class Navbar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            themeChange: false
        }
        this.handleThemeChange = this.handleThemeChange.bind(this)
    }

    handleThemeChange() {
        const { changeTheme } = this.props;
        this.setState({ themeChange: !this.state.themeChange }, () => { changeTheme(this.state.themeChange); });
    }

    render() {
        const { isChanged } = this.props
        return (
            <nav className='todo-navbar flex justify-between flex-[1] items-center'>
                <div className="nav-left">
                    <header><h1 className='uppercase font-bold text-[2rem] text-white' style={{ letterSpacing: "0.3rem" }}>todo</h1></header>
                </div>
                <div className="nav-right">
                    <div className="moon_svg cursor-pointer" onClick={this.handleThemeChange}>
                        <img src={isChanged ? moon_icon : sun_icon} />
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isChanged: state.themeReducer.isChanged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: (change) => dispatch(themeAction(change))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)