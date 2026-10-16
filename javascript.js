const baseurl = "https://6ad1ee2d66cd28aed82d5d55.mockapi.io/test/users";

// GET method:
async function getUsers(id){
    const res = await fetch(`${baseurl}/${id}`);
    const data = await res.json();
    console.log("GET:", data);
}
getUsers(3);

// POST method:
async function createUser(dats){
    const res = await fetch(`${baseurl}`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dats)
    });
    const data = await res.json();
    console.log("POST:", data);
}
const newUser = {
    name:"diwkk"
};
createUser(newUser);

// PUT method:
async function updateUser(data,id){
    const res = await fetch(`${baseurl}/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log("PUT:", result);
}
const updatedUser = {
    name:"diwkk"
};
updateUser(updatedUser,4);

// DELETE method:
async function deleteUser(id){
    const res = await fetch(`${baseurl}/${id}`,{
        method:"DELETE",
    });
    const data = await res.json();
    console.log("DELETE:", data);
}
deleteUser(5);