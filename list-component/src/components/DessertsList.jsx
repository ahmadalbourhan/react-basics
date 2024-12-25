export default function DessertsList(props) {
  const { data } = props;

  const sortCalorieDessert = data
    .filter((cal) => cal.calories < 500)
    .sort((cal1, cal2) => cal1.calories - cal2.calories)
    .map((data) => (
      <li key={data.name}>
        {data.name} - {data.calories} cal
      </li>
    ));

  return <ul>{sortCalorieDessert}</ul>;
}
