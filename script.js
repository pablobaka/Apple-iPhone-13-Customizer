$(document).ready(function(){
   /////////////////////////////
   //initializes css variables//
   /////////////////////////////
   var currentPhoneModel = "13-mini";
   var currentElement = "";

   function initializeCSS() {
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
   }

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
            $(".div-accessory-btn-container").hide();

            currentPhoneModel = "13-mini";
            currentElement = "";

            initializeCSS();

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
                  case ('chalk-pink'):
                     $(this).css({"background-color": "var(--case-color-chalk-pink)", "border": "solid 2px var(--case-color-chalk-pink)"})
                  break;
                  case ('abyss-blue'):
                     $(this).css({"background-color": "var(--case-color-abyss-blue)", "border": "solid 2px var(--case-color-abyss-blue)"})
                  break;
                  case ('pink-pomelo'):
                     $(this).css({"background-color": "var(--case-color-pink-pomelo)", "border": "solid 2px var(--case-color-pink-pomelo)"})
                  break;
                  case ('midnight'):
                     $(this).css({"background-color": "var(--case-color-midnight)", "border": "solid 2px var(--case-color-midnight)"})
                  break;
                  case ('blue-jay'):
                     $(this).css({"background-color": "var(--case-color-blue-jay)", "border": "solid 2px var(--case-color-blue-jay)"})
                  break;
                  case ('product-red'):
                     $(this).css({"background-color": "var(--case-color-product-red)", "border": "solid 2px var(--case-color-product-red)"})
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
      //stores clicked button in currentElement variable to use with if statements
      currentElement = $(this);

      //sets data attribute for clicked button to true; sets sibling data attribute to false
      $(this).data("isActive",true);
      $(this).siblings(".btn-color-selector").data("isActive",false);

      //sets clicked button and siblings' styling
      $(this).css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"})
      $(this).siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})

      //checks what type of button is currently being clicked - phone, case, or accessory
      if (currentElement.hasClass('btn-color-selector-phone')) {
            //checks id of button clicked and sets currentPhoneModel variable accordingly
            if ($(this).attr('id').indexOf('13-mini-') > -1) {
                  currentPhoneModel = "13-mini"
            }
            else if ($(this).attr('id').indexOf('13-pro-max-') > -1) {
                  currentPhoneModel = "13-pro-max"
            }
            else if ($(this).attr('id').indexOf('13-pro-') > -1) {
                  currentPhoneModel = "13-pro"
            }
            else {
                  currentPhoneModel = "13"
            }

            //sets phone background image according to currentElement id
            $(".div-iphone-img").css("background-image", "url('/img/img-iphone/iphone-" + currentElement.attr('id') + "-select-2021.png')");
      }

      else if (currentElement.hasClass('btn-color-selector-case')) {
            //checks if the no-case button is clicked
            if ($(this).attr('id').indexOf('no-case') > -1) {
               $(".div-case-img").css("background-image", "none");
            }
            else {
               //sets case background image according to currentElement id and currentPhoneModel id
               $(".div-case-img").css("background-image", "url('/img/img-case/" + currentPhoneModel + "-" + currentElement.attr('id') + ".png')");
            }
      }
      else {
            //checks if the no-accessory button is clicked
            if ($(this).attr('id').indexOf('no-accessory') > -1) {
               $(".div-accessory-img").css("background-image", "none");
            }
            else {
               //sets accessory background image according to currentElement id and currentPhoneModel id
               $(".div-accessory-img").css("background-image", "url('/img/img-accessory/" + currentPhoneModel + "-" + currentElement.attr('id') + ".png')");
            }
      }
      console.log(currentElement.attr('id'));
      console.log(currentPhoneModel);
    });
  });