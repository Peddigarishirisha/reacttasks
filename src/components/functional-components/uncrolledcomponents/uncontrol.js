import { useRef } from "react"






const Uncontrol=()=>{


    const usernameref=useRef(null)
    const passwordref=useRef(null)

    const handsubmit=(event)=>{
        event.preventDefault()
        const username=usernameref.current.value
        const password=passwordref.current.value
        if(username.length>5){
            alert("enter less than 5 charecters")

        }


// console.log("focus on me",usernameref.current.focus(),usernameref.current.value)
// console.log("password",passwordref.current.value)


    }

return(

    <>
    <h1>uncroled component example</h1>

    <form onSubmit={handsubmit}>
        <input type="text" name="text" ref={usernameref}></input>
        <input type="password" name="passwrd" ref={passwordref}></input>
        <input type="submit" name ="button"></input>
           </form>
    </>
)
}

export default Uncontrol