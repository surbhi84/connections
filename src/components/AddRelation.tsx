import { useState } from "react";
import Graph from "../graph";

export const AddRelation = ({
  peopleGraph,
  peopleList,
}: {
  peopleGraph: Graph;
  peopleList: string[];
}) => {
  const [person1, setPerson1] = useState("");
  const [person2, setPerson2] = useState("");

  function addRelationship(p1: string, p2: string) {
    if (p1 === p2) alert("Ooops same person is selected in both options!");
    else peopleGraph.addEdge(p1, p2);
  }

  return (
    <div className="flex flex-row justify-center gap-5">
      <label className="flex gap-2">
        Select one person
        <select
          name="personOne"
          id="person1"
          onChange={(e) => setPerson1(e.target.value)}
        >
          {peopleList.map((vertex) => (
            <option key={vertex} value={vertex}>
              {vertex}
            </option>
          ))}
        </select>
      </label>

      <label className="flex gap-2">
        Select another person
        <select
          name="personTwo"
          id="person2"
          onChange={(e) => setPerson2(e.target.value)}
        >
          {peopleList.map((vertex) => (
            <option key={vertex} value={vertex}>
              {vertex}
            </option>
          ))}
        </select>
      </label>

      <button
        className="px-5 p-1 rounded-sm bg-cyan-100 hover:bg-cyan-50 border hover:bg-gradient-to-r from-cyan-100 to-green-50"
        onClick={() => addRelationship(person1, person2)}
      >
        Add relationship as Friends
      </button>
    </div>
  );
};
