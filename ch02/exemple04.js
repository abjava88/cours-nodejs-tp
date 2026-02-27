fetch("https://jsonplaceholder.typicode.com/posts") // promises
  .then(response => response.json())
  .then(response => console.log("Liste des posts :", response))
  .catch(error => console.error("Erreur :", error));

const sayHello = async function () {    
    setTimeout(() => {
        console.log('Retard');
    },3000)
 return 'Hello';
};

const sayHello1 = function() {
 return new Promise((resolve, reject) => {
 resolve('Hello');
 });
}

const sayHello2 = function () {
 return Promise.resolve('Hello');
};

const message = await sayHello();
console.log(message);

  