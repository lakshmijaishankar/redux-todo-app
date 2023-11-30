import React, { PureComponent } from 'react';
import './PopupMessage.scss'

class PopupMessage extends PureComponent {


    render() {
        const { message } = this.props
        return (
            <section className="popup-message fixed max-w-[250px] w-[100%] bg-[white] z-[1] max-h-[50px] h-[100%] rounded-md top-0 flex justify-center items-center right-[calc(50%-250px/2)]">
                {
                    message
                }
            </section>
        )
    }
}

export default PopupMessage