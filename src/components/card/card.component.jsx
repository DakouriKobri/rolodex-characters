import './card.styles.css';

export default function Card(character) {
  return (
    <div className="card-container">
      <img
        alt="character"
        src={`https://robohash.org/${character.id}?set=set2&size=180x180`}
      />
      <h2>{character.name}</h2>
      <p>{character.email}</p>
    </div>
  );
}
