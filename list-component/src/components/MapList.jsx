import { Fragment } from "react";
import { people } from "../assets/data.js";
import { getImageUrl } from "../assets/utils.js";

export default function List() {
  const listItems = people.map((person) => (
    <Fragment key={person.id}>
      <div className="fragment">
        <img src={getImageUrl(person)} alt={person.name} />
        <h1>{person.name}</h1>
        <p>{person.accomplishment}</p>
      </div>
    </Fragment>
  ));

  return <ul>{listItems}</ul>;
}
