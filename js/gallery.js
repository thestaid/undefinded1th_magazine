var temp = "<div data-toggle='modal' data-target='#item_{index}' class='brick' style='width:{width}px;'><img src='./images/gallery/{index}.jpg' width='100%'></div>";

var tempModal =  "<div id='item_{index}' data-index='{index}' class='modal fade'> <div class='modal-dialog modal-fullsize' style='width:100%;'><div style='text-align:center; height:100vh;'class='modal-content'><span style='color:white; position:absolute; z-index:100;right:0; top:0; font-size:30px;' class='glyphicon glyphicon-remove' data-dismiss='modal'></span><div class='gallery-preBtn' style='float:left'><span class='glyphicon glyphicon-chevron-left' style='color:white; font-size:50px; padding-top:calc((100vh - 61px)/2);'></span></div><img style='height:calc((100vh - 50px));' src='./images/gallery/{index}.jpg'><div class='gallery-nextBtn' style='float:right;'><span class='glyphicon glyphicon-chevron-right' style='color:white; font-size:50px; clear:right; padding-top:calc((100vh - 61px)/2)'></span></div></div></div></div>"

var w = 1, h = 1, html = '', htmlModal='', limitItem = 40;
for (var i = 0; i < limitItem; ++i) {
	w = 1 + 3 * Math.random() << 0;
	html += temp.replace(/\{width\}/g, w*150).replace(/\{index\}/g, i).replace("{index}", i);
	htmlModal += tempModal.replace(/\{index\}/g, i).replace("{index}", i);
}
html = html + htmlModal;
$("#freewall").html(html);

var wall = new Freewall("#freewall");
wall.reset({
	selector: '.brick',
	animate: true,
	cellW: 150,
	cellH: 'auto',
	onResize: function() {
		wall.fitWidth();
	}
});
var images = wall.container.find('.brick');

images.find('img').on('load', function() {
	wall.fitWidth();
});

var curIndex;
var index; // 처음 누른 현재의 팝업창 index
var isStarted = false;

$(".gallery-preBtn").click(function() {

	if(isStarted === false) {
		var divTag = $(this).parent().parent().parent();
		index = $(this).parent().parent().parent().attr("data-index");
		console.log(typeof index);
		divTag.find('img').attr("src", "./images/gallery/"+parseInt(index-1)+".jpg");
		isStarted = true;
		curIndex = index - 1;
	} else {
		curIndex--;

		if(curIndex <=0){
			curIndex = 0;
			$("#item_"+curIndex+" img").attr("src","./images/gallery/"+curIndex+".jpg");
			console.log(curIndex);
		}else {
			$(this).parent().parent().parent().find('img').attr("src","./images/gallery/"+curIndex+".jpg");
			console.log(curIndex);
		}

	}

});
$(".gallery-nextBtn").click(function() {
	console.log(curIndex);
	if(isStarted === false) {
		var divTag = $(this).parent().parent().parent();
		index = $(this).parent().parent().parent().attr("data-index");
		console.log(typeof index);
		divTag.find('img').attr("src", "./images/gallery/"+parseInt(index+1)+".jpg");
		isStarted = true;
		curIndex = index + 1;
	} else {
		curIndex++;

		if(curIndex >=limitItem-1){
			curIndex = limitItem-1;
			$("#item_"+curIndex+" img").attr("src","./images/gallery/"+curIndex+".jpg");
			console.log(curIndex);
		}else {
			$(this).parent().parent().parent().find('img').attr("src","./images/gallery/"+curIndex+".jpg");
			console.log(curIndex);
		}

	}

});
