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
function result(){
    var img = document.getElementById("photo");
    machinelink.classify(img, getphoto);
}
function getphoto(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectdisplay").innerHTML = results[0].label;
        document.getElementById("accuracydisplay").innerHTML = (results[0].confidence*100).toFixed(2) + " %";
    }
}