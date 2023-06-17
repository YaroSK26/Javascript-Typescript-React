import Book from "./Book"
import data2 from "../data2"

const Books = () => {
  return (
    <div>
        {data2.map((oneBook)=>{
            return <Book key={oneBook.id} {...oneBook}/>
        })}
    </div>
  )
}

export default Books