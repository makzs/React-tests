import Student from "./Student";

function App() {
  

  return(
    <>
      <Student name="BobEsponja" age={"30"} isStudent={true}/>
      <Student name="PatrickEstrela" age={42} isStudent={false}/>
      <Student></Student>
    </>
  );

}

export default App
