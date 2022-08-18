import { useEffect, useRef, useState } from "react";
import "./App.css";
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

  useEffect(() => {
    setPeopleList(peopleGraph.current.getVertexes());
  }, [peopleGraph]);

  return (
    <div className="App flex flex-col gap-20 h-screen">
      <header className="text-2xl sm:text-3xl font-semibold p-2  bg-gradient-to-r from-cyan-100 to-green-100 ">
        <h1 className=" text-cyan-900">Connections</h1>
      </header>
      <AddPeople
        peopleGraph={peopleGraph.current}
        setPeopleList={setPeopleList}
      />
      <AddRelation peopleGraph={peopleGraph.current} peopleList={peopleList} />
      <AddNewRelation />
      <ConnectionFind
        peopleGraph={peopleGraph.current}
        peopleList={peopleList}
      />
    </div>
  );
}

export default App;
