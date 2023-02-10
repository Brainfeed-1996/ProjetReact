import { useState } from "npm i --save-dev @types/react";
import { useRef } from "react/cjs/react.production.min";

function App() {
  //state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("Sam");
  //const inputRef useRef();
  //Comportements
  const handleDelete = (id) => {
    console.log(id);
    //1. Copie du state
    const fruitsCopy = [...fruits];
    //2. Manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3. Modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert("handleSubmit");
    //console.log(inputRef.current.value);
  };
  //Affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button onClick={() => handleDelete(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajoutez un fruit..."
        />

        <button>Ajouter +</button>
      </form>
    </div>
  );
}
export default App;

//Gestion du formulaire
//1. Création du formulaire
//2. Soumission du formulaire
//3. Collecte des donnéées du formulaire
//3.a Méthode 1: documentGetElementById "React"
