export const createInput = (
  name,
  type,
  placeholder,
  value,
  options = null,
  validation = null
) => {
  return {
    type: type,
    placeholder: placeholder,
    value: value,
    name: name,
    options: options,
    validation: validation,
    valid: validation ? false : true,
    touched: false,
    dirty: false,
    wasInvalid: false
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return isValid;
  }
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.isEmail) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = re.test(String(value).toLowerCase()) && isValid;
  }

  return isValid;
};
