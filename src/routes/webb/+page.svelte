<!-- Denna del av koden nedan innehåller en bildkarusell. Dessa element och attribut används tillsammans för att skapa en bildkarusell med bilder, knappar för att navigera mellan bilderna och punkter för att indikera vilken bild som är aktiv.  -->

<body>

    <div class="container">
        <div class="image">
            <img src="https://static.standard.co.uk/2022/06/29/15/newFile-9.jpg?width=1200" alt="">
        </div>
        <div class="image">
            <img src="https://www.travelandleisure.com/thmb/c-nuaEqUffHAByhV7Ls6iDEeXwc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-atrani-italy-amalfi-coast-AMALFITOWNS0223-c516bc91bb434e19b5ec6e2fb50cb9eb.jpg" alt="">
        </div>
        <div class="image">
            <img src="https://cdn.vox-cdn.com/thumbor/Xsto91sF4Cq3-j0D0-e9w-jUe64=/0x0:6720x4480/1200x675/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/71783393/shutterstock_1927957934.0.jpg" alt="">
        </div>
        <div class="image">
            <img src="https://images.ctfassets.net/3s5io6mnxfqz/1rpUj0lbF4UraDAIt1eXjr/fbfa8beb2fde3a2686020165e983a7af/AdobeStock_357911175_2.jpeg" alt="">
        </div>
        <div class="image">
            <img src="https://www.theculinaryacademy.org/wp-content/uploads/2020/02/shutterstock_562219663.jpg" alt="">
        </div>

        <div class="button">
            <a onclick="nextimg(-1)" class="prev">&#10094;</a>
            <a onclick="nextimg(1)" class="next">&#10095;</a>
        </div>

        <div class="dots">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
        </div>
    </div>


<!-- definieras två funktioner: "openPopup()" och "closePopup()".

"openPopup()" lägger till CSS-klassen "open-popup" till popup-elementet, vilket gör att det blir synligt genom att ändra dess synlighetsegenskap och positionering.

"closePopup()" tar bort CSS-klassen "open-popup" från popup-elementet, vilket gör att det göms genom att återställa dess synlighetsegenskap och positionering.

När du använder navigationsknapparna eller punkterna för att byta bild, ändras värdet på "imageno" och funktionen "displayimg(n)" anropas för att uppdatera visningen av bilderna och markera den aktuella bilden. -->

    <script>

      letpopup = document.getElementById("popup");

      function openPopup(){
          popup.classList.add("open-popup");
      }

      function closePopup(){
        popup.classList.remove("open-popup");
      }
      

        var imageno =1;
        displayimg(imageno);

        function nextimg(n){
            displayimg(imageno += n)
        }

        function currentSlide(n){
            displayimg(imageno = n)
        }

        function displayimg(n){
            var i;
            var image = document.getElementsByClassName("image");
            var dots = document.getElementsByClassName("dot");

            if(n > image.length){
                imageno = 1;
            }

            if(n < 1){
                imageno = image.length;
            }

            for(i=0; i < image.length; i++){
                image[i].style.display = "none";
            }

            for(i=0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace(" active", "");
            }

            image[imageno - 1].style.display ="block";
            dots[imageno - 1].className += " active";

        }
    </script>
  </body>
 
<!-- definierar name -->

  <script>
      let name = "";
  </script>



<main>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<!-- style för text på hemsidan, popup rutan samt bildpelet. Kan läsa om all style på trello tavlan  -->
<style>
body {font-family: "Times New Roman", Georgia, Serif;}
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display";
  letter-spacing: 5px;
}

.container{
    width: 100%;
    height: 50vh;
    position: relative;
}

.container .image img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}

.container .button{
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 5;
}

.container .button a{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
    align-items: center;
    cursor: pointer;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    font-size: 20px;
    user-select: none;
}

.dots{
    text-align: center;
    position: absolute;
    bottom: 8px;
    left: 45%;
    padding: 5px 10px;
    height: 30px;
    border-radius: 15px;
}

