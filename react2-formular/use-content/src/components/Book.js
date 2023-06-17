import PropTypes from "prop-types"
import defaultImage from "../images/book-default.jpg"

const Book = ({image,title,price}) => {
  return (
    <div>
        <h2>{title /*||  "default nazov"*/ }</h2>
        <img src={image} alt="" />
        <p>{price} kc</p>
    </div>
  )
}
Book.propType = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

Book.defaultProps = {
    title: "default nazov",
    price: 1000 ,
    image: defaultImage,
}

export default Book