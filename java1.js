console.log("working");
/*this function return sonds url playlist one*/
let currentsong=new Audio();
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
}
playmusic=(track)=>{
    currentsong.src="http://127.0.0.1:5501/karanplaylist/"+track;
    currentsong.play();
}





/* this funntion list the songs in div*/
async function main() {
    let songs = await getsong();
    console.log(songs)

   
       let song0 = document.querySelector('.magin').getElementsByTagName("ul")[0]
        for (const son of songs) {
         song0.innerHTML=song0.innerHTML+`<li>    <img src="music.svg" alt="">
                        <div class="info">
                            <div class="song">${son.replaceAll("%20"," ")}
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

    











/*this function use to create a div to hold the song list */





















