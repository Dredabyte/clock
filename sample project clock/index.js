function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = sessionHere();

    function sessionHere(){
        let session = "AM"; 
        if(hh == 0){
            hh = 12;
        } else if(hh > 12){
            hh = hh - 12;
            session = "PM";
        }
        return session;
    }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}

function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, options);
    const timeStr = now.toLocaleTimeString();
    document.getElementById('date').textContent = dateStr;
  }
  

  setInterval(updateTime, 1000);
  

updateTime();

currentTime();

