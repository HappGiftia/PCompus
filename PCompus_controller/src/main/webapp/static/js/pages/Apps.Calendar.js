$('.calendar').calendar();

//tiggered when year is chaned to previous
$('.calendar').on('jqyc.changeYearToPrevious', function (event) {
    var currentYear = $(this).find('.jqyc-change-year').data('year');
    console.log(currentYear);
});

//tiggered when year is chaned to next
$('.calendar').on('jqyc.changeYearToNext', function (event) {
    var currentYear = $(this).find('.jqyc-next-year').data('year');
    console.log(currentYear);
});

//tiggered when day is clicked
$('.calendar').on('jqyc.dayChoose', function (event) {
    var choosenYear = $(this).data('year');
    var choosenMonth = $(this).data('month');
    var choosenDay = $(this).data('day-of-month');
    var date = new Date(choosenYear, choosenMonth, choosenDay);
    console.log(date);
});

//tiggered when range is choosen (ONLY FOR MODE: RANGEPICKER)
$('.calendar').on('jqyc.rangeChoose', function (event) {
    var startChoosenYear = $(this).data('rangepicker-start-year');
    var startChoosenMonth = $(this).data('rangepicker-start-month');
    var startChoosenDay = $(this).data('rangepicker-start-day-of-month');
    var startDate = new Date(startChoosenYear, startChoosenMonth, startChoosenDay);
    console.log(startDate);

    var endChoosenYear = $(this).data('rangepicker-end-year');
    var endChoosenMonth = $(this).data('rangepicker-end-month');
    var endChoosenDay = $(this).data('rangepicker-end-day-of-month');
    var endDate = new Date(endChoosenYear, endChoosenMonth, endChoosenDay);
    console.log(endDate);
});
