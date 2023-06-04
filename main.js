var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML= content;
    speech();
}
if (content == "take my selfie") {
    console.log("Taking Selfie");
speech();
}

function speech() {
    var synth = window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    
    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality: 90
})
camera=document.getElementById("webcam");

function take_snapshot() {
webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
});
}

function save() {
    link=document.getElementById("link");
    image=document.getElementById("logo_img").src;
    link.href=image;
    link.click();
}
