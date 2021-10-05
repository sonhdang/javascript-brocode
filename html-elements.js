/***********************/
//  ADD HTML ELEMENTS
/***********************/
/* There are 2 ways to create HTML elements using JS
    - innerHTML (vulnerable to XSS attacks)
    - innerText (preferred)  */

// innerHTML
const header1 = document.createElement("h1");
header1.innerHTML = "<u>Hello World! with innerHTML<u>";
/* This is dangerous because someone can have <script> inside the text to run some malicious script */
document.body.append(header1);

// innerText: wrong approach
const header2 = document.createElement("h1");
header2.innerText = "<u>Hellow World! with innerText<u>";
/* This will not interpret tags in text as HTML tags but as
literal characters. To solve this, we have to create an element
separately */
document.body.append(header2);

// innerText: right approach
const header3 = document.createElement("h1");
const underline = document.createElement("u");
underline.innerText = "Hello World! with innerText";
header3.append(underline);
document.body.append(header3)

/***********************/
// MODIFY HTML ELEMENTS
/***********************/
/* There are 2 ways to modify HTML elements using JS
    - document.getElementById() (older)
    - document.querySelector()  (newer, more powerful)
        + document.querySelectorAll() (variation of querySelector) */
/* NOTE THAT: If you want to select an element by ID, you use a 
hashtag '#' followed by the ID; if you want to select a class 
name, you use a period '.' followed by the name of the class */

document.querySelector("#myButton").onclick = function(){
    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerText = "Bye World!";
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    /* p is now, a type of an array (i.e. NodeListOf<Element>), 
    and it behaves exactly like an array. We can access each 
    element in the class by using index */
    p[0].innerText = "DAAAAAAAANG!!!!";

    /* When the button is clicked, it is removed */
    const button = document.querySelector("button");
    button.remove();
}