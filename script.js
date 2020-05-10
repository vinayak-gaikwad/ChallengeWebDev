var arr1 = ["Animals", "Food",  
        	"Films", "Tech Products", "Music Artist","TV Show", "Video Game", "Dessert", "Clothing Company","Superhero", "Sport","Travel", 
        	"Cosmetics", "Recipes" ,"Cartoon", "Photographer", " Go Corona", "Space", "Plants", "Your Hobby" , "Coding", 
        	"Item in front of you" , "Chocolate" , "One Nation",  "Restaurant", "Shoes", "Cars","Student Life","SuperStar" ] ; 
  
var arr2 = ["Flip Cards", "Cards with Hover Effect",  
        "Profile Cards", "Image Gallery", "Book Style Page", "Modal Windows", "Magazine Style Page", 
        "Blog Style Page", "Slideshow", "Accordian Style", "Login Page", "Buttons with Click Effects",
        "Buttons with Hover Effects", "Page Transitions", "Fullscreen Menu", "Sidebar Menu", "Subscribe Form" ,
        "Stacked Cards", "CSS Animations" ,"SocialMedia Buttons", "Contact Form", "Portfolio"];

var themeButton = document.getElementById('bt');
var codeButton = document.getElementById('bc');
var codePara = document.getElementById('pc');
var themePara = document.getElementById('pt');



themeButton.addEventListener("click", () => {
	let x = arr1[Math.floor(Math.random() * arr1.length)];

	themePara.innerHTML = x;

});

codeButton.addEventListener("click", () => {
	let y = arr2[Math.floor(Math.random() * arr2.length)];

	codePara.innerHTML = y;

});


