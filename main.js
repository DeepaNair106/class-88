var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function player_upadate() {
    fabric.Image.fromURL("player.png", function (Img) {

        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);

        player_object.set({

            top: player_y,
            left: player_x

        });

        canvas.add(player_object);

    });


}

function block_upadate(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {

        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

        block_object.set({

            top: player_y,
            left: player_x

        });

        canvas.add(block_object);

    });


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;

    if (e.shiftKey == true && keyPressed == '80') {

        block_width = block_width + 10;
        block_height = block_height + 10;

        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }


    if (e.shiftKey == true && keyPressed == '77') {

        block_width = block_width - 10;
        block_height = block_height - 10;

        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }

    if (keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
      down();
      console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right")  
    }

    if(keyPressed == '67'){
        block_upadate('cloud.jpg');
        console.log("C");
    }

    if (keyPressed == '68'){
        block_upadate('dark_green.png');
        console.log("D");
    }

    if(keyPressed == '71'){
        block_upadate('ground.png');
        console.log('g');
    }

    if(keyPressed == '76'){
        block_upadate('light_green.png');
        console.log('L');
    

    }

    if(keyPressed == '82'){
        block_upadate('roof.jpg');
        console.log('R');
    }

    if(keyPressed == '84'){
        block_upadate('trunk.jpg');
        console.log('T');
    }

    if(keyPressed == '85'){
        block_upadate('unique.png');
        console.log('U');
    }

    if (keyPressed == '87') {
        block_upadate('wall.jpg');
        console.log('W');
        
    }

    if (keyPressed == '89') {
        block_upadate('yellow_wall.png')
        console.log('Y');
        
    }



}

function up(){
    if(player_y >0){

        player_y = player_y-block_height;
        console.log("player_y:" + player_y);
        canvas.remove(player_object);
        player_upadate();
    }
}

function down(){
    if(player_y <=500){
        player_y=player_y + block_height;
        console.log("player_y:"+player_y);
        canvas.remove(player_object);
        player_upadate();
    }
}

function left(){
    if(player_x >0){
        player_x=player_x-block_width;
        console.log("player_x:"+ player_x);
        canvas.remove(player_object);
        player_upadate();
    }

}

function right(){
    if(player_x <=850){
        player_x=player_x+block_width;
        console.log("player_x:"+player_x);
        canvas.remove(player_object);
        player_upadate();
    }
}