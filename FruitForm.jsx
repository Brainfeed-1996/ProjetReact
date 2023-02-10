import { useState } from "react/cjs/react.production.min";

export default function FruitForm({handleAdd})
    //state
    const [nouveauFruit, setNouveauFruit] = useState("");
    //Comportements
    const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputRef.current.value);
    const id = new Date().getTime()
    const nom = nouveauFruit
    const fruitAAjouter = { id, nom }
    //fruitsCopy.push({ fruitAAjouter })
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };
  const handleChange = (event) =>{
    setNouveauFruit(event.target.value);
  }
    //Affichage (render)
    return ( 
        <form action="submit" onSubmit={handleSubmit}>
            <input
            value={nouveauFruit}
            type="text"
            placeholder="Ajoutez un fruit..."
            onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    );
}
