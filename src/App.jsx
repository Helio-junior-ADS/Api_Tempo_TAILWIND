import React, {useState}  from "react";
import fetchData from "./services/Api";
import Card from "./components/Card";
import initialData from "./halpers/initialData";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(initialData);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((res) => {           
      setData(res);
    });
  };
  console.log(data)
  return (
    <div className="flex flex-col w-full h-screen sm:justify-center  items-center p-4">      
      <form onSubmit={handleSubmit} className='fixed bottom-0 w-full flex p-4 sm:relative justify-center'>
        <input
          onChange={({ target: { value } }) => setCity(value)}
          value={city}
          className="p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]"
          type="text"
          placeholder="cidade"
        />
        <button
          type="submit"
          className="bg-blue-700 p-3 rounded-lg ml-3 text-white font-bold"
        >
          SEARCH
        </button>
      </form>      
      <Card data={data} name={"Hélio"}/>      
    </div>
  );
}

export default App;
