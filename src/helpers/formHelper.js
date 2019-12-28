
export const createInput= (name, type, placeholder, value) =>{
    return (
        {
            type: type,
            placeholder: placeholder,
            value: value,
            name:name
        }
    )
}

