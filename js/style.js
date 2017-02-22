/*************************/
/*  댓글 등록 부분          */
/*************************/

// Extract User Id, psw, comments
var userComment;
var userId;
var userPsw;
// Button for Enrolling comment from User
var userBtn = $("#user-comment-btn");

userBtn.click(function(){
    userComment = $("#user-comment-inputBox textarea").val();
    userId = $("#userId").val();
    userPsw = $("#userPsw").val();

    console.log(userId + " " + userComment + " " + userPsw);
    if(userId === ""){
        alert("아이디를 입력해주세요");
    }else if(userPsw === "") {
        alert("비밀번호를 입력해주세요");
    }else if(userComment === "") {
        alert("댓글을 입력해주세요");
    }else {
        var tempUser = new UserObj(userId, userPsw, userComment);
        tempUser.display();
    }
});



/*************************/
/*  네비 구현 부분          */
/*************************/
// 수현 추가 START 161021
var low_menTab = $("#low-menTab");
var low_womenTab = $("#low-womenTab");
var low_kidsTab = $("#low-kidsTab");
var low_interiorTab = $("#low-interiorTab");
// 수현 추가 END 161021

// 수현 추가 START 161021
// low Tab클릭에 의한 object 선택
low_menTab.click(function() {
    currentTab = menObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
low_womenTab.click(function() {
    currentTab = womenObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
low_kidsTab.click(function() {
    currentTab = kidsObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
low_interiorTab.click(function() {
    currentTab = interiorObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
// 수현 추가 END 161021

// 수현 추가 161021
$("#top-menu-icon").click(function(){
    $("#style-menuLowRank").toggleClass("style-menuLowRankActive");
    $("#styleMenuLowRank").toggleClass("style-styleMenuLowRankActive");
    $("#style-container").toggleClass("showbar", 500);
});




/*************************/
/*  동작 구현 부분          */
/*************************/

var currentTab = menObj;
var seasonIndex = 3;

var menTab = $("#menTab");
var womenTab = $("#womenTab");
var kidsTab = $("#kidsTab");
var interiorTab = $("#interiorTab");

// Current period; initial season index 3 (2016 FW)
var curPeriod = $("#curPeriod");
var prePeriodBtn = $("#prePeriodBtn");
var nextPreiodBtn = $("#nextPeriodBtn");


// Current style Image
var curImage = $("#style-image");
// Current style Image Description
var curDes = $("#style-imgDes");
// Editor's profile image array in current tab
var editorImages = $("#style-editor-box img");
var curEditorIndex = 0;
var curEditorName = $("#style-comment h4");
// Current comment from editor who choosed by user in current tab
var curComment = $("#style-comment p");

// Initial information display when user clicks style tab on index.html
// style.html 떳을 때 네비게이션의 men이 활성화 되어 있어야 함
displayStyleInfo(currentTab);

// Tab클릭에 의한 object 선택
menTab.click(function() {
    currentTab = menObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
womenTab.click(function() {
    currentTab = womenObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
kidsTab.click(function() {
    currentTab = kidsObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
interiorTab.click(function() {
    currentTab = interiorObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});

$("#low-menTab").click(function() {
    currentTab = menObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
$("#low-womenTab").click(function() {
    currentTab = womenObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
$("#low-kidsTab").click(function() {
    currentTab = kidsObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});
$("#low-interiorTab").click(function() {
    currentTab = interiorObj;
    // Initialize season: 2016 FW
    seasonIndex = 3;
    curEditorIndex =0;
    displayStyleInfo(currentTab);
});


// Change Season button Event
// style.css에서 현재 활성화 된 에디터의 이미지가 활성화되어야 함
prePeriodBtn.click(function() {
    // console.log(seasonIndex);
    if(seasonIndex <= 0){
        seasonIndex = 0;
        return;
    }
    seasonIndex = seasonIndex-1;
    curEditorIndex=0;
    displayStyleInfo(currentTab);
});
nextPreiodBtn.click(function() {
    // console.log(seasonIndex);
    if(seasonIndex>= currentTab.season.length-1){
        seasonIndex = currentTab.season.length-1;
        return;
    }
    seasonIndex = seasonIndex+1;
    curEditorIndex=0;
    displayStyleInfo(currentTab);
});

// Define editor's index by user's clicking editor's profile image
editorImages.click(function() {
    curEditorIndex = editorImages.index(this);
    // console.log(curEditorIndex);
    // console.log($(this));
    $(this).parent().addClass("image-selected").siblings().removeClass("image-selected");
    $(this).removeClass("gray-scale").parent().siblings().children().addClass("gray-scale");
    curImage.attr("src", currentTab.season[seasonIndex].imgURL[curEditorIndex]);
    curDes.html(currentTab.season[seasonIndex].imgDes[curEditorIndex]);
    curComment.html(currentTab.season[seasonIndex].comment[curEditorIndex]);
    curEditorName.text(profileObj.members[curEditorIndex].name + " 's comment");
});

function displayStyleInfo(obj) {
    // Define curObj including obj and seasonIndex
    var curObj = obj.season[seasonIndex];

    /*initialize*/
    // Text in current Season
    curPeriod.text(curObj.yearId + " " + curObj.period);
    // Display style Image
    curImage.attr("src", curObj.imgURL[curEditorIndex]);
    // Display description of style Image
    curDes.html(curObj.imgDes[curEditorIndex]);
    // Display editor's each image
    for(var i=0; i<editorImages.length; i++) {
        editorImages.eq(i).attr("src", curObj.profileURLs[i]);
    }
    // Initialize Selecting Editor
    editorImages.eq(0).parent().addClass("image-selected").siblings().removeClass("image-selected");
    editorImages.eq(0).removeClass("gray-scale").parent().siblings().children().addClass("gray-scale");
    // Each editor's name
    curEditorName.text(profileObj.members[curEditorIndex].name + " 's comment");
    // Each editor's comment
    curComment.html(curObj.comment[curEditorIndex]);
}

// 모바일인 경우 더보기 버튼 적용
var init_comment_height;
var cur_comment_height;
var windowWidth;
var moreFlag = false;

$(document).ready(function() {
    windowWidth = $(window).width();
    // cur_comment_height = curComment.height();
    checkMobileWidth(windowWidth);
});

$(window).resize(function() {
    windowWidth = $(window).width();
    // cur_comment_height = curComment.height();
    checkMobileWidth(windowWidth);
});

function checkMobileWidth(winWidth) {
    if(winWidth <= 768){
        curComment.height(120);
    } else if(winWidth <=992){
        curComment.height(165);
    } else if(winWidth <= 1200){
        curComment.height(242);
    } else {
        curComment.height(273);
    }

    showMoreCommentBtn(curComment.height());
}


function showMoreCommentBtn(commentHeight) {
    if(commentHeight === 120){
        // console.log(commentHeight);
        $("#more-comment-Btn").show();
    }else {
        // console.log("사라져");
        $("#more-comment-Btn").hide();
    }

    $("#more-comment-Btn").click(function() {
        if(moreFlag === false){
            curComment.css("height", "");
            // curComment.css("height", "350px").css("-webkit-transition", "height 1.35s ease");
            $(this).text("접기");
            moreFlag = true;
        }else {
            $(this).text("더보기");
            curComment.css("height", commentHeight);
            // curComment.animate({
            //     height: commentHeight+"px"
            // }, 500);
            moreFlag = false;
        }

    });
}
