// from Dave Gray JavaScript Full Course for Beginners at https://www.youtube.com/watch?v=EfAl9bwzVZk

// promises

// either pending, fulfulled, or rejected

        /* const myPromise = new Promise((resolve, reject) => {
            const error = false;
            if (!error) {
                resolve('yes! the promise resolved!');
            } else {
                reject('no! it was rejected!');
            }
        });

        myPromise
        .then(value => {
            return value + 1;
        })
        .then(newValue => {
            console.log(newValue);
        })
        .catch(err => {
            console.log(err);
        });

        const myNextPromise = new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve("myNextPromise resolved!");
            }, 3000);
        });

        myNextPromise.then(value => {
            console.log(value);
        });

        myPromise.then(value => {
            console.log(value);
        }); */

// pending

        /* const users = fetch("https://jsonplaceholder.typicode.com/users");

        console.log(users);

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                data.forEach(user => {
                    console.log(user);
                })
            }); */

// Async / Await

        /* const myUsers = {
            userList: []
        }

        const myFunction = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonUserData = await response.json();
            return jsonUserData;
        }

        myFunction();

        const anotherFunction = async () => {
            const data = await myFunction();
            myUsers.userList = data
            console.log(myUsers.userList);
        }

        anotherFunction(); */

// workflow function

        /* const getAllUserEmails = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonUserData = await response.json();
            
            const userEmailArray = jsonUserData.map(user => {
                return user.email;
            });

            postToWebPage(userEmailArray);
        }

        const postToWebPage = (data) => {
            console.log(data);
        }

        getAllUserEmails(); */

// second parameter of fetch is an object

        /* const getDadJoke = async () => {
            const response = await fetch("https://icanhazdadjoke.com/", {
                method: "GET",
                headers: {
                    Accept: "application/json"
                    // change to "text/plain"
                }
            });
                const jsonJokeData = await response.json();
                            // change to response.text();
            
                console.log(jsonJokeData);
        } 

        getDadJoke(); */

// post

            /* const jokeObject = {
                id: "RZv4h3gV0g",
                joke: "Is the pool safe for diving? It deep ends."
            }

            const postData = async (jokeObj) => {
                // fetch should include https:// bin api
                const response = await fetch("/data/01_data.json", {
                    method: "POST",
                    headers: {
                        Accept: "application/json"
                        // change to "text/plain"
                    },
                    body: JSON.stringify(jokeObj)
                });
                    const jsonResponse = await response.json();
                                // change to response.text();
                
                    console.log(jsonResponse);
            }

            postData(jokeObject); */