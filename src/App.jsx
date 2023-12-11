import "./App.css";
import IdCard from "./components/IdCard";

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        birth={new Date("1988-05-11")}
      />
      <IdCard
        className='idCard'
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        birth={new Date("1992-07-14")}
      />
    </div>
  );
}

export default App;
