

function ApproveSub() {
    var text = "Cool!";
    document.getElementById("button").innerHTML = text;
}




//nav bar
const activePge = window.location.href;
const navList = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href == activePge){
        console.log(activePge);
        link.classList.add('active');
    }
});
