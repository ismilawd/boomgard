[].slice.call(document.querySelectorAll('.mdc-slider')).forEach((ele) => mdc.slider.MDCSlider.attachTo(ele));
[].slice.call(document.querySelectorAll('.mdc-button')).forEach((ele) => mdc.ripple.MDCRipple.attachTo(ele));
[].slice.call(document.querySelectorAll('.mdc-select')).forEach((ele) => mdc.select.MDCSelect.attachTo(ele));
[].slice.call(document.querySelectorAll('.mdc-text-field')).forEach((ele) => mdc.textField.MDCTextField.attachTo(ele));