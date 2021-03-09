var mytemplate = `
<td class="border-0" style="{{monthTdStyle}}" {{monthTdAttribute}} data-td-month>
   <table class="table table-sm table-striped table-borderless">
<thead>
    <tr {{monthNameAttribute}}>
        <th colspan="100" class="border-0">
            <table class="table table-sm table-borderless">
                <thead>
                    <tr>
                        <th>
                            <button type="button" class="btn btn-light"> {{currentMonthInfo}} </button>
                        </th>
                    </tr>
                </thead>
            </table>
        </th>
    </tr>
    <tr {{theadSelectDateButtonTrAttribute}}>
        <td colspan="100" class="border-0">
            <table class="table table-sm table-borderless">
                <tr>                                                        
                    <th class='year-head'>
                        <button type="button" class="btn btn-light btn-sm" select-year-button {{selectYearButtonDisabledAttribute}}>{{selectedYear}}</button>
                    </th>
                    <th class='month-head'>
                        <button type="button" class="btn btn-light btn-sm">
                            {{selectedMonthName}}
                        </button>
                    </th>
                    <th class='next-month'>
                        <button type="button" class="btn btn-light btn-sm" title="{{nextMonthText}}" data-changedatebutton data-number="{{nextMonthButtonDateNumber}}" {{nextMonthButtonDisabledAttribute}}><span class="material-icons">keyboard_arrow_left</span></button>
                    </th>
                    <th class='prev-month'>
                        <button type="button" class="btn btn-light btn-sm" title="{{previousMonthText}}" data-changedatebutton data-number="{{previousMonthButtonDateNumber}}" {{previousMonthButtonDisabledAttribute}}><span class="material-icons">keyboard_arrow_right</span></button>
                    </th>

                </tr>
            </table>
        </td>
    </tr>
</thead>
<tbody class="days">
    <tr>
        <td class="{{weekDayShortName1CssClass}}">{{weekDayShortName1}}</td>
        <td>{{weekDayShortName2}}</td>
        <td>{{weekDayShortName3}}</td>
        <td>{{weekDayShortName4}}</td>
        <td>{{weekDayShortName5}}</td>
        <td>{{weekDayShortName6}}</td>
        <td class="{{weekDayShortName7CssClass}}">{{weekDayShortName7}}</td>
    </tr>
{{daysHtml}}
</tbody>
</table>
</td>
`;
let dp = $('.abs').MdPersianDateTimePicker({
    //targetTextSelector: '#inputDate1',
    //targetDateSelector: '#inputDate1-1',
    dateFormat: 'yyyy/MM/dd',
    textFormat: 'yyyy/MM/dd',
    setPopoverHeaderHtml: false,
    editeHtmlTemplate: true,
    htmlTemplate: mytemplate,
    previousDaysShow: false,
    nextDaysShow: false,
    isGregorian: false,
    enableTimePicker: true,
    disableBeforeToday: true,
    englishNumber: false,
    getWeekDayName: true,
    //specialDates: [new Date("2020-05-15"), new Date("2020-05-16"), new Date("2020-05-17")],
    // disabledDates: [new Date("2020-02-29"), new Date("2020-12-30")],
    // disabledDates: [1582934400, 1583020800, 1583366400],
    rangeSelector: true,
    disableAfterDate: new Date(2021, 12, 2),
    toDate: true,
    clear: 'Clear',
    selectDateText: 'انتخاب تاریخ',
    clearDateText: 'پاک کردن',
    selectedDaysFormat: '{0} شب',
    splitRangeInputs: true,
    rangeFromInput: '#inputDate1',
    rangeToInput: '#inputDate1-1',
    rangeFromHidden: '#fromDate',
    rangeToHidden: '#toDate'

});
//$('.abs').MdPersianDateTimePicker('setDays', new Date("2020-02-29"), 4);

$(document).ready(function () {

    $('body').click(function (event) {

        if ($(event.target).is('.abs input')) {
            $('.popover-boomgard').addClass('active');
            $('.date-in-out .mdc-floating-label').addClass('up-lbl');
        }

    });

    $('#inputDate1').focusin(function () {
        $('.popover-boomgard').removeClass('left-ps');
    });

    $('#inputDate1-1').focusin(function () {
        $('.popover-boomgard').addClass('left-ps');
    });


});