.dot{
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #bbb;
    display: inline-block;
    margin: 0 2px;
}

.active, .dot:hover{
    background: yellow;
}

.popup{
  width: 400px;
  background:#fff;
  border-radius:6px;
  position:absolute;
  top:0;
  left:50%;
  transform:translate(-50%, -50%) scale(0.1);
  text-align:center;
  padding:0 30px 30px;
  color:#333;
  visibility: hidden;
  transition: transform 0.4s, top 0.4s;
}

.open-popup{
  visibility: visible;
  top:50%;
  transform:translate(-50%, -50%) scale(1);
}

.popup img{
  width:100px;
  margin-top:-50px;
  border-radius: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)
}

.popup h2{
  font-size:38px;
  font-weight:500;
  margin: 30px 0 10px;
}

.popup button{
  width:100%;
  margin-top:50px;
  padding: 10px 0;
  background: #6fd649;
  color:#fff;
  border:0;
  outline:none;
  font-size:18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2)
}

</style>
</main>

<!-- Navigationbar, inuti navigeringsraden finns tre länkar definierade med <a>-elementen. Den första länken har texten "dartW" och en href-attribut som länkar till home. De andra två länkarna har texten About och Meny och länkar till About respektive menyn. Dessa länkar representerar olika sektioner på sidan som användaren kan hoppa till genom att klicka på dem. -->
<div class="w3-top">
  <div class="w3-bar w3-white w3-padding w3-card" style="letter-spacing:3px;">
    <a href="#home" class="w3-bar-item w3-button">dartW</a>

    <div class="w3-left">
      <a href="#about" class="w3-bar-item w3-button">About</a>
      <a href="#menu" class="w3-bar-item w3-button">Menu</a>
      <a href="#contact" class="w3-bar-item w3-button">Contact</a>
    </div>
  </div>
</div>

<header class="w3-display-container w3-content w3-wide" style="max-width:1600px;min-width:500px" id="home">
  <img class="w3-image" src="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/11/bigstock-Grilled-Marbled-Meat-Steak-Fil-268244788.jpg" alt="stek Catering" width="1600" height="800">
  <div class="w3-display-bottomleft w3-padding-large w3-opacity">
    <h1 class="w3-xxlarge w3-text-white" >dartW</h1>
  </div>
</header>


