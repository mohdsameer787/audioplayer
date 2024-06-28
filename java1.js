console.log("working");
/*this function return sonds url playlist one*/
let currentsong=new Audio();

const Admirin = new Audio('karanplaylist/Admirin You Karan Aujla.mp3');
const bachke = new Audio('karanplaylist/Bachke Bachke (feat. Yarah) - Karan Aujla.mp3');
const dontlook = new Audio ('karanplaylist/Dont Look - Karan Aujla.mp3');
const dontworry = new Audio ('karanplaylist/Dont Worry - Karan Aujla.mp3');
const nothinglast = new Audio ('karanplaylist/Nothing Lasts - Karan Aujla.mp3');
const softly = new Audio ('karanplaylist/Softly - Karan Aujla.mp3');
const white = new Audio ('karanplaylist/White Brown  - Avvy Sra.mp3');
const winning = new Audio ('karanplaylist/Winning Speech - Karan Aujla.mp3');



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
/*

async function getsong() {
    
    let hrf = await fetch("http://127.0.0.1:5501/karanplaylist/");
    let response = await hrf.text();

    let div = document.createElement('div');
    div.innerHTML = response;
    let a = div.getElementsByTagName("a");
 
    let songs = [];
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/karanplaylist/")[1])
        }

    }

    return songs
}*/
playmusic=(track)=>{
    currentsong.src="http://127.0.0.1:5501/karanplaylist/"+track;
    currentsong.play();
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
        Array.from(document.querySelector('.magin').getElementsByTagName("li")).forEach(e=>{
            e.addEventListener("click",element=>{
                console.log(e.querySelector(".info").firstElementChild.innerHTML) 
                playmusic(e.querySelector(".info").firstElementChild.innerHTML)
            })
           

        })
       
    }
 async   function playx(){
   let  admir =  new Audio('Admirin You Karan Aujla.mp3');
    admir.play();

       
    }
    











/*this function use to create a div to hold the song list */





















