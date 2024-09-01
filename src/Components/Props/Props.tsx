interface Personne  {
    nom: string;
    age?: number;
}



// const Affichage2 = () => {
//      const personne: Personne = {
//         nom: "Doe",
//         age: 25
//     }
//     return (
//         <div>
//             <h1>Bonjour {personne.nom}</h1>
//             <h2>Vous avez {personne.age}ans</h2>
//         </div>
//     )
// }

// export default Affichage2;

const Affichage = ({nom, age}:Personne) => {
   
    return (
        <div>
            <h1>Bonjour {nom}</h1>
             {age && (
            <h2>Vous avez {age}ans</h2>
        )}
        </div>
    )
}

export default Affichage;