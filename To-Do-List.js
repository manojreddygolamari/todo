window.onload=function(){

    var addListbtn=document.getElementById("quickadd");
    var modalCancelbtn=document.getElementById("cancelcard");

    var modalDiv=document.querySelector(".modal-container");

    //modal visibility logic
    addListbtn.addEventListener("click",function(){
        modalDiv.style.visibility ="visible";
        document.getElementById("availablecards").style.visibility="hidden";
    });

    modalCancelbtn.addEventListener("click",function(){
        clearForm();
        modalDiv.style.visibility ="hidden";
        document.getElementById("availablecards").style.visibility="visible";
    });

    // clearing the form fields once card is added 
    function clearForm()
    {
      var clear=document.querySelectorAll(".list-input");
       for( var i in clear)
       {
           clear[i].value ='';
       }
    }

   

    //adding list
    var listContainerarea=document.getElementById("listContainer");
    var addCount=0;
    var modalAddbtn=document.getElementById("addcard");
    modalAddbtn.addEventListener("click",addList);
    
        function addList()
        {
                
               var title=document.getElementById("card-title").value;
               if(title!='')
               {
                var maincontainer=document.createElement("div");
                maincontainer.classList.add('maincontainer');
                listContainerarea.appendChild(maincontainer);

                var subcontainer1=document.createElement("div");
                subcontainer1.classList.add('subcontainer1');
                maincontainer.appendChild(subcontainer1);

                var list=document.createElement("div");
                list.classList.add('list');
                subcontainer1.appendChild(list);
                
                var listtitlediv=document.createElement("div");
                listtitlediv.classList.add('listtitlediv');
                list.appendChild(listtitlediv);
                
                var h3 = document.createElement("H3");
                var t3 = document.createTextNode(title);
                h3.appendChild(t3);
                listtitlediv.appendChild(h3);
 
                var h4 = document.createElement("H4");
                var t4 = document.createTextNode("3");
                h4.appendChild(t4);
                listtitlediv.appendChild(h4);
        
                var trash=document.createElement("button");
                trash.innerHTML='<i id="trash" class="far fa-trash-alt"></i>';
                trash.classList.add('trash')
                listtitlediv.appendChild(trash);

                var subcontainer2=document.createElement("div");
                subcontainer2.classList.add("subcontainer2");
                maincontainer.appendChild(subcontainer2);

                var Addcardinlist=document.createElement("button");
                Addcardinlist.innerHTML="+ Add card";
                Addcardinlist.classList.add("Addcardinlist");
                subcontainer2.appendChild(Addcardinlist);
                //card Modal
                Addcardinlist.addEventListener('click',function(e)
                {
                    if(e)
                    {
                        const cardModalcontainer=document.querySelector(".cardmodalcontainer");
                        const cancelCardmodal=document.getElementById("cancelcardmodal");
                        const addcardinList=document.getElementById("addcardbtn")
                        addcardinList.addEventListener("click",cardAdd)
                        cardModalcontainer.style.visibility ="visible";
                        //modal visibility logic
                    
                        cancelCardmodal.addEventListener("click",function(){
                            cardModalcontainer.style.visibility ="hidden";
                            clearForm();
                        }); 
                     }
                 });


               }
               else{
                   alert("Title is required");
               }
               
               clearForm();
               modalDiv.style.visibility ="hidden";
               addCount++
               if(addCount!=0)
               {
                document.getElementById("availablecards").style.display="none";
               }

        }

       
}
function cardAdd()
{
    var cardModalcontainer=document.querySelector(".cardmodalcontainer");
    var list=document.querySelector(".list");
    var cardTitle=document.getElementById("cardtitle1").value;
    var cardDes=document.getElementById("carddesc").value;

    if(cardTitle!='' && cardDes!='')
    {
        var uiContainer=document.createElement("div");
        uiContainer.classList.add("ulcontainer");
        list.appendChild(uiContainer);

        var uL=document.createElement("ul");
        uL.classList.add("cardulList");
        uiContainer.appendChild(uL);
  
        var Li=document.createElement("li");
        var listtitlediv=document.createElement("div");
        listtitlediv.classList.add("listtitlediv");
        uL.appendChild(Li);
        Li.appendChild(listtitlediv);

        var h3 = document.createElement("H3");
        var t3 = document.createTextNode(cardTitle);
         h3.appendChild(t3);
         listtitlediv.appendChild(h3);

         var desdiv=document.createElement("div");
         desdiv.classList.add("description")
         uiContainer.appendChild(desdiv);

        var desch3=document.createElement('h3');
        var dest3=document.createTextNode(cardDes);
        desch3.appendChild(dest3)
        uiContainer.appendChild(desch3);

        
        cardModalcontainer.style.visibility ="hidden";
    }
    

}
