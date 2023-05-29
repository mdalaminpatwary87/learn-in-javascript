console.clear();
// console.log(window);

// fetch('https://jsonplaceholder.typicode.com/posts/101')
// .then((res) => res.json())
// .then((res) => console.log(res))

//  get
fetch('https://jsonplaceholder.typicode.com/posts/')
.then((res) => {
    if(!res.ok){
        let message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) => console.log(res))
.catch((error) => console.log(error));

// create
fetch('https://jsonplaceholder.typicode.com/posts/',{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((res) => {
    if(!res.ok){
        let message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) => console.log(res))
.catch((error) => console.log(error));

// Updating
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((res) => {
    if(!res.ok){
        let message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) => console.log(res))
.catch((error) => console.log(error));

// Patching 
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((res) => {
    if(!res.ok){
        let message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json()
})
.then((res) => console.log(res))
.catch((error) => console.log(error));

// Deleting 



/*asyn await

*/