<div class="w3-content" style="max-width:1100px">

  <!-- About texten samt bilder -->
  <div class="w3-row w3-padding-64" id="about">
    <div class="w3-col m6 w3-padding-large">
     <img src="https://www.luxuryrestaurantawards.com/wp-content/uploads/sites/9/2019/02/SoleRestaurant_2018.03.21A-13.jpg" class="w3-round w3-image w3-opacity-min" alt="resturangen" width="600" height="750">
     <img src="https://www.rucksack.se/wp-content/uploads/2019/05/Sestri-Levante-utsikt.jpg" class="w3-round w3-image w3-opacity-min" alt="resturangen" width="600" height="750">

    </div>

    <div class="w3-col m6 w3-padding-large">
      <h1 class="w3-center">About dartW</h1><br>
      <h5 class="w3-center">Tradition since 1889</h5>
      <p class="w3-large">dartW was founded in Taormina and is based on fresh herbs, organic plants and an exceptional selection of meat and fish. dartW has continuously won many international awards for its cuisine, whose success the trio believes comes from using selected <span class="w3-tag w3-light-grey">Mediterranean</span> products, a thorough research and testing process for the dishes, and the excitement for constant change and innovation.</p>
      <p class="w3-large w3-text-grey">Mateu Casañas, Oriol Castro and Eduard Xatruch show no signs of stopping, with a genuine desire to share their passion for food and their ingrained enjoyment of the Mediterranean. With constant new ideas and a willingness to change and adapt to their environment, the only thing they are determined to do is improve their kitchen to be the best it can be.</p>
    </div>
  </div>
  
  <hr>
  
  <!-- Menu med text samt bilder -->
  <div class="w3-row w3-padding-64" id="menu">
    <div class="w3-col l6 w3-padding-large">
      <h1 class="w3-center">Our Menu</h1><br>
      <h4>Filetto di Tonno</h4>
      <p class="w3-text-grey">Seared tuna fillet (300gr approx.), with a garnish of baked baby potatoes, sautéed asparagus, Kalamata olives, cherry tomatoes, mussels, and Cassis liquid reduction. <span class="w3-light-grey">  -  20€</span></p><br>
    
      <h4>Tagliata di Picaña</h4>
      <p class="w3-text-grey">A typical plate of Picaña slices beef (300gr approx.) served on a bed of rocket salad and delicious slices of Grana Padano D.O.P. <span class="w3-light-grey">  -  35€</span></p><br>
    
      <h4>Tagliatelle all' Aragosta</h4>
      <p class="w3-text-grey">Homemade fresh pasta served with the star of the crustaceans, Caribbean lobster, bisque sauce with chardonnay, cherry tomato, and fresh basil. <span class="w3-light-grey">  -  20€</span></p><br>
    
      <h4>Mediterránea</h4>
      <p class="w3-text-grey">Pure Mediterranean ingredients; romaine lettuce, kalamata olives, tomato, cucumber, grapefruit, feta cheese, and "tzatziki" dressing (Greek yogurt, mint, cucumber, and lemon). <span class="w3-light-grey">  -  17€</span></p><br>
    
      <h4>Aragosta</h4>
      <p class="w3-text-grey">Salsa de tomate, mozzarella, langosta marinada con hierbas finas, pimiento asado y tomate deshidratados. <span class="w3-light-grey">  -  24€</span></p>    
    </div>
    
    <div class="w3-col l6 w3-padding-large">
      <img src="https://www.lux-review.com/wp-content/uploads/2020/08/caviar.jpg" class="w3-round w3-image w3-opacity-min" alt="Menu" style="width:100%">
      <img src="https://4.bp.blogspot.com/--uywtjwW7U4/T6JHxuT8DJI/AAAAAAAADYI/zou3OeUM2RM/s1600/Ska%CC%88rbra%CC%88da+stor+(1+av+1).jpg" class="w3-round w3-image w3-opacity-min" alt="Menu" style="width:100%">
    </div>
  </div>

  <hr>

  <!-- Contact, det finns fyra input-fält med hjälp av olika typ-attribut, inklusive textfält för användarens namn och meddelande, ett nummerfält för antalet personer, och ett datum- och tidsfält för att boka en tid. -->
  <div class="w3-container w3-padding-64" id="contact">
    <h1>Contact</h1><br>
    <p>We offer full-service for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
    <p class="w3-text-blue-grey w3-large"><b>dartW, 12 Via dei Due Allori Lazio Rom </b></p>
    <p>You can also contact us by phone 072-534 78 18 or email dartW@resturant.com, or you can send us a message here:</p>
    <form action="/action_page.php" target="_blank">
      <p><input bind:value={name} class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People"></p>
      <p><input class="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"></p>
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required name="Message"></p> 
    </form>
  </div>
</div>
<!-- fortsättning på contact med popup ruta, sammanfattningsvis skapar koden lite högre upp en popup-funktion där popupen visas när användaren klickar på en knapp och försvinner när användaren klickar på en annan knapp. -->

<div class="container">
  <button type="submit" class="btn" onclick="openPopup()">submit</button>
  <div class="popup" id="popup">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/017/197/461/small/green-check-mark-icon-on-transparent-background-free-png.png">
    <h2>Thank you {name}</h2>
    <p>We have successfully received your information</p>
    <button type="button" onclick="closePopup()">OK</button>

  </div>

</div>

<!-- längst ner -->
<footer class="w3-center w3-light-grey w3-padding-32">
  <p>monday - friday 17-02 | sunday - saturday 17-03 </p>
</footer>

