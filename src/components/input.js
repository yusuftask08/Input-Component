import React, { useState } from 'react'
import '../style/input.scss'
import PropTypes from 'prop-types'
import search from '../icons/search.svg'
import cancel from '../icons/cancel.svg'

const Input = ({
    label,
    placeholder,
    value,
    onChange,
    type,
    size,
    disabled,
    setValue,
}) => {
    const [isValue, setIsValue] = useState(false)

    const handleClearText = () => {
        setIsValue(false);
        setValue('');
    }
    return (
        <div className='input-container'>
            {
                label && <label className='label' htmlFor='input-field'> {label} </label>
            }
            <input
                className={`input input-${size} input-${disabled && 'disabled'}`}
                onChange={(event) => (onChange(event.target.value),setIsValue(true))}
                placeholder={placeholder}
                type={type}
                value={value}
                disabled={disabled}
            />
            {
                type == 'text' && 
                <div>
                    {
                        isValue ? 
                        <img className='input-icon' src={cancel} onClick={handleClearText} />
                        :
                        <img className='input-icon' src={search} />
                    }
                </div>
            }
        </div>
    )
}

Input.defaultProps = {
    type: 'text',
    disabled:false
}


Input.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    setValue:PropTypes.func
}

export default Input