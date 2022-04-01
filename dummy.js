<div className="fire">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>{authors}</p>
                  <p>{book.numberOfPages} pages</p>
                  <p>🏘{book.country}</p>
                  <p>{cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
Books();

async function Books(){
    var response = await fetch("https://anapioficeandfire.com/api/books");
    var responseJSON = await response.json();
    console.log(responseJSON[0]);
}