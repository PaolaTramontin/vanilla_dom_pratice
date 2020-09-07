console.log("hello")   //easy way to check if its linked

alert("Welcome to my Page")

let image= document.getElementById("boston") //made image have an id of boston and then put it inside a variable

    image.style.display = "none"
    image.style.display= "block"  //if i wrote in-line the img dissapears
    image.style.width = "55%" //makes image bigger or smaller
    image.style.filter = " "
    image.style.filter = 'grayscale(60%)'; //made the image gray
    image.style.margin = '0 auto'; //centers it
 
    //document.getElementById("boston").style.margin = '0 auto'; can also center like this


   //document.body.style.background =rgb(192,192,192) tried to change the background color like this but didnt work


var middlePortion = document.getElementsByClassName("middle")   //gave my class element a var of middleportion

var greeting = document.querySelector("h2")  //gave my h2 a var of greeting 
    greeting.style.fontSize = "xxx-large";  //changes font size
    greeting.innerText = "Welcome to Boston!!!"   //changed my h2 text
    //greeting.style.fontStyle="italic";   another font style
    greeting.style.fontFamily = "jazz LET,Charcoal,fantasy";    


//making changes to the ordered list
var list = document.querySelectorAll("li")     //how to access all the li
    list[0].style.color ="royalblue"   //how to access a specific item within li
    list[1].style.color="navy"
    list[1].innerText = "Jamboree sandwich at the Jambo-ree" //list [1] will make change to the second item on your list. inner.text will change the text
    list[2].style.color="mediumblue"
    list[3].style.color="darkblue"


//ADDING A NEW IMAGE

const fenway = document.createElement("img")  //this is saying create a new element, new element is an image. step 1 . give it a var

const container = document.querySelector("p") //tell the code where to put the pic .. in this vase i chose p

container.appendChild(fenway)  //this is saying add another child to the container which is the variable name for p.

fenway.setAttribute("src", "https://www.ballparksofbaseball.com/wp-content/uploads/2016/03/fenway17952.jpg"); //adds photo
//fenway.src="https://www.ballparksofbaseball.com/wp-content/uploads/2016/03/fenway17952.jpg"  another way to add pic


//EDITING THE NEW IMAGE
fenway.style.display = "none"
fenway.style.display= "block"  //if i wrote in-line the img dissapears
fenway.style.width = "35%" //makes image bigger or smaller
fenway.style.filter = " "
fenway.style.filter = 'grayscale(60%)'; //made the image gray
fenway.style.margin = '0 auto'; //centers it

//HOW TO REMOVE AN ELEMENT

   //this will remove the picture   element.remove()
var footer = document.querySelector("footer")
    footer.remove()

