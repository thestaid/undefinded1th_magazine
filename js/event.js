/**********************/
/*  Search function   */
/**********************/
var keyword;
var searchBtn = $("#searchBtn");
var totalBtn = $("#totalBtn");

searchBtn.click(function() {
    keyword = $("#search").val();
    var evtItems = eventObj.items;
    var temp = [];

    filterItem(keyword);

    function filterItem(key) {
        //initialize item boxes
        for(var i=0; i<evtItems.length; i++) {
            $(".item-box:eq("+i+")").fadeOut();
        }
        //filtering
        for(var i=0; i<evtItems.length; i++) {
            var tempCategory = evtItems[i].category; // array
            // console.log(tempCategory);
            for(var j=0; j<tempCategory.length; j++){
                var cate = tempCategory[j];
                // console.log(cate);
                if(cate === key){
                    console.log(key);
                    $(".item-box:eq("+i+")").fadeIn();
                    // $(".item-box:eq("+i+")").show().animate({
                    //     display: "block"
                    // }, 1000);
                }
            }
        }
    }
});

totalBtn.click(function() {
    var evtItems = eventObj.items;
    // console.log(evtItems.length);

    //initialize item boxes
    for(var i=0; i<evtItems.length; i++) {
        $(".item-box:eq("+i+")").css("display", "none");
    }
    //Display all item boxes
    for(var i=0; i<evtItems.length; i++) {
        $(".item-box:eq("+i+")").css("display", "block");
    }
});


/**********************/
/* Event Modal popup  */
/**********************/

function setPopupBtn() {
    var evtObj = eventObj.items;

    for(var i=0; i<evtObj.length; i++){
        var idStr = "#item"+i+"_inputBtn";

        $(idStr).attr("data-index", i).click(function() {
            var self = this;
            // Index of current button
            var index = $(this).attr("data-index");

            // console.log(index);
            var curPrice, iptPrice;

        	curPrice = parseInt($(self).parent().parent().parent().find("#item"+index+"_curPrice").text()); //현재까지의 정해진 경매가
        	iptPrice = parseInt($(self).parent().parent().find("input").eq(0) .val()); //유저가 입력한 값
            console.log("현재값: "+curPrice+"입력값: " + iptPrice);
            // 유저가 입력한 가격을 현재 경매가로 반영
            if(curPrice < iptPrice){
        		//
                // console.log("반영될 값: "+$("#item"+index+"_curPrice").text(iptPrice));
                $("#item"+index+"_inputPrice").val("");
        		$(this).attr("data-dismiss","modal");
                $(this).parent().parent().find("#pop-up").addClass("sr-only");

                $(".item-box").eq(index).find(".item-price").html("<strong>￦ </strong>"+iptPrice);
                evtObj[index].curPrice = parseInt(iptPrice);

                // console.log(evtObj[index].curPrice);
                // console.log(evtObj[index].curPrice);
                // for(var i=0; i<evtObj.length; i++) {
                //     $(".item-box:eq("+i+")").css("display", "none");
                // }
                // eventObj.display();
                $("#item"+index+"_inputPrice").tooltip('hide');
                var conFlag =confirm("경매를 진행하시겠습니까?");
                if(conFlag){
                    // $(this).addAttr("data-dismiss","modal");
                    $("#item"+index+"_curPrice").text(iptPrice);
                    console.log(iptPrice);
                }else {
                    $(this).removeAttr("data-dismiss","modal");
                }
        	}
        	else{
        		$(this).removeAttr("data-dismiss","modal");
        		$(this).parent().parent().find("#pop-up").removeClass("sr-only");

                $("#item"+index+"_inputPrice").tooltip({
                    animation:true,
                    trigger: "manual",
                    placement: "top",
                    title: "현재가보다 높은 경매가를 입력하세요"
                });
                $("#item"+index+"_inputPrice").tooltip('show');
        	}
        });
    }

}

setPopupBtn();

// 수현 추가 START 161021

// MENUBTN START
$("#top-menu-icon").click(function(){
    $("#event-menuLowRank").toggleClass("menuLowRankActive");
});
// MENUBTN START

// 수현 추가 END 161021
