$(document).ready(function(){
    
    // RECOMMEND MAX MARGIN 20PX IF YOU WANT MORE SPACE BETWEEN ITEMS --
    // -- MAKE FEWER SLIDE ITEMS  
    var itemwidth = 150;
    var margin = 10;
    var item = 4;
   // var mainareacount = haha2 + margin*haha;
   var areaelem = $(".team-area");
    if (margin != 0 ) {
        if(item == 1){
            itemwidth = 1000;
        }
        else if(item == 2){
            itemwidth = 480;
        }
        if(item == 3){
            itemwidth = 315;
        }
        if(item == 4){
            itemwidth = 230;
        }
        if(item == 5){
            itemwidth = 145;
        }
        if(item == 6){
            itemwidth = 120;
        }
        if(item == 7){
            itemwidth = 90;
        }
        if(item == 8){
            itemwidth = 60;
        }
        if(item == 9){
            itemwidth = 120;
        }
         var lentcount = itemwidth*item;
         var addcount = item*2;
         var marcount = addcount * margin; 
         // THİS COUNT "\/300\/" 
         // IS FROM CSS PADDING (team-area) CLASS
         // IF YOU WANT CHANGE IT 
         // CHANCE FROM CSS AND HERE DOWN \/
         var extpadding = 300;
         var endcount =  marcount + lentcount + extpadding; 
          areaelem.css({
            maxWidth: endcount + "px"
        })
        console.log(marcount)
        console.log(addcount)
        console.log(lentcount)
          // console.log(wow+300)
        
    }
    else if(margin === 0 ){
        if(item == 1){
            itemwidth = 1000;
        }
        else if(item == 2){
            itemwidth = 475;
        }
        if(item == 3){
            itemwidth = 315;
        }
        if(item == 4){
            itemwidth = 230;
        }
        if(item == 5){
            itemwidth = 145;
        }
        if(item == 6){
            itemwidth = 120;
        }
        if(item == 7){
            itemwidth = 90;
        }
        if(item == 8){
            itemwidth = 60;
        }
        if(item == 9){
            itemwidth = 120;
        }
    } 

    // console.log(mainareacount)
    // console.log(areacount)  
    // areawidth.css("width",)
    var Left = itemwidth + margin*2;
    var maincount = itemwidth + margin*2;
    var items = $(".items");
    for(i = 0 ; i < items.length; i++ ){
        var lists = $(".items")[i];
       lists.classList.add("myitem" + i)
    }
    var itmswidth = $(".itemarea").innerWidth();
    // console.log(itmswidth/items.length)
    $(".items").css({
        width:itemwidth,
        marginLeft:margin,
        marginRight:margin,
        left:"-" + Left + "px"
    });
    var heightcount = $(".items").innerHeight()
    var allcount = maincount * items.length;
    $(".all-items").css({
    })

    $(".prev").on("click",function(){

         var prevscount2 = itemwidth + margin;
        
        $(".all-items").animate({
            left:prevscount2 + "px"
        },500,function(){
            $(".all-items .items:last").insertBefore(".all-items .items:first")
            $(".all-items").css("left","0px")
        });
    }) 
    $(".next").on("click",function(){
       var  prevscount1 = itemwidth + margin;
        $(".all-items").animate({
            left:"-" + prevscount1 + "px"
        },500,function(){
            $(".all-items .items:first").insertAfter(".all-items .items:last")        
            $(".all-items").css("left","0px")
        });

    }) 
    
})