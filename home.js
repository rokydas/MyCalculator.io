
    set = false;

    document.querySelectorAll(".key")[0].addEventListener("click",function (){
        //alert("hello");
        document.querySelector(".input").value='';
        //console.log(eval('2 + 2 * 8 - 9 / 2'));
    });

    document.querySelectorAll(".key")[9].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("1");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[10].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("2");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[11].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("3");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[6].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("4");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[7].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("5");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[8].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("6");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[3].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("7");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[4].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("8");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[5].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("9");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[12].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("0");
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    document.querySelectorAll(".key")[13].addEventListener("click",function (){
        if(!set)
        {
            text = document.querySelector(".input").value;
            text = text.concat(".");
            //console.log(text);
            document.querySelector(".input").value = text;
            set = true;
        }
        
    });

    document.querySelectorAll(".key")[14].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        if(text.charAt(text.length-1) == ".") set = false;
        if(text.charAt(text.length-1) == "+" || text.charAt(text.length-1) == "-" || text.charAt(text.length-1) == "X" || text.charAt(text.length-1) == "/")
        {
            for(i = text.length-2; i>=0; i--)
            {
                if(text.charAt(i) == "+" || text.charAt(i) == "-" || text.charAt(i) == "X" || text.charAt(i) == "/")
                {
                    set = false;
                    break;
                }
                if(text.charAt(i) == '.')
                {
                    set = true;
                    break;
                }
            }
        }
        text = text.substring(0, text.length - 1);
        //console.log(text);
        document.querySelector(".input").value = text;
    });

    //sign

    document.querySelectorAll(".sign")[0].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("/");
        //console.log(text);
        document.querySelector(".input").value = text;
        set = false;
    });

    document.querySelectorAll(".sign")[1].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("x");
        //console.log(text);
        document.querySelector(".input").value = text;
        set = false;
    });

    document.querySelectorAll(".sign")[2].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("-");
        //console.log(text);
        document.querySelector(".input").value = text;
        set = false;
    });

    document.querySelectorAll(".sign")[3].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.concat("+");
        //console.log(text);
        document.querySelector(".input").value = text;
        set = false;
    });

    document.querySelectorAll(".sign")[4].addEventListener("click",function (){
        text = document.querySelector(".input").value;
        text = text.replace("x", "*");
        text = eval(text);
        document.querySelector(".input").value = text;
        set = false;
    });

