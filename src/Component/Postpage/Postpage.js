import react ,{ useState } from 'react'
import Axios from 'axios'
import { uid } from 'uid'

function Postpage(){
    const [selectedManu , setSelectedManu] = useState("none")
    const [model , setModel] = useState("none")
    const [title , setTitle] = useState("none")
    const [ytLink , setYtLink] = useState("none")
    const [description , setDescription] = useState("none")
    const [files,setFiles] = useState([])

    const selectedManuHandler =(e) =>{
        setSelectedManu(e.target.value)
    }
    const modelHandler =(e) =>{
        setModel(e.target.value)
    }
    const titleHandler =(e) =>{
        setTitle(e.target.value)
    }
    const ytLinkHander =(e) =>{
        setYtLink(e.target.value)
    }
    const descriptionHandler =(e) =>{
        setDescription(e.target.value)
    }
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    }
    const fileUploadHandler=(e)=>{
        setFiles(e.target.files)
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        const data = new FormData()
        const postid= uid(15)
        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }
        Axios.post(`${process.env.REACT_APP_ServerUrl}/create`,{
            title: title,
            manufacturer: selectedManu,
            model: model,
            description : description,
            postid:postid,
            ytLink:ytLink
            }).then (()=>{
                console.log("success")
            })
            .catch((e) => {
                console.log('Upload Error')
            })

        Axios.post(`${process.env.REACT_APP_ServerUrl}/upload`, data)
            .then((response) => {
                console.log(data)
                onSuccess(response.data)
            })
            .catch((e) => {
                console.log('Upload Error')
            })

        for(let i = 0; i < files.length; i++) {
            console.log(files[i].name)
            Axios.post(`${process.env.REACT_APP_ServerUrl}/uploaddb`,{
                postid:postid,
                name:files[i].name,
            })
        }
    }
    return(
        <div >
            <form class="user">
                <div class="form-group row">
                    <select className="col-sm-5" name="cars" id="cars" onClick={selectedManuHandler}>
                    <option value=""></option>
                        <option value="audi">Audi</option>
                        <option value="bmw">Bmw</option>
                        <option value="citroen">Citroen</option>
                        <option value="fiat">Fiat</option>
                        <option value="ford">Ford</option>
                        <option value="mazda">Mazda</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="opel">Opel</option>
                        <option value="peugeot">Peugeot</option>
                        <option value="renault">Renault</option>
                        <option value="seat">Seat</option>
                        <option value="vw">VW</option>
                    </select>
                </div>
                <div class="col-sm-5">
                    <input type='text' class="form-control form-control-user mt-3" placeholder="Model" onChange={modelHandler}/>
                </div>
                <div class="col-sm-5">
                    <input type='text' class="form-control form-control-user mt-3" placeholder="Title" onChange={titleHandler}/>
                </div>
                <div class="col-sm-8">
                <input type='text' class="form-control form-control-user mt-3" placeholder="Youtube link" onChange={ytLinkHander}/>
                </div>
                <div class="col-sm-8">
                <input type='text' class="form-control form-control-user mt-3" placeholder="Description" onChange={descriptionHandler}/>
                </div>
                <form method="post" action="#" id="#">
                    <div className="form-group files mt-3" >
                        <input type="file" onChange={fileUploadHandler} className="form-control"  multiple/>
                    </div>
                </form>
                <button onClick={submitHandler}>Send post</button>
            </form>
        </div>
    )
}
export default Postpage