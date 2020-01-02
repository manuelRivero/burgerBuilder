
export const createInput= (name, type, placeholder, value, options=null, validation=null ) =>{
    return (
        {
            type: type,
            placeholder: placeholder,
            value: value,
            name:name,
            options: options,
            validation: validation,
            valid: false,
            touched: false,
            dirty: false,
            wasInvalid:false
        }
    )
}

