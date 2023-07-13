function call(event){
    event.preventDefault();
    const n=event.target.todo.value
    const e=event.target.des.value
    const obj={
        name:n,
        passwd:e
    }
    axios.post("https://crudcrud.com/api/96602dac8ca840e0bd42940cfc7af4de/todo",obj)
    .then((response)=>{
        print(response.data)
    })
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/96602dac8ca840e0bd42940cfc7af4de/todo")
    .then((responses)=>{
        for(let i=0;i<responses.data.length;i++){
            print(responses.data[i])
        }
    })

})
function print(d){
    parentnode=document.getElementById("list")
    let ab=d.name+" "+d.passwd
    childHTML=`<br><li id=${d.name}> ${ab} 
   
    <input type="checkbox" value="done">
    <button onclick="com('${d.name}')">submit</button>
    <button onclick="del('${d.name}')">Delete</button>
    </li>
    `
    parentnode.innerHTML=parentnode.innerHTML+childHTML



}
function del(dd){
    
    axios.get("https://crudcrud.com/api/96602dac8ca840e0bd42940cfc7af4de/todo")
    .then((responses)=>{
        for(let i=0;i<responses.data.length;i++){
            if(responses.data[i].name==dd){
                let idd=responses.data[i]._id
                let bon="https://crudcrud.com/api/96602dac8ca840e0bd42940cfc7af4de/todo/"+idd
                function thokk(bon){return bon}
                
                
                
                axios.delete(thokk(bon)).then(()=>{
                    removeonscreen(dd)
            
                })
                

            }
            
        }
        
    })


}
function removeonscreen(ema){
    parentnode=documnent.getElementById("list")
    childnodeto=document.getElementById(ema)
    parentnode.removeChild(childnodeto)
    


}
function com(ema){
    parentnode=document.getElementById("list")
    childnote=document.getElementById(ema)
    childnote.innerHTML=childnote.innerHTML+"Finished"

}

