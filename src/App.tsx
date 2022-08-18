import { useRef, useState } from "react";
import "./App.css";

import Graph from "./graph";

function App() {
  const peopleGraph = useRef(new Graph());
  const [peopleList, setPeopleList] = useState<string[]>([]);

  let result = peopleGraph.current.shortestPathBfs("surbhi", "potato");

  console.log(peopleGraph.current, "result :", result);

  return (
    <div className="App ">
      <div className="">
        {/* <AddPeople
          peopleGraph={peopleGraph.current}
          setPeopleList={setPeopleList}
        />
        <AddRelation
          peopleGraph={peopleGraph.current}
          peopleList={peopleList}
        />
        <AddNewRelation />
        <ConnectionFind
          peopleGraph={peopleGraph.current}
          peopleList={peopleList}
        /> */}
      </div>
    </div>
  );
}

export default App;
