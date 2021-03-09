[].slice.call(document.querySelectorAll('.mdc-button')).forEach((ele) => mdc.ripple.MDCRipple.attachTo(ele));
[].slice.call(document.querySelectorAll('.mdc-text-field')).forEach((ele) => mdc.textField.MDCTextField.attachTo(ele));
[].slice.call(document.querySelectorAll('.mdc-select')).forEach((ele) => mdc.select.MDCSelect.attachTo(ele));
mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field.guest'));