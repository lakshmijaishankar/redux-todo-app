import React, { PureComponent } from 'react'

class Input extends PureComponent {

    render() {
        const { className, type, name, onChange, value, ...rest } = this.props
        // console.log(rest)
        return (
            <input
                type={type}
                className={className}
                name={name}
                onChange={onChange}
                value={value}
                {...rest}
            />
        )
    }
}

export default Input