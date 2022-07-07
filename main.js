var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id= "Selfie1";
        take_snapshot();
        speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    },5000);

    setTimeout(function(){
        img_id= "Selfie2";
        take_snapshot();
        speak_data = "Taking your next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    },10000);

    setTimeout(function(){
        img_id= "Selfie3";
        take_snapshot();
    },15000);



}

function take_snapshot()
{
  
    Webcam.snap(function(data_uri) {
    if(img_id=="Selfie1"){
        document.getElementById("result1").innerHTML='<img id="Selfie1" src="'+data_uri+'"/>';
    }

    if(img_id=="Selfie2"){
        document.getElementById("result2").innerHTML='<img id="Selfie2" src="'+data_uri+'"/>';
    }

    if(img_id=="Selfie3"){
        document.getElementById("result3").innerHTML='<img id="Selfie3" src="'+data_uri+'"/>';
    }

    });
}
