export default function Link(props) {
  return (
    <a className="button" href={props.url} target="_blank" alt={`link to ${props.name} website`}>
      {props.name}
    </a>
  );
}
