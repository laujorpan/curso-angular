import { User } from './User';
import { Gender } from './User';

const paco = new User('Paco',30,Gender.Men);
const maria = new User('María',28,Gender.Woman);

paco.addBook({author:"uno",title:"un title"})
paco.addBook({author:"dos",title:"dos title"})
maria.addBook({author:"otro",title:"otro"})

console.log(`${paco.name} - books: ${paco.books}`);
console.log(`${maria.name} - books: ${maria.books}`);

