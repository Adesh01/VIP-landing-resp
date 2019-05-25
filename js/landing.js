 $(document).ready(function(){

                  /*----CTA moving to fixed on scroll----
                   window.onscroll = function() {
                        
                        if (window.pageYOffset >= 550) { //black bar on top
                              $('.black-stripe').css({position: 'fixed', top: '0%', width:'100%', display: 'block','z-index':'999','background-color':'rgba(0,0,0,1)'});
                         }
                        if (window.pageYOffset < 550) { // regular header
                              $('.black-stripe').css({position: 'relative'});
                          }
                   }*/


                  /*-- Faded Artist images--*/
                    $('#fade1 .sec1:gt(0)').css({'opacity':'0'});//hide but the first one
                    $('#fade2 .sec2:gt(0)').css({'opacity':'0'});//hide but the first one
                    $('#fade3 .sec3:gt(0)').css({'opacity':'0'});//hide but the first one
                    $('#fade4 .sec4:gt(0)').css({'opacity':'0'});//hide but the first one 
                    $('.module2 .quote1:gt(0)').css({'opacity':'0'});

                    function slide_fade() {
                        $('#fade1 .sec1:eq(1)').delay(0).animate({'opacity':'1'}, 1000, null);
                        $('#fade2 .sec2:eq(1)').delay(2000).animate({'opacity':'1'}, 1000, null);
                        $('#fade3 .sec3:eq(1)').delay(4000).animate({'opacity':'1'}, 1000, null);
                        $('#fade4 .sec4:eq(1)').delay(6000).animate({'opacity':'1'}, 1000, sl_shuffle);
                    }
                    
                    function sl_shuffle() {
                        $('#fade1 .sec1:eq(0)').css({'opacity':'0'}).appendTo('#fade1');
                        $('#fade2 .sec2:eq(0)').css({'opacity':'0'}).appendTo('#fade2');
                        $('#fade3 .sec3:eq(0)').css({'opacity':'0'}).appendTo('#fade3');
                        $('#fade4 .sec4:eq(0)').css({'opacity':'0'}).appendTo('#fade4');

                        slide_fade();  //keep the party going
                    }  

                    // function call
                    slide_fade();  //start the party


                    function quote_fade() {
                        $('.module2 .quote1:eq(1)').delay(5000).animate({'opacity':'1'}, 70, qu_shuffle);
                    }
                    function qu_shuffle() {
                        $('.module2 .quote1:eq(0)').css({'opacity':'0'}).appendTo('.module2');

                         quote_fade();
                      }
                    quote_fade(); 
        });