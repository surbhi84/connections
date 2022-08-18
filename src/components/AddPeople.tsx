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
    <div className="flex flex-row justify-center gap-5">
      <input
        className=" outline-none border-2 rounded-sm border-cyan-900 px-1 "
        placeholder="type name"
        value={personName}
        onChange={(e) => setPersonName(e.target.value)}
      />
      <button
        className="px-5 p-1 rounded-sm bg-cyan-100 hover:bg-cyan-50 border hover:bg-gradient-to-r from-cyan-100 to-green-50"
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
