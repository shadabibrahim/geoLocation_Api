let map=document.getElementById('map');
let btn=document.getElementById('btn');

function getLocation(){
    if(localStorage.getItem("lat")){
        btn.disabled=true;
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        btn.disabled=true;
    }else{
        map.innerText="Geolocation is not supported by your browser";
    }
}

function showPosition(position){
    localStorage.setItem("lat",position.coords.latitude);
    localStorage.setItem("long",position.coords.longitude);
    map.innerHTML=`<iframe src="https://maps.google.com/maps?q=${position.coords.latitude}, ${position.coords.longitude}&output=embed"></iframe>`;
}

function removeLocation(){
    btn.disabled=false;
    localStorage.removeItem("lat")
    localStorage.removeItem("long")
    lt.innerHTML="Lat has been removed.";
    lng.innerHTML="Long has been removed";
}