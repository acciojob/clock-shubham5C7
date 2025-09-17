//your JS code here. If required.
const p = document.getElementById("timer")
const now = new Date();


        const day = now.getDay();
        const month = now.getMonth()+1;
        const year = now.getFullYear();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

p.innerText = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;