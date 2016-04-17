function nextQ(num){
    console.log("You clikced on " + num);
    var nextNum = num + 1;
    var nextID = "#" + nextNum;
    $('.question').hide();
    $(nextID).show();
}


$(document).ready(function() {

    $("#time-option-container input").change(function() {
        var selected = $(".time-option:checked").val();
        if (selected === "week") {
            $("#howoften-option-container  #opt1").show();
            $("#howoften-option-container  #opt2").show();
            $("#howoften-option-container  #opt3").hide();
        } else if (selected === "month") {
            $("#howoften-option-container  #opt1").show();
            $("#howoften-option-container  #opt2").show();
            $("#howoften-option-container  #opt3").show();
        } else {
            $("#howoften-option-container  #opt1").hide();
            $("#howoften-option-container  #opt2").hide();
            $("#howoften-option-container  #opt3").hide();
        }
    });

    // $('.form').find('input, textarea').on('keyup blur focus', function (e) {

    //   var $this = $(this),
    //       label = $this.prev('label');

    //     if (e.type === 'keyup') {
    //       if ($this.val() === '') {
    //           label.removeClass('active highlight');
    //         } else {
    //           label.addClass('active highlight');
    //         }
    //     } else if (e.type === 'blur') {
    //       if( $this.val() === '' ) {
    //         label.removeClass('active highlight'); 
    //       } else {
    //         label.removeClass('highlight');   
    //       }   
    //     } else if (e.type === 'focus') {

    //       if( $this.val() === '' ) {
    //         label.removeClass('highlight'); 
    //       } 
    //       else if( $this.val() !== '' ) {
    //         label.addClass('highlight');
    //       }
    //     }

    // });

    $('.tab a').on('click', function(e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });

   /* alert(val)
    


    var bar = new ProgressBar.Circle(sleep, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null,


    });
    
    
    bar.animate(0.9);

    var bar = new ProgressBar.Circle(stress, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null,


    }); 

    bar.animate(0.9); // Number from 0.0 to 1.0 */



    $()



});



// $('.form').find('input, textarea').on('keyup blur focus', function (e) {

//   var $this = $(this),
//       label = $this.prev('label');

//    if (e.type === 'keyup') {
//      if ($this.val() === '') {
//           label.removeClass('active highlight');
//         } else {
//           label.addClass('active highlight');
//         }
//     } else if (e.type === 'blur') {
//      if( $this.val() === '' ) {
//        label.removeClass('active highlight'); 
//      } else {
//        label.removeClass('highlight');   
//      }   
//     } else if (e.type === 'focus') {

//       if( $this.val() === '' ) {
//        label.removeClass('highlight'); 
//      } 
//       else if( $this.val() !== '' ) {
//        label.addClass('highlight');
//      }
//     }

// });

$('.tab a').on('click', function(e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});


