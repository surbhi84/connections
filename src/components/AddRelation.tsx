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
    peopleGraph.addEdge(p1, p2);
  }

  return (
    <div>
      <label>
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
      <label>
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
      <button onClick={() => addRelationship(person1, person2)}>
        Add relationship as Friends
      </button>
    </div>
  );
};
