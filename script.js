fetch("https://striveschool-api.herokuapp.com/books")
  .then((booksObj) => booksObj.json())
  .then((books) => {
    console.log(books);

    const grid = document.getElementById("books");
    grid.innerHTML = "";

    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <div class="card">
        <img style="height:300px" src="${book.img}" id="card-body" class="card-img-top img-fluid">
        <div class="card-body
            <h6 class="card-title text-center">${book.title}</h6>
            <p class="card-text fst-italic text-center">Prezzo: ${book.price} Euro</p>
            <button class="btn btn-danger px-2 py-1 w-100 fw-semibold">Rimuovi</button>
        </div>
        </div>
    `;

    const removeBtn = col.querySelector(".btn")
    removeBtn.onclick = () => {
        col.remove()
    }

      grid.appendChild(col);

      
      
      
    });
})
.catch((error) => console.log("errore", error));

//   const cardBody = document.getElementById("card-body")

//   const button = document.createElement("button");
//   button.className = "btn btn-danger";
//   button.innerText = "Scarta";
//   button.onclick = () => {
//       col.remove();
//   };