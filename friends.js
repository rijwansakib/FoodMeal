const friend=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayFriend(data))
}
friend();

const displayFriend = data =>{

    const friends=data.results;

    const friendElement=document.getElementById('friends-part')

    for(const friend of friends){

//gander
        const gender=document.createElement('h3');
        gender.innerText=`GENDER : ${friend.gender}`
        friendElement.appendChild(gender);
//name   
        const name=document.createElement('h3');
        name.innerText=`NAME : ${friend.name.title}  ${friend.name.first}   ${friend.name.last}`

        friendElement.appendChild(name);
//email
        const email=document.createElement('p');
        email.innerText=` EMAIL : ${friend.email}`
        friendElement.appendChild(email);
//cell
        const cell=document.createElement('h4');
        cell.innerText=` Cell Number : ${friend.cell}`
        friendElement.appendChild(cell);
// Location
        const Location=document.createElement('h4');
        Location.innerText=`Street Number : ${friend.location.street.number} Street Name : ${friend.location.street.name} `
        console.log(location);
        friendElement.appendChild(Location);



    }
}