//sticky navbar:
            window.onscroll = function() {myFunction()};
            var navbar = document.getElementById("navbarDiv");
            var sticky = navbar.offsetTop;
            function myFunction() {
              if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
              } else {
                navbar.classList.remove("sticky");
              }
            }

//toggle menu
            function toggleMenu() {
                var menuContent = document.getElementById("menuContent");
                var spaceForMenu = document.getElementById("spaceForMenu");
                if(menuContent.style.display == "block") {
                    menuContent.style.display = "none"; 
                    spaceForMenu.style.display = "none";
                }
                else {
                    menuContent.style.display = "block";
                    spaceForMenu.style.display = "block";
                }
            } 
            function saveSpace() {
                var menuContent = document.getElementById("menuContent");
                var spaceForMenu = document.getElementById("spaceForMenu");
                if (menuContent.style.display == "block") {
                    spaceForMenu.style.display = "block";
                } else {
                    spaceForMenu.style.display = "none";
                }
            }
            saveSpace();
// Set the date we're counting down to
            var countDownDate = new Date("Aug 19, 2018 1:00:00").getTime();
            // Update the count down every 1 second
            var x = setInterval(function() {
            // Get todays date and time
            var now = new Date().getTime();
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Display the result in the element with id="demo"
            //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            //+ minutes + "m " + seconds + "s ";
            document.getElementById("countDown").innerHTML = days;
            // If the count down is finished, write some text 
            if (distance < 0) {
            clearInterval(x);
            document.getElementById("countDown").innerHTML = "After wedding, forever wonderful and happy";
            }
            }, 1000);