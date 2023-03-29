var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function newImage() {
fabric.Image.fromURL("cartao.jpg", function(Img){
    blockImageObject = Img;
    blockImageObject.scaleToWidth(500);
    blockImageObject.scaleToHeight(450);
    blockImageObject.set({
        top:0,
        left:0

    });
    canvas.add(blockImageObject);
});

}

function playSound() {
x.play();
}