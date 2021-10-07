
let form = document.getElementById('testForm');

let users = {}


form.addEventListener('submit', (event) => {
// don't forget the defalt behavior of HTML to reload
    event.preventDefault();
    console.log(event);
    let name = event.path[0][0].value;
    let wishes = event.path[0][1].value;
    console.log(`User form information: ${name} ${wishes}`)
    // save username data
    if (users[name]){
    // display welcome back message in html
    } else{
        // display welcome new user message
        // add user to users object
        users[name] = [];
    }

    // make the API call happen
    loadData(wishes, name);
    console.log(users);

    // display the new facts
});

// make the api call happen with AXIOS
let getData = async () => {
    console.log(input);
    let thing = 'fact';
    let response = await axios.get(`https.//catfact.ninja/fact/${thing}`);
    return response.data.fact
}

let loadData = async (input) => {
    let catFact = await getData(input);
    // once we have the data from getData, put it in the HTML
    users[user].push(catFact); // here we are accessing the info the user put in lines 3-19
    let html = `<h3 id="#newfact">${catFact}</h3>`;
    // document.body.append(html); //OR
    document.querySelector('#ignore_this_form').insertAdjacentHTML('afterend', html);
}

let x = loadData();
console.log(x);

