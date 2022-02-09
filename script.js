$(document).ready(function(){
   /////////////////////////////
   //initializes css variables//
   /////////////////////////////
   $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-mini-pink-select-2021.png')");
   $(".div-case-img").css("background-image", "none");
   $(".div-accessory-img").css("background-image", "none");

   $("#13-mini-pink").css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"});
   $("#13-mini-pink").siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})
   $("#13-mini-pink").data("isActive",true);
   $("#13-mini-pink").siblings(".btn-color-selector").data("isActive",false);

   $("#no-case").css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"});
   $("#no-case").siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})
   $("#no-case").data("isActive",true);
   $("#no-case").siblings(".btn-color-selector").data("isActive",false);

   $("#no-accessory").css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"});
   $("#no-accessory").siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})
   $("#no-accessory").data("isActive",true);
   $("#no-accessory").siblings(".btn-color-selector").data("isActive",false);

   ///////////////
   //nav buttons//
   ///////////////
    $(".navigational-button").click(function(){
      switch($(this).attr('id')) {
         case('toCase'):
            $(".div-iphone-btn-container").hide();
            $(".div-case-btn-container").show();  
            break;

         case('toAccessory'):
            $(".div-case-btn-container").hide();
            $(".div-accessory-btn-container").show();  
            break;
         case('toStart'):
            $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-mini-pink-select-2021.png')");
            $(".div-case-img").css("background-image", "none");
            $(".div-accessory-img").css("background-image", "none");

            $("#13-mini-pink").css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"});
            $("#13-mini-pink").siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})
            $("#13-mini-pink").data("isActive",true);
            $("#13-mini-pink").siblings(".btn-color-selector").data("isActive",false);

            $("#no-case").css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"});
            $("#no-case").siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})
            $("#no-case").data("isActive",true);
            $("#no-case").siblings(".btn-color-selector").data("isActive",false);

            $("#no-accessory").css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"});
            $("#no-accessory").siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})
            $("#no-accessory").data("isActive",true);
            $("#no-accessory").siblings(".btn-color-selector").data("isActive",false);

            $(".div-accessory-btn-container").hide();
            $(".div-iphone-btn-container").show();
            break;
      }
    });

   ////////////////
   //button hover//
   ////////////////
      $(".btn-color-selector").hover(
      function(){
         //on MOUSEOVER, checks if the currently hovered button is active; if it isn't, it applies the proper hover classes
         //^ done to prevent active button from losing its active styling on mouse over
         if ($(this).data("isActive") == false) {
               switch($(this).attr('id')) {
                  case ('13-mini-pink'):
                  case ('13-pink'):
                     $(this).css({"background-color": "var(--iphone-color-pink)", "border": "solid 2px var(--iphone-color-pink)"})
                  break;
                  case ('13-mini-blue'):
                  case ('13-blue'):
                     $(this).css({"background-color": "var(--iphone-color-blue)", "border": "solid 2px var(--iphone-color-blue)"})
                  break;
                  case ('13-mini-midnight'):
                  case ('13-midnight'):
                     $(this).css({"background-color": "var(--iphone-color-midnight)", "border": "solid 2px var(--iphone-color-midnight)"})
                  break;
                  case ('13-mini-starlight'):
                  case ('13-starlight'):
                     $(this).css({"background-color": "var(--iphone-color-starlight)", "border": "solid 2px var(--iphone-color-starlight)"})
                  break;
                  case ('13-mini-product-red'):
                  case ('13-product-red'):
                     $(this).css({"background-color": "var(--iphone-color-product-red)", "border": "solid 2px var(--iphone-color-product-red)"})
                  break;
                  case ('13-pro-sierra-blue'):
                  case ('13-pro-max-sierra-blue'):
                     $(this).css({"background-color": "var(--iphone-color-sierra-blue)", "border": "solid 2px var(--iphone-color-sierra-blue)"})
                  break;
                  case ('13-pro-silver'):
                  case ('13-pro-max-silver'):
                        $(this).css({"background-color": "var(--iphone-color-silver)", "border": "solid 2px var(--iphone-color-silver)"})
                  break;
                  case ('13-pro-gold'):
                  case ('13-pro-max-gold'):
                     $(this).css({"background-color": "var(--iphone-color-gold)", "border": "solid 2px var(--iphone-color-gold)"})
                  break;
                  case ('13-pro-graphite'):
                  case ('13-pro-max-graphite'):
                     $(this).css({"background-color": "var(--iphone-color-graphite)", "border": "solid 2px var(--iphone-color-graphite)"})
                  break;
                  case ('marigold'):
                     $(this).css({"background-color": "var(--case-color-marigold)", "border": "solid 2px var(--case-color-marigold)"})
                  break;
                  case ('clover'):
                     $(this).css({"background-color": "var(--case-color-clover)", "border": "solid 2px var(--case-color-clover)"})
                  break;
         
               }    
         }
      },
      function() {
         //on MOUSEOUT, checks if the currently hovered button is active; if it isn't, it reverts button styling to default 
         //^ done to prevent active button from losing its active styling on mouse out
         if ($(this).data("isActive") == false) {
               $(this).css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})
         }
      }
   );

   ////////////////
   //button click//
   ////////////////
   $(".btn-color-selector").click(function(){
      //sets data attribute for clicked button to true; sets sibling data attribute to false
      $(this).data("isActive",true);
      $(this).siblings(".btn-color-selector").data("isActive",false);

      //sets clicked button and siblings' styling
      $(this).css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"})
      $(this).siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})

      //sets bg img based on button id
      switch($(this).attr('id')) {
         //iphone 13 mini group
            case ('13-mini-pink'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-mini-pink-select-2021.png')");
            break;
            case ('13-mini-blue'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-mini-blue-select-2021.png')");
            break;
            case ('13-mini-midnight'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-mini-midnight-select-2021.png')");
            break;
            case ('13-mini-starlight'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-mini-starlight-select-2021.png')");
            break;
            case ('13-mini-product-red'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-mini-product-red-select-2021.png')");
            break;
         //iphone 13 group
            case ('13-pink'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pink-select-2021.png')");
            break;
            case ('13-blue'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-blue-select-2021.png')");
            break;
            case ('13-midnight'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-midnight-select-2021.png')");
            break;
            case ('13-starlight'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-starlight-select-2021.png')");
            break;
            case ('13-product-red'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-product-red-select-2021.png')");
            break;
         //iphone 13 pro group
            case ('13-pro-sierra-blue'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pro-sierra-blue-select-2021.png')");
            break;
            case ('13-pro-silver'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pro-silver-select-2021.png')");
            break;
            case ('13-pro-gold'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pro-gold-select-2021.png')");
            break;
            case ('13-pro-graphite'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pro-graphite-select-2021.png')");
            break;
         //iphone 13 pro max group
            case ('13-pro-max-sierra-blue'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pro-max-sierra-blue-select-2021.png')");
            break;
            case ('13-pro-max-silver'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pro-max-silver-select-2021.png')");
            break;
            case ('13-pro-max-gold'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pro-max-gold-select-2021.png')");
            break;
            case ('13-pro-max-graphite'):
               $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-13-pro-max-graphite-select-2021.png')");
            break;
         //no case
            case ('no-case'):
               $(".div-case-img").css("background-image", "none");
            break
         //silicone cases
            case ('marigold'):
            case ('13-mini-pink'):
            case ('13-mini-blue'):
            case ('13-mini-midnight'):
            case ('13-mini-starlight'):
            case ('13-mini-product-red'):
               $(".div-case-img").css("background-image", "url('/img/img-case/13-mini-marigold.png')");
            break;
            case ('clover'):
            case ('13-mini-pink'):
            case ('13-mini-blue'):
            case ('13-mini-midnight'):
            case ('13-mini-starlight'):
            case ('13-mini-product-red'):
               $(".div-case-img").css("background-image", "url('/img/img-case/13-mini-clover.png')");
            break;
         }  
    });
  });