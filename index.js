var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontents of tabcontent){
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// ------------------- js for smaller screens -------------------

var sidemenu = document.getElementById("sidemenu");

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}
// ------------------- save contact info in google sheet ------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbz25QbORrehh8MaLdZ_-BWkgPI16qdm0lqe_BvpGlwAMb0ixAvYoM_6lymaTDbacoslyg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "<i class='fa-sharp fa-solid fa-circle-check'></i> Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })