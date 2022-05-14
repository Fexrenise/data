let post = document.querySelector('#post');
let comment = document.querySelector('#comment');
let photo = document.querySelector('#photo');
let table = document.querySelector('table');
post.addEventListener('click', (e) => {
    let photo = fetch('https://jsonplaceholder.typicode.com/posts');

    photo.then(response => response.json())
        .then(value => {
            value.forEach(element => {
                table.innerHTML += `
            <tbody>
            <tr>
              <th scope="row">${element.userId}</th>
              <td>${element.id}</td>
              <td>${element.title}</td>
              <td>${element.body}</td>
            </tr>
            </tbody>`
            });
        })
});

comment.addEventListener('click', (e) => {
    let photo = fetch('https://jsonplaceholder.typicode.com/comments');

    photo.then(response => response.json())
        .then(value => {
            value.forEach(element => {
                table.innerHTML += `
            <tbody>
            <tr>
              <th scope="row">${element.id}</th>
              <td>${element.name}</td>
              <td>${element.email}</td>
              <td>${element.body}</td>
            </tr>
            </tbody>`
            });
        })
});

photo.addEventListener('click', (e) => {
    let photoo = fetch('https://jsonplaceholder.typicode.com/photos/50');

    photoo.then(response => response.json())
        .then(value => {

            table.innerHTML += `
            <tbody>
            <tr>
              <th scope="row">${value.id}</th>
              <td>${value.title}</td>
              <td>${fetch(value.url).then(response => response.json())
                    .then(value => {
                        value
                    })}</td>
              <td>${fetch(value.thumbnailUrl).then(response => response.json())
                    .then(value => {
                        value
                    })}</td>
            </tr>
            </tbody>`

        })
});