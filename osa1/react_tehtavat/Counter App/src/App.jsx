const Moikka = ({ firstName, lastName, age }) => {
  
  const name = `${firstName} ${lastName}`;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <p>
      Terve {name} Mitä kuuluu?
      <br />
      Olet syntynyt todennäköisesti vuonna {bornYear()}
    </p>
  );
};

const App = () => {
  const frendit = [
    { firstName: 'Mikko', lastName: 'Meikäläinen', age: 17 },
    { firstName: 'Maija', lastName: 'Meikäläinen', age: 18 },
    { firstName: 'Meeri', lastName: 'Meikäläinen', age: 19 },
  ];

  return (
    <>
      <h1>Hello World!</h1>
      <Moikka
        firstName={frendit[0].firstName}
        lastName={frendit[0].lastName}
        age={frendit[0].age}
      ></Moikka>
      <Moikka
        firstName={frendit[1].firstName}
        lastName={frendit[1].lastName}
        age={frendit[1].age}
      ></Moikka>
      <Moikka
        firstName={frendit[2].firstName}
        lastName={frendit[2].lastName}
        age={frendit[2].age}
      ></Moikka>
    </>
  );
};
export default App;
