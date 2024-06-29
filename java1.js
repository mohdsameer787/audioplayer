console.log("working");
/*this function return sonds url playlist one*/
let currentsong=new Audio();
function formatTime(seconds) {
    // Round off the seconds
    seconds = Math.round(seconds);
    
    // Calculate minutes and seconds
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // Add leading zeros if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    // Return the formatted time
    return minutes + ':' + remainingSeconds;
}




const Admirin = new Audio('Admirin You Karan Aujla.mp3');
const bachke = new Audio('Bachke Bachke (feat. Yarah) - Karan Aujla.mp3');
const dontlook = new Audio ('Dont Look - Karan Aujla.mp3');
const dontworry = new Audio ('Dont Worry - Karan Aujla.mp3');
const nothinglast = new Audio ('Nothing Lasts - Karan Aujla.mp3');
const softly = new Audio ('Softly - Karan Aujla.mp3');
const white = new Audio ('White Brown  - Avvy Sra.mp3');
const winning = new Audio ('Winning Speech - Karan Aujla.mp3');



const songsarr=[
     
{ elem:Admirin,     songname:        'Admirin You - Karan Aujla'  },
{ elem:bachke  ,    songname:   'Bachke Bachke (feat. Yarah) - Karan Aujla.mp3'         },
{ elem:dontlook,    songname:   'Dont Look - Karan Aujla.mp3'        },
{ elem:dontworry ,  songname:   'Dont Worry - Karan Aujla.mp3'       },
{ elem:nothinglast, songname:   'Nothing Lasts - Karan Aujla.mp3'      },
{ elem:softly,      songname:   'Softly - Karan Aujla'     },
{ elem:white,       songname:   'White Brown  - Avvy Sra.mp3'       },
{ elem:winning,     songname:   'Winning Speech - Karan Aujla.mp3'      }

]

playmusic=(track,pause)=>{
    currentsong.src=track;
    currentsong.play();
  
    play1.src="pause.svg"
  
    document.querySelector('.information').innerHTML=track;
    document.querySelector('.duration').innerHTML="00/00";
}





/* this funntion list the songs in div*/
async function main() {
    /*let songs = await getsong();
    console.log(songs)*/
    const songsarr=[
     
        { elem:Admirin,     songname:        'Admirin You Karan Aujla.mp3'  },
        { elem:bachke  ,    songname:   'Bachke Bachke (feat. Yarah) - Karan Aujla.mp3'         },
        { elem:dontlook,    songname:   'Dont Look - Karan Aujla.mp3'        },
        { elem:dontworry ,  songname:   'Dont Worry - Karan Aujla.mp3'       },
        { elem:nothinglast, songname:   'Nothing Lasts - Karan Aujla.mp3'      },
        { elem:softly,      songname:   'Softly - Karan Aujla.mp3'     },
        { elem:white,       songname:   'White Brown  - Avvy Sra.mp3'       },
        { elem:winning,     songname:   'Winning Speech - Karan Aujla.mp3'      }
        
        ]
      
   
       let song0 = document.querySelector('.magin').getElementsByTagName("ul")[0]
        for (let index = 0; index < songsarr.length; index++) {
          
            let audioname =songsarr[index].songname;
            song0.innerHTML=song0.innerHTML+`<li>    <img src="music.svg" alt="">
                           <div class="info">
                               <div class="song">${audioname}
                               </div>
                           </div>
                           <div class="playnow">
                               <img src="play2.svg" alt="">
                               <span>play now</span>
                           </div>
           </li>`
        }
       let arrays= Array.from(document.querySelector('.magin').getElementsByTagName("li")).forEach(e=>{
            e.addEventListener("click",element=>{
                console.log(e.querySelector(".info").firstElementChild.innerHTML) 
                playmusic(e.querySelector(".info").firstElementChild.innerHTML)
            
         
                
            })
           

        })
       play1.addEventListener("click",()=>{
        if(currentsong.paused){
            currentsong.play();
             play1.src="pause.svg"
        }
        else{
            currentsong.pause();
            
            play1.src="playbutton.svg"
        }
       })   
       currentsong.addEventListener('timeupdate',()=>{
        document.querySelector(".duration").innerHTML= `${formatTime(currentsong.currentTime)}/${formatTime(currentsong.duration)}`
        document.querySelector(".circle").style.left=(currentsong.currentTime/currentsong.duration)*100 + "%";

        



       })
      


    document.querySelector(".seekbar").addEventListener('click',e=>{
        console.log(e.offsetX)
            let percent= (e.offsetX/e.target.getBoundingClientRect().width)*100
          document.querySelector(".circle").style.left = percent +"%"
          console.log('currentsong:', currentsong);
console.log('currentsong.duration:', currentsong.duration);
console.log('percent:', percent);
          let variable = (currentsong.duration*percent)/100;
          console.log(variable)
          currentsong.currentTime = (currentsong.duration*percent)/100;
          currentsong.play();
          play1.src="pause.svg"
               
        })
        document.querySelector(".topcon").style.left=0;
        document.querySelector(".hamburger").addEventListener("click",()=>{

            document.querySelector(".topcon").style.left=0;
        })
        document.querySelector(".crosse").addEventListener("click",()=>{
            document.querySelector(".topcon").style.left="-100%";
        })
       
}
    
    
 











/*this function use to create a div to hold the song list */





















