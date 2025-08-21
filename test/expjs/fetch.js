
const getUser = async(id)=>{   
    try {
        const response = await fetch(`http://localhost/${id}`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

(async ()=>{
    const usersData = await Promise.all({
        //await getUser(1)
    })
    console.log(usersData)
})