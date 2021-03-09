[].slice.call(document.querySelectorAll('.mdc-button')).forEach((ele) => mdc.ripple.MDCRipple.attachTo(ele));
[].slice.call(document.querySelectorAll('.mdc-text-field')).forEach((ele) => mdc.textField.MDCTextField.attachTo(ele));
