import { useRef, useState } from "react";
import "./App.css";

import { GoPerson } from "react-icons/go";
import { AddRelation } from "./components/AddRelation";
import { AddPeople } from "./components/AddPeople";
import { AddNewRelation } from "./components/AddNewRelation";
import { ConnectionFind } from "./components/ConnectionFind";
import Graph from "./graph";

function App() {
  const peopleGraph = useRef(new Graph());
  const [peopleList, setPeopleList] = useState<string[]>([]);

  peopleGraph.current.addVertex("surbhi");
  peopleGraph.current.addVertex("shivam");
  peopleGraph.current.addVertex("bubu");
  peopleGraph.current.addVertex("satyam");
  peopleGraph.current.addVertex("peetal");
  peopleGraph.current.addVertex("potato");

  peopleGraph.current.addEdge("surbhi", "bubu");
  peopleGraph.current.addEdge("surbhi", "shivam");
  peopleGraph.current.addEdge("bubu", "satyam");
  peopleGraph.current.addEdge("satyam", "peetal");
  peopleGraph.current.addEdge("peetal", "potato");

  return (
    <div className="App flex flex-col gap-14 h-screen">
      <header className="text-2xl sm:text-3xl font-semibold p-2  bg-gradient-to-r from-cyan-100 to-green-100 ">
        <h1 className="flex items-center justify-center text-cyan-900 gap-1">
          <img
            className="h-10 pt-2 rot"
            src="infinityLogo.svg
          "
            alt="logo"
          />
          Connections
        </h1>
      </header>
      <AddPeople
        peopleGraph={peopleGraph.current}
        setPeopleList={setPeopleList}
      />
      <AddRelation peopleGraph={peopleGraph.current} peopleList={peopleList} />

      <ConnectionFind
        peopleGraph={peopleGraph.current}
        peopleList={peopleList}
      />
      <footer className="flex items-center justify-center mt-auto gap-1 bg-cyan-100 p-2">
        Made by Surbhi Kukreti
        <GoPerson className="flex items-center  text-cyan-900 " />
      </footer>
    </div>
  );
}

export default App;
