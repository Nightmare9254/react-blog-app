export function fetchSingleUser(value,setUser,setIsLoad){
    fetch(`https://jsonplaceholder.typicode.com/users/?username=${value}`)
                        .then(res => res.json())
                        .then(json => setUser(json))
                        setIsLoad(true)
}