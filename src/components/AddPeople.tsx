import { useState } from "react";
import Graph from "../graph";

export const AddPeople = ({
  peopleGraph,
  setPeopleList,
}: {
  peopleGraph: Graph;
  setPeopleList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [personName, setPersonName] = useState("");

  function addPerson(name: string) {
    peopleGraph.addVertex(name);
    console.log(peopleGraph.getVertexes(), "paye");
    setPeopleList(peopleGraph.getVertexes());
    console.log(peopleGraph.adjacencyList, "daye");
    setPersonName("");
  }

  return (
    <div>
      <input
        placeholder="type name"
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
      />
      <button
        className=""
        onClick={() => {
          if (personName.length > 2) addPerson(personName);
          else alert("Please enter valid inputs!");
        }}
      >
        Add Person
      </button>
    </div>
  );
};
