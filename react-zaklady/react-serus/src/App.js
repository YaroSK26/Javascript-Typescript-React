// C:\Users\W10SK\Desktop\baroslav-jarabas\.vscode\javascript\react\react-serus npm start

//Pravidla pro tvorbu komponenty

// komponenta je funkcia
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
//return moze vratit iba 1 tag

import Book from "./components/book"


const App = () => {
  const books = [
    {
      id: 1,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
      title: "Harry Potter a Kámen mudrců"
    },
    {
      id: 2,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
      title: "Harry Potter a Tajemná komnata"
    },
    {
      id: 3,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
      title: "Harry Potter a Vězeň z Azkabanu"
    },
  ]

  return (
    <div className="all-books">
      <Book myImage={books[0].image} myTitle={books[0].title} />
      <Book myImage={books[1].image} myTitle={books[1].title} />
      <Book myImage={books[2].image} myTitle={books[2].title} />
      
    </div>
    
  )
}


export default App