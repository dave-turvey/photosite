var photosetID='72157623934603432';
var apiKey = '83579700317fd9a3baaadcf305b61c5b';
var url = "http://api.flickr.com/services/rest/?method=flickr.galleries.getList&api_key="+apiKey+"&user_id=30527111%40N05&format=json&jsoncallback=?";
var $imagesLoaded = false;

function getPhotoList(data,textStatus,jqXHR)
{
	var imglist="<ul>";
	var ptar = data.photoset.photo;
	for (var img in ptar) {

		imglist+= "<li><img src=\"http://farm"+ptar[img].farm+".staticflickr.com/"+ptar[img].server+"/"+ptar[img].id+"_"+ptar[img].secret+"_z.jpg\" width=99% height=99%></li>";
	}
	imglist+=$('#slider').html(imglist);
	$('#imageList').html("imglist");
	setUpSlider();
	$imagesLoaded = true;
	
}

function getGallery(data,textStatus,jqXHR)
{
	var url = "http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+apiKey+"&photoset_id="+photosetID+"&format=json&jsoncallback=?";
	$.getJSON(url,getPhotoList);
}



function changeSet(event)
{
    // if its the currently selected set then exit
    if($(this).hasClass('.setselectoractive'))
    {
        alert("Already active on menu");
        return;
    }
    $('.setselectoractive').addClass('setselector');
    $('.setselectoractive').removeClass('.setselectoractive');
    $(this).removeClass('setselector');
    $(this).addClass('setselectoractive');
    // Remove the current setselectoractive class
    photosetID=$(this).attr("data-href");
    $.getJSON(url,getGallery);    
}

$('.setselector').click(changeSet);
$('.setselectoractive').click(changeSet);
$.getJSON(url,getGallery);
