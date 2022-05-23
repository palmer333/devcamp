var arrMen = [];

axios.get("homework1-4.json").then(function (response) {
    var res = response.data;
    const re = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;

    arrMen = res.filter(word => {
        return word.gender == "male" && word.friends.length >= 2
    });

    arrMen = arrMen.map(word => {
        return {
            name: word.name, gender: word.gender, company: word.company, email: word.email, friends: word.friends,
            balance: (parseFloat(word.balance.replace("$", "").replace(",", "")) / 10).toString().replace(re, ",").replace("", "$")
        }
    });

    const friend = (x) => {
        let nameFriend = '';
        for (let i=0; i < arrMen[x].friends.length; i++) {
            nameFriend += `<li>${arrMen[x].friends[i].name}</li>`;
        }
        return nameFriend;
    };


    let content = document.getElementById('content')

    for (let i=0; i< arrMen.length; i++) {

        content.innerHTML += `<tr><td>${arrMen[i].name}</td><td>${arrMen[i].gender}</td>
        <td>${arrMen[i].company}</td><td>${arrMen[i].email}</td><td><ul>${friend(i)}</ul></td>
        <td>${arrMen[i].balance}</td></tr>`
    };  
});