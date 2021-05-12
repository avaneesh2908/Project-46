class Security {
    constructor() {
        this.access1 = createInput("")
        this.access1.position(50,140);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(50,170);
        this.button1.style('background', 'lightgrey');

        this.hint1 = createButton('Hint');
        this.hint1.position(190,170);
        this.hint1.style('background', 'lightgrey');

        this.access2 = createInput("")
        this.access2.position(250,350);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(250,380);
        this.button2.style('background', 'lightgrey');

        this.hint2 = createButton('Hint');
        this.hint2.position(390,380);
        this.hint2.style('background', 'lightgrey');

        this.access3 = createInput("")
        this.access3.position(450,140);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(450,170);
        this.button3.style('background', 'lightgrey');

        this.hint3 = createButton('Hint');
        this.hint3.position(590,170);
        this.hint3.style('background', 'lightgrey');

        this.access4 = createInput("")
        this.access4.position(650,350);
        this.access4.style('background', 'white');

        this.button4 = createButton('Check');
        this.button4.position(650,380);
        this.button4.style('background', 'lightgrey');
        
        this.hint4 = createButton('Hint');
        this.hint4.position(790,380);
        this.hint4.style('background', 'lightgrey');

        this.access5 = createInput("")
        this.access5.position(850,140);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(850,170);
        this.button5.style('background', 'lightgrey');

        this.hint5 = createButton('Hint');
        this.hint5.position(990,170);
        this.hint5.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button        
    }
    display() {
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                this.hint1.hide();
                score=score+10;
            }
        });
        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                this.hint2.hide();
                score=score+10;
            }
        });
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                this.hint3.hide();
                score=score+10;
            }
        });
        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                this.hint4.hide();
                score=score+10;
            }
        });
        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                this.hint5.hide();
                score=score+10;
            }
        });
        this.hint1.mousePressed(() => {
            this.text1 = createElement('h2');
            this.text1.html('Hint: L O E T W');
            this.text1.position(150,150);
            this.hint1.hide();
        })
        this.hint2.mousePressed(() => {
            this.text2 = createElement('h2');
            this.text2.html('Hint: I I T D C Y N R O A');
            this.text2.position(330,360);
            this.hint2.hide();
        })
        this.hint3.mousePressed(() => {
            this.text3 = createElement('h2');
            this.text3.html('Hint: R L B R Y I A');
            this.text3.position(550,150);
            this.hint3.hide();
        })
        this.hint4.mousePressed(() => {
            this.text4 = createElement('h2');
            this.text4.html('Hint: O E N E E V P L');
            this.text4.position(760,360);
            this.hint4.hide();
        })
        this.hint5.mousePressed(() => {
            this.text5 = createElement('h2');
            this.text5.html('Hint: E S L C E I N');
            this.text5.position(950,150);
            this.hint5.hide();
        })
//add code for what happens when the third button is pressed
    }
}