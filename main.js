function preload() {
    }
    
    function setup() {
    canvas = createCanvas(650,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    }
    
    function draw() {
    image(video,0,0,650,480);
    tint(tint_color); 
    fill(0, 255, 255);
    stroke(	0, 255, 255);
    rect(110,100,40);
    fill(0, 255, 255);
    stroke(	0, 255, 255);
    rect(510,100,40);
    fill(0, 255, 255);
    stroke(	0, 255, 255);
    rect(510,400,40);
    fill(0, 255, 255);
    stroke(	0, 255, 255);
    rect(110,400,40);


    image(video,0,0,650,480);
    tint(tint_color); 
    fill(0, 250, 255);
    stroke(	0, 250, 255);
    circle(110,100,20);
    fill(0, 250, 255);
    stroke(	0, 250, 255);
   circle(510,100,20);
    fill(0, 250, 255);
    stroke(	0, 250, 255);
    circle(510,400,20);
    fill(0, 250, 255);
    stroke(	0, 250, 255);
    circle(110,400,20);
    }

    function take_snapshot(){
        save('tinted_filter.png');
    }

    function filter_type(){
        tint_color = document.getElementById("name_of_color").value ;
    }