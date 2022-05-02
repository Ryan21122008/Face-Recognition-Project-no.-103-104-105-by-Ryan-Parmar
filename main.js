Webcam.set({
    width:450,
    height:400,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("snapshot").innerHTML = "<img src='" + data_uri + "' id='photo'> ";
    });
}
console.log("ml5version = ", ml5.version);
var machinelink = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wWRkj1TNW/model.json", modelloaded);
function modelloaded(){      
    console.log("Model Loaded");
}