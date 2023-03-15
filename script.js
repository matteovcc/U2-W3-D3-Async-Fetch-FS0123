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
        <img src="${book.img}" id="card-body" class="card-img-top img-fluid">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.price} Euro</p>
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