function Deep(props) {
  console.log(props);
  const { firstName, lastName } = props;
  return (
    <div>
      {firstName} {lastName}
    </div>
  );
}

export default Deep;
