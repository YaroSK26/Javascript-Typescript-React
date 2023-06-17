import { useState } from "react";
import "./Formular.css"
function Formular() {

    const [oneUser, setOneUser] = useState({fullName: "", email: "", age: ""})
    const [users,setUsers] = useState([])

    const formChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setOneUser({...oneUser,[name]:value})
    }

    const formSubmit = (event)=>{
        event.preventDefault()
        if (oneUser.fullName && oneUser.email && oneUser.age) {
            // const newUser = {fullName: oneUser.fullName, email:oneUser.email, age:oneUser.age}
            const newUser = {...oneUser, id: new Date().getTime()}
            setUsers ((users) =>{
                return [...users,newUser]  
            })
            setOneUser({ fullName: "", email: "", age: "" })
        }else{
            console.log("madar si ")
        }


    }

  return (
<article>
    <form action="">
              <input type="text" className="userInfo" placeholder='Meno' value={oneUser.fullName} onChange={formChange} name="fullName"/>
              <input type="text" className="userInfo" placeholder='Email' value={oneUser.email} onChange={formChange} name="email"/>
        <input type="text" className="userInfo" placeholder='Vek' value={oneUser.age} onChange={formChange} name="age"/>
        <input onClick={formSubmit} type="submit" />
    </form>

    {users.map((oneUser , index )=>{
        const { id,fullName, email, age} = oneUser
        return <div className="item" key={id}>
            <h3>{fullName}</h3>
            <p>{email}</p>
            <p>{age}</p>
            </div>

    })}
</article>
  )
}

export default Formular


// Dynamic object properties = dynamické vlastnosti objektu


// const info = "fullName"


// const person = {
//     fullName: "David Šetek",
//     email: "david@bradavice.cz"
// }


// person.age = 40
// person[info] = "red"


// console.log(person)