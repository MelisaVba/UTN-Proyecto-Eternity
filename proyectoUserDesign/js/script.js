document
  .getElementById("card-form") //id del formulario 

  .addEventListener("submit", function (event) { //tomo el evento submit
    
    event.preventDefault(); //actualizacion de pagina

    //Traer valores del formulario
    const title = document.getElementById("card-title").value;
    const description = document.getElementById("card-description").value;
    const imageUrl = document.getElementById("card-image").value || "https://picsum.photos/200"; //img vacia = img de la url
    const bgColor = document.getElementById("card-bg-color").value;
    const borderColor = document.getElementById("card-border-color").value; //!NOS TRAEMOS EL VALOR 
    
    //Mostrar por consola valores
    console.log({    
      title: title, 
      description: description,          
      imageUrl: imageUrl,
      bgColor: bgColor,
      borderColor: borderColor,
    });

    //Nueva Card 
    const cardContainer = document.getElementById("cards-container"); //!NOS TRAEMOS EL ELEMENTO ENTERO
    const newCard = document.createElement("div"); 
    newCard.className = "card"; 
    newCard.style.backgroundColor = bgColor; 
    newCard.style.borderColor = borderColor;

    //MAQUETAR card en html
    newCard.innerHTML = `
        <img src="${imageUrl}" alt="Card Image"> 
        <div class="card-content">
            <p>${title}</p>
            <p>${description}</p>
        </div>
    `;

    //Añadir card al contenedor
    cardContainer.appendChild(newCard);

    //Limpiar campos del formulario
    document.getElementById("card-form").reset();
  }); 
