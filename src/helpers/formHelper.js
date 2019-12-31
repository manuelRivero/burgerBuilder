
export const createInput= (name, type, placeholder, value, options=null) =>{
    return (
        {
            type: type,
            placeholder: placeholder,
            value: value,
            name:name,
            options: options
        }
    )
}

