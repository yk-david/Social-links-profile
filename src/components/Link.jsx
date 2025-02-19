export default function Link(props) {
  return (
    <a className="button" href={props.url} target="_blank">
      {props.name}
    </a>
  );
}
