// let leeftijd: number;
// leeftijd = 10;
// let increment = 5;
// let sum = leeftijd + increment;
// console.log('Sum = ' + sum);

// let x: number = 5;
// let y: number = 'a'; // transpiled to js, die kent geen types en het wordt uitgevoerd
// let sum = x + y;
// console.log('sum = ' + sum);

// interface Framework {
//     id: number;
//     name: string;
// }
//
// let frameworks: Framework[];
//
// frameworks = [{id: 1, name: "waar is het Framwork interface?"}]

class Persoon {
    getNaam(): string {
        return 'een naam';
    }
}

let persoon = new Persoon();

console.log(persoon.getNaam());

let f1 = () => {
    //we doen hier z.g. synchrone calls
    console.log('start functie');
    console.log('doe zinvol werk');
    console.log('einde functie');

};

let f2 = f1;

f2();

async function whatTheHeckIsAsync() {

}

