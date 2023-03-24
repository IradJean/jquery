$('document').ready(function(){
    // $(".newText").append("<p>life is simple jquery is better</p>")
    $('document').on('resize', function(){
        // $('.logo h1').html = 'Jq';
        console.log(document.body.clientWidth)
    })

    $('#firstButton').click(function(){
    const par = document.createElement('p');
    // alert('clicke me')
            par.innerHTML = `created a paragraph `;
            $('.main-container').append(par);
            // $('nav').hide();
    });
    $('#secondButton').on({
        // 'mouseover': () => {
        //     alert('mouser over');
        // },
        'click': () => {
  
             $('#firstButton').css(  
                'background', '#41f170')
        },
        // mouseenter: function(){
        //     alert('welcome kid!!')
        // },
        'dblclick': function(){
            alert('calmdown kid!!')
        },
        'mouseleave': function(){
            // alert('sad to see leave')
            $(this).css(
                {
                    'background': '#444eee'
                }
            )
        }
    })
    $('.newText').css({
        'box-shadow': '2px 2px 2px #202022',
        'border-radius': '8px'

    })
    $('.newText').on({
        'click': function(){
            // $(this).css('background', '#a10a10')
        },
        'mouseenter': function() {
            // alert('comeon')
            // $(this).append("<h1>mouse entered</h1>")
        },
        dblclick: function() {
            // $(this).html('Double clicked Me');
            const name = prompt('enter your Name: ');
            const content = document.createElement('h2');
            content.innerHTML = name;
            $(this).append(name);

        }
    })

    // toggleClass(), hide(), show()

    $('#toggleButton').on('click', function(){

        $('body').toggleClass('black');
        $('.newText').css({
            'box-shadow': '2px 2px 2px #fff'
    
        })
    })

    // fadeIn(), fadeOut(), fadeToggle()

    $('#fadeIn').on({
        click: function() {
            $('.newText p').fadeIn(2000, 'linear')
        }
    })
    $('#fadeOut').on('click', function() {
        $('.newText p').fadeOut('fast', function(){
            // alert('faded In')
        })
    })
    $('#fadeToggle').on('click', function(){
        $('.newText p').fadeToggle(2000, function(){

            const Text = document.createElement('h3');
            const arr = [1, 3, 4, 5, 7];
            const obj = {
                name: 'Jean',
                email: 'jado@examples.com',
                years: 22,
                favLan: 'Js'
            }
            Text.innerHTML = `clicked ${arr[0]} && ${obj['email']}` 
            // $('.newText').append(Text)
            
    })
    })

    // SlideUp(), slideDown(), slideToggle()

    $('.slideDown').on(
        {
            click: function() {

                $('.nextDiv p').slideDown('slow');
                $(this).hide();
                $('.slideUp').show();
            }
        }
    )
    $('.slideUp').on('click', () => {
        $('.nextDiv p').slideUp('fast');
        $('.slideUp').hide();
        $('.slideDown').show();


    })
    $('.slideToggle').on('click', function(){
        $('.nextDiv p').slideToggle(5000);

    })
    // toggle() 
    $('#toggleMe').click(function(){
        $('.toggle p').toggle(3000)
    })

    // animate()
    // grow animation
$('.animateGrow').click(function(){
    $('.animation p').animate({
        width: '95%',
    }, 3000)
})
// move, grow animation
$('.animateMove').click(function(){
    $('.animation p').animate({
        width: '95%',
        marginTop: '4rem',
    }, 3000)
})
//  increase fontSize animation
$('.animateBigger').click(function(){
    $('.animation p').animate({
        width: '95%',
        // marginTop: '4rem',
        fontSize: '20px'
    }, 3000)
})

// validating a form
$('#submit').click(function(e){
    // const userName = $(')
    // if()
    console.log(this)
    // alert(this.value)
    e.preventDefault();
    alert('submitted successfully')

    $('form').append('<h2>thank for submitting!</h2>')
    $('form').prepend('<h2>thank for submitting!</h2>')

})
// modifying content wrap()
$('#wrap').on({
    click: function(){
        $(".contentModification p:first").wrap("<div class=\"wrapin\"></div>");
      
    },
})
$('#empty').click(function(){
    $(".contentModification p:last").empty();
})
// we can modify things using many different ways: addClass(), removeClass(), replaceWith(), replaceAll(), etc
})

