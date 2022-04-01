let response;
let responseJSON;
let day;
let dayt;
//DOM ELEMENTS
const div1=document.createElement("div");
div1.id="head1";
const head1=document.createElement("h1");
const data1=document.createTextNode('FIRE AND ICE');
const head2=document.createElement("h2") ;
const data2=document.createTextNode("HEY!Click on the button to fetch the data of books!"); 
document.body.append(div1);
 head1.appendChild(data1);
 div1.appendChild(head1);
 head2.appendChild(data2);
 div1.appendChild(head2);
 
 
 //FETCH DATA
 const div2=document.createElement("div");
 div2.id="head2";
 document.body.append(div2);

  
 const button1=document.createElement("button");
 button1.id="button1";
 button1.innerText="FETCH DATA";
 div2.appendChild(button1);
  document.getElementById("button1").addEventListener("click",async function books(){
    try{
    response = await fetch("https://anapioficeandfire.com/api/books");
    responseJSON = await response.json();
   // console.log(responseJSON[0]);
    }catch(error){
console.log(error);
    }
  
  
    // DISPLAY DATA
   
   var k=0;

   for(var i of responseJSON){
   if(k===1){
   var x = document.createElement("INPUT");
   x.setAttribute("type","search");
   x.setAttribute("align","right");
   x.setAttribute("placeholder","click here to search");
   x.setAttribute("id","rig");
document.body.append(x);
   }
id(k);
document.write("<div id=+day +</div>");
   document.write("NAME OF THE BOOK-"+i.name+"</br>");
   document.write("ISBN-"+i.isbn+"</br>");
   document.write("NO OF PAGES-"+i.numberOfPages+"</br>"); 
   document.write("CHARACTERS");
   for(var j=0;j<5;j++){
       let char=i.characters[j];
     var  response2 = await fetch(char);
      var  responseJSON2 = await response2.json();    
let value=responseJSON2.name;

    document.write(value+",");   
   }
   document.write("</br>");
   document.write("PUBLISHER-"+i.publisher+"</br>");
   document.write("RELEASED DATE-"+i.released.slice(0,10)+"</br>");
  document.write("</br>");
  k++;
   }
});

function id(y){
  day='"';
 day +=y+day;  
}


  
  

  