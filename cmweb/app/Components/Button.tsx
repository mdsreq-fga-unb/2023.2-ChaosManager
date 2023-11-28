export default function Button(props: any) {
  return (
    <button className={props.classe} type="submit">
      {props.valor}
    </button>
  );
}
