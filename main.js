var SpeechRecognition=window.webkitSpeechRecognition
var recognition= new SpeechRecognition()

function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event)
    var Content= event.results[0][0].transcript
    document.getElementById("textbox").innerHTML= Content
    console.log(Content)
    if (Content=="take my selfie"){
        console.log("taking your selfie in 5 seconds")
        speak()
    }
   

}

function speak(){
    var synth= window.speechSynthesis
    //var speakdata= document.getElementById("textbox").value
    var speakdata= "taking your selfie in 5 seconds"
    var utterthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis) 
    Webcam.attach('#camera')
    setTimeout(function()
    {
        takesnapshot();
        save();
    },5000 
)
}

Webcam.set(
    {
        width: 360,
        height:250,
        image_format:'png',
        png_quality:90
    }
)

camera= document.getElementById("camera")

function takesnapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="selfie_image" src= "'+data_uri+'">';
    });
}

function save(){
    link=document.getElementById("link")
    img= document.getElementById("selfie_image").src
    link.href=img
    link.click()
}
