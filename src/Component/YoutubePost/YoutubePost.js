import { useState} from 'react'
import Axios from 'axios'

function YoutubePost(){
    const [selectedManu , setSelectedManu] = useState("")
    const [title , setTitle] = useState("")
    const [ytLink , setYtLink] = useState("")
    const [description , setDescription] = useState("")

    const selectedManuHandler =(event) =>{
        setSelectedManu(event.target.value)
        
    }
    const titleHandler =(event) =>{
        setTitle(event.target.value)
    }
    const ytLinkHander =(event) =>{
        setYtLink(event.target.value)
    }
    const descriptionHandler =(event) =>{
        setDescription(event.target.value)
    }
    console.log(selectedManu)
    const submitHandler=()=>{
        Axios.post("http://localhost:3001/yt",{
            manu:selectedManu,
            title: title,
            ytLink: ytLink,
            description: description,
        }).then ((response)=>{
            console.log('Post sent')
            console.log(response)
        })
    }
    return(
        <div>
            <select name="cars" id="cars" onClick={selectedManuHandler}>
                <option value="audi">Audi</option>
                <option value="bmw">Bmw</option>
                <option value="citroen">Citroen</option>
                <option value="fiat">Fiat</option>
            </select>
            <input type='text' placeholder="Title" onChange={titleHandler}></input>
            <input type='text' placeholder="Youtube link" onChange={ytLinkHander}></input>
            <input type='text' placeholder="Description" onChange={descriptionHandler}></input>
            <button onClick={submitHandler}>Send post</button>
        </div>

    )
}
export default YoutubePost