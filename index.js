function updateDateTime(){
    const dayOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const now = new Date();

    const day = dayOfWeek[now.getDay()];
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('day').innerHTML=`Date: ${day} ${date}`;
    document.getElementById('time').innerHTML = `Time: ${time}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);