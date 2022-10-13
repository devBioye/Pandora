var title = [ "Doctor Strange", "Good Intention", "Encanto"];
var image = ["doctor strange.jpg')", "Good Intention.jpg')", "Encanto.jpg')"];
var index = 0;
window.onload = function() {
    setInterval(slider, 3000);

    

}
var i = 0;
function slider(){
    
    var first = "url('images/";
  document.getElementById("a").style.backgroundImage = first+image[i];
  document.getElementById("title").innerHTML = title[i];
   i++;
   if(i == image.length){
    i = 0;
   }
}
function downloadSection(){
    //document.getElementById("body_div_id").innerHTML = "";
    //alert('working');
    //alert(localStorage.getItem("video"));
    document.getElementById('videoId').src = localStorage.getItem("video");
    //alert(document.getElementById('videoId').src);
}
function downloadLink(videoLink){
    localStorage.setItem("video", videoLink);
}
