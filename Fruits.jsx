export default function Fruit({ fruitInfo, onFruitDelete }) {
  //state
  //const fruitInfo = props.fruitInfo
  //const onFruitDelete = props.onFruitDelete

  //Comportements

  //Affichage (render)
  return (
    <li>
      {fruitInfo.nom}{" "}
      <button onClick={() => onFruitDelete(props.fruitInfo.id)}>X</button>
    </li>
  );
}
