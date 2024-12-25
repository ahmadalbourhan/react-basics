import LikeButton from "./like-button";

function Header({ title }) {
  // console.log(props);
  // const { title } = props;

  return (
    <>
      <h1>{title}</h1>
      <h2>Develop. Preview. Ship.</h2>
    </>
  );
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="React" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
