fetch("https://striveschool-api.herokuapp.com/books")
  .then((booksObj) => booksObj.json())
  .then((books) => {
    //console.log(books);

    const grid = document.getElementById("books");
    grid.innerHTML = "";

    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <div class="card mt-3";>
        <img style="height:350px" src="${book.img}" class="card-img-top img-fluid">
        <div class="card-body">
            <h6 class="card-title text-center">${book.title}</h6>
            <p class="card-text fst-italic text-center">Prezzo: ${book.price} Euro</p>
            <div class="d-flex justify-content-center ">
            <button class="btn btn-danger px-2 py-1 w-40 fw-semibold me-1">Rimuovi</button>
            <button class="btn btn-primary px-2 py-1 w-40 fw-semibold ms-1">Aggiungi</button>
            </div>

        </div>
        </div>
    `;

      const removeBtn = col.querySelector(".btn");
      removeBtn.onclick = () => {
        col.remove();
      };

      grid.appendChild(col);
    });
  })
  .catch((error) => console.log("errore ", error));

//   const cardBody = document.getElementById("card-body")

//   const button = document.createElement("button");
//   button.className = "btn btn-danger";
//   button.innerText = "Scarta";
//   button.onclick = () => {
//       col.remove();
//   };
