

let kutular = document.querySelectorAll(".kutular");
let sira = document.getElementById("sira");
let kazanan = "";
let oyuncu = "x";
let oyunBitti = 0;
let sifirlaBtn = document.getElementById("sifirla")
let oyunAlani = ["","","","","","","","",""]
let sayac = 0;
let beraberlik = 0;
let oyuncular=["",""];
let startBtn = document.getElementById("start");
let oyuncusirasi = 0;
let gameover = document.getElementById("gameover");
document.getElementById("oyun-alani").style.display="none"
document.getElementById("sira").style.display = "none"

gameover.style.display = "none";
startBtn.addEventListener("click",function(){
    oyuncular[0] = document.getElementById("oyuncu1").value;
    oyuncular[1] = document.getElementById("oyuncu2").value;
    console.log("oyuncu1:"+oyuncular[0])
    console.log("oyuncu2:"+oyuncular[1])
    if(oyuncular[0] != "" && oyuncular[1] != "" && oyuncular[1].length > 2 && oyuncular[1].length < 11 && oyuncular[0].length > 2 && oyuncular[0].length < 10 ){
        document.getElementById("oyun-alani").style.display="grid"
        document.getElementById("sira").style.display = "block"
        console.log("selam");
        startBtn.style.display = "none"
        document.getElementById("oyuncu1").style.display="none";
        document.getElementById("oyuncu2").style.display="none";
        document.querySelectorAll("#oyuncuisim")[0].style.display = "none";
        document.querySelectorAll("#oyuncuisim")[1].style.display = "none";
        sira.innerHTML = "oyuncu sırası " + oyuncular[oyuncusirasi]+"("+oyuncu+")";
        
    }else{
        sira.style.display = "flex"
        sira.innerHTML = "isim minimum 3 maximum 10 haneli olmalıdır "
        
    }


})



sira.innerHTML = "oyuncu sırası " + oyuncular[oyuncusirasi]+"("+oyuncu+")";


   



    kutular.forEach(function(kutu, index) {

       
        kutu.addEventListener("click", function() {
            if(kazanan == ""){

                
               

                controller(index);
                
                console.log("Tıklanan Kutu index:", index, "İçerik:", kutu.textContent);
                




            }
        });
    
        
    });


    function controller(fullenss){
        if(kutular[fullenss].textContent == ""){
            oyunAlani[fullenss] = oyuncu;
             kutular[fullenss].innerHTML = oyuncu;

             for(let i = 0;i<9;i++){
                console.log("sıra numarası "+i+" olan değerin içi = "+oyunAlani[i]);


             }



            if(oyuncu == "x"){
                draw(fullenss)
                win(fullenss)
                oyuncu = "o";
                oyuncusirasi = 1;
              

            }else{
                draw(fullenss)
                win(fullenss)
                oyuncu = "x";
                oyuncusirasi = 0;
              

            }
            sira.innerHTML = "oyuncu sırası " + oyuncular[oyuncusirasi]+"("+oyuncu+")";


          
        }
    }

        function win(fullenss){
        let winplayer  = kutular[fullenss].textContent;
            for(let i = 0; i < 3; i++){
                if(kutular[fullenss].textContent == oyunAlani[i]){
                    sayac+=1;

                }else{
                    sayac = 0;
                    break;
                }


            }
            if(sayac == 3){
                sira.style.display="none";
                gameover.style.display = "flex"

                kazanan = oyuncu
                document.getElementById("sira").innerHTML = "OYUN BİTTİ";
                document.getElementById("kazanan").innerHTML = "kazanan kişi "+oyuncular[oyuncusirasi];
                sifirlaBtn.style.display = "flex";
                console.log(kazanan);
            }
//___________________________________________________________
            for(let i = 3; i < 6; i++){
                if(kutular[fullenss].textContent == oyunAlani[i]){
                    sayac+=1;

                }else{
                    sayac = 0;
                    break;
                }


            }
            if(sayac == 3){
                sira.style.display="none";
                gameover.style.display = "flex"

                kazanan = oyuncu
                document.getElementById("sira").innerHTML = "OYUN BİTTİ";
                document.getElementById("kazanan").innerHTML = "kazanan kişi "+ oyuncular[oyuncusirasi];
                sifirlaBtn.style.display = "flex";
                console.log(kazanan);
            }
//___________________________________________________________
            for(let i = 6; i < 9; i++){
                if(kutular[fullenss].textContent == oyunAlani[i]){
                    sayac+=1;

                }else{
                    sayac = 0;
                    break;
                }


            }
            if(sayac == 3){
                sira.style.display="none";
                gameover.style.display = "flex"

                kazanan = oyuncu
                document.getElementById("sira").innerHTML = "OYUN BİTTİ";
                document.getElementById("kazanan").innerHTML = "kazanan kişi "+oyuncular[oyuncusirasi];
                sifirlaBtn.style.display = "flex";
                console.log(kazanan);
            }
//___________________________________________________________
            for(let i = 0; i < 7; i+=3){
                if(kutular[fullenss].textContent == oyunAlani[i]){
                    sayac+=1;

                }else{
                    sayac = 0;
                    break;
                }


            }
            if(sayac == 3){
                sira.style.display="none";
                gameover.style.display = "flex"

                kazanan = oyuncu
                document.getElementById("sira").innerHTML = "OYUN BİTTİ";
                document.getElementById("kazanan").innerHTML = "kazanan kişi "+oyuncular[oyuncusirasi];
                sifirlaBtn.style.display = "flex";
                console.log(kazanan);
            }
//___________________________________________________________
            for(let i = 1; i < 8; i+=3){
                if(kutular[fullenss].textContent == oyunAlani[i]){
                    sayac+=1;

                }else{
                    sayac = 0;
                    break;
                }


            }
            if(sayac == 3){
                sira.style.display="none";
                gameover.style.display = "flex"

                kazanan = oyuncu
                document.getElementById("sira").innerHTML = "OYUN BİTTİ";
                document.getElementById("kazanan").innerHTML = "kazanan kişi "+oyuncular[oyuncusirasi];
                sifirlaBtn.style.display = "flex";
                console.log(kazanan);
            }
//___________________________________________________________
            for(let i = 2; i < 9; i+=3){
                if(kutular[fullenss].textContent == oyunAlani[i]){
                    sayac+=1;

                }else{
                    sayac = 0;
                    break;
                }


            }
            if(sayac == 3){
                sira.style.display="none";
                gameover.style.display = "flex"

                kazanan = oyuncu
                document.getElementById("sira").innerHTML = "OYUN BİTTİ";
                document.getElementById("kazanan").innerHTML = "kazanan kişi "+oyuncular[oyuncusirasi];
                sifirlaBtn.style.display = "flex";
                console.log(kazanan);
            }
//___________________________________________________________
            for(let i = 0; i < 9; i+=4){
                if(kutular[fullenss].textContent == oyunAlani[i]){
                    sayac+=1;

                }else{
                    sayac = 0;
                    break;
                }


            }
            if(sayac == 3){
                sira.style.display="none";
                gameover.style.display = "flex"

                kazanan = oyuncu
                document.getElementById("sira").innerHTML = "OYUN BİTTİ";
                document.getElementById("kazanan").innerHTML = "kazanan kişi "+oyuncular[oyuncusirasi];
                sifirlaBtn.style.display = "flex";
                console.log(kazanan);
            }       
//___________________________________________________________
          for(let i = 2; i < 7; i+=2){
            if(kutular[fullenss].textContent == oyunAlani[i]){
                sayac+=1;

            }else{
                sayac = 0;
                break;
            }


        }
        if(sayac == 3){
            sira.style.display="none";
            gameover.style.display = "flex"

            kazanan = oyuncu
            document.getElementById("sira").innerHTML = "OYUN BİTTİ";
            document.getElementById("kazanan").innerHTML = "kazanan kişi "+oyuncular[oyuncusirasi];
            sifirlaBtn.style.display = "flex";
            console.log(kazanan);
        }









        }







        function draw(fullenss) {
            
            for(let i = 0;i < 9;i++){
                if(oyunAlani[i] != ""){
                    
                    beraberlik+=1;
                    console.log("beraberlik: "+beraberlik);
                }else{
                    
                    beraberlik = 0;
                    console.log("beraberlik: "+beraberlik);
                    break;
                }



            }
           if(beraberlik == 9){
            sira.style.display="none";
            gameover.style.display = "flex"
            
            document.getElementById("sira").innerHTML = "OYUN BİTTİ";
            document.getElementById("kazanan").innerHTML = "BERABERLİK";
            sifirlaBtn.style.display = "flex";

           }
               
               


            

        }



        kutular.forEach(function(sifirlama,index){
           
            oyunBitti = 0;
            sifirlaBtn.addEventListener("click",function(){
                gameover.style.display = "none"
                sira.style.display = "flex";
                oyunAlani = ["","","","","","","","",""]
                sayac = 0;
                kutular[index].innerHTML = "";
                oyuncu = "x";
                oyuncusirasi = 0;
                sifirlaBtn.style.display = "none";
                document.getElementById("kazanan").innerHTML="";
                sira.innerHTML = "oyuncu sırası " +oyuncular[oyuncusirasi]+"("+oyuncu+")";
                kazanan = "";
            });
        });
/*

                kazanan = oyuncu
                 document.getElementById("sira").innerHTML = "OYUN BİTTİ";
                 document.getElementById("kazanan").innerHTML = "kazanan kişi x";
                 sifirlaBtn.style.display = "flex";
                 console.log(kazanan);



*/