$(document).ready(function(){
    //initializes css sand variables to default to iphone 13 mini in pink
    $("#13-mini-pink").css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"});
    $("#13-mini-pink").data("isActive",true);
    $("#13-mini-pink").siblings(".btn-color-selector").data("isActive",false);

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
                }    
            }
        },

        function() {
            //on MOUSEOUT, checks if the currently hovered button is active; if it isn't, it reverts button styling to default 
            //^ done to prevent active button from losing its active styling on mouse out
            if ($(this).data("isActive") == false) {
                console.log($(this).data("isActive"));
                $(this).css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})
            }
        }
    );


    $(".btn-color-selector").click(function(){
        console.log($(this).attr('id'));

        //sets data attribute for clicked button to true; sets sibling data attribute to false
        $(this).data("isActive",true);
        $(this).siblings(".btn-color-selector").data("isActive",false);

        //sets clicked button and siblings' styling
        $(this).css({"background-color": "var(--btn-color-selector-grey)", "border": "solid 2px var(--btn-color-selector-grey)"})
        $(this).siblings(".btn-color-selector").css({"background-color": "white", "border": "solid 2px var(--btn-color-selector-grey)"})

        //sets iphone bg img based on button id
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

           }  
    });
  });