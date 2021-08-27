// ------------------------- code cua Son -------------------------------

//  --------- loading ----------
$(document).ready(function() {
    $('#loading').delay(100).fadeOut()
});


// ----------------- focus toggler --------------------
$('.header-navbar .navbar-toggler').click(function() {
    if ($('.header-navbar .navbar-collapse').hasClass('show')) {
        $('.header-navbar ').css({
            'background': 'rgb(0 0 0 / 0)'
        });
    } else {
        $('.header-navbar ').css({
            'background': 'rgb(0 0 0 / 88%)'
        });
    }
});


// ----------- scroll-nav -----------
$(window).scroll(function() {

    if ($(window).scrollTop() > 120) {
        $('.header-navbar ').css({
            'background': 'rgb(0 0 0 / 88%)'
        });

    } else {
        if ($('.header-navbar .navbar-collapse').hasClass('show')) {
            $('.header-navbar ').css({
                'background': 'rgba(0, 0, 0, 0.88)'
            });
        } else {
            $('.header-navbar ').css({
                'background': 'rgba(0, 0, 0, 0)'
            });
        }

    }
});

// -- -- -- -- -- - focus cart-- -- -- -- -- -
$('#product .order-book>button.btn').focus(function() {
    $('#product .daddy-order').css({ 'display': 'block' })
});


// ----------- product-btn-focus -------------
$('#product .order-book .type .btn').focus(function() {
    $('#product .order-book .type .btn').css({ 'box-shadow': 'unset', 'background': '#1396ffd4' });
    $(this).css({ 'box-shadow': '0 0 17px 2px #c5c0ad ', 'background': ' #71ca5bd4' });
});

// ------------------- log-in -------------------
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('log-in');

$('#signUp').click(function() {
    container.classList.add("right-panel-active");
});

$('#signIn').click(function() {
    container.classList.remove("right-panel-active");
});

// ------------------- book shop ----------------------
$('.list-3 .nav-button .nav-tabs .nav-link').focus(function() {
        console.log('ngu')
        $('.list-3 .nav-button .nav-tabs .nav-link').removeClass('active')
        $(this).addClass('active')
        $('.list-3 .container .list-3-book').removeClass('active')
        if ($(this).hasClass('book-all')) {
            $('.row-1 .name-left .section-name').text('All Library Book')
            $('.list-3 .container .all-lib').addClass('active')
        } else if ($(this).hasClass('book-asia')) {
            $('.row-1 .name-left .section-name').text('Asian Library Book')
            $('.list-3 .container .asia-lib').addClass('active')
        } else if ($(this).hasClass('book-europe')) {
            $('.row-1 .name-left .section-name').text('Europe Library Book')
            $('.list-3 .container .europe-lib').addClass('active')
        } else if ($(this).hasClass('book-africa')) {
            $('.row-1 .name-left .section-name').text('Africa Library Book')
            $('.list-3 .container .africa-lib').addClass('active')
        } else {
            $('.row-1 .name-left .section-name').text('America Library Book')
            $('.list-3 .container .america-lib').addClass('active')
        }
    })
    // --------------------  thank you ------------------------
    // $("#form-check-out").bind('ajax:complete', function() {
    //     $(document).ready(function() {
    //         $("#form-check-out").submit(function() {
    //             $.ajax({
    //                 type: "POST",
    //                 url: "form_handler.php",
    //                 data: $(this).serialize(),
    //                 success: function() {
    //                     // callback code here
    //                     $('#model').css({ 'display': 'block' })

//                 }
//             })

//         })
//     })

// }); 
$("#form-check-out").submit(function(event) {
    event.preventDefault();
    $('#model').css({ 'display': 'block' })
});
$('#check-out .btn').click(function() {
    if ($('#check-out input[type=text], #check-out input[type=email]').val() != '') {

    }
})
$('#model .model-close').click(function() {
        $('#model').css({ 'display': 'none' })

    })
    // ========================== end code cua Sơn =============================