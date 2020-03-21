function initMap() { 
  var eiffelTower = {lat: 48.858370, lng: 2.294481}
  var map = new google.maps.Map(document.getElementById('map'), {
    center: eiffelTower,
    zoom: 15,
  });
  var marker = new google.maps.Marker({
    position: eiffelTower,
     map: map
   });
}

window.onscroll = function() {myFunction()};
var allP = document.querySelectorAll("p");
var allImg = document.querySelectorAll(".pictures");
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    for(var i = 0; i < allP.length; i++){
      if(parseInt(allP[i].id) % Math.sqrt(parseInt(allP[i].id)) != 0 && parseInt(allP[i].id) % 2 !=0 || parseInt(allP[i].id)==2 ){
        allP[i].innerHTML="This is Prime Number : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        console.log(allP[i].previousElementSibling)
        allP[i].previousElementSibling.src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg";
      }
      else{
        allP[i].innerHTML="Not prime number : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      }

      
    }

  } else {
    for(var i = 0; i < allP.length; i++){
      allP[i].innerHTML="";
    }
    for(var j=0; j<allImg.length; j++){
      allImg[j].src="";
    }
  }
}
