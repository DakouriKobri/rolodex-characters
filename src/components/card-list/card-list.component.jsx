import Card from '../card/card.component';
import './card-list.styles.css';

export default function CardList({ characters }) {
  const renderedCharacters = characters.map((character) => (
    <Card key={character.id} {...character} />
  ));

  return <div className="card-list">{renderedCharacters}</div>;
}
