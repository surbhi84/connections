import { useEffect, useState } from "react";
import Graph from "../graph";

export const ConnectionFind = ({
  peopleGraph,
  peopleList,
}: {
  peopleGraph: Graph;
  peopleList: string[];
}) => {
  const [person1, setPerson1] = useState("");
  const [person2, setPerson2] = useState("");
  const [res, setRes] = useState<string[]>([]);

  function findConnections(person1: string, person2: string) {
    let resultArray = peopleGraph.shortestPathBfs(person1, person2);
    setRes(resultArray);
  }

  return (
    <div>
      <label>
        Select Person One
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
        Relationship
        <select name="relation" id="relation">
          <option value={"friends"}> Friends</option>
        </select>
      </label>

      <label>
        Select Person Two
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
        onClick={() => findConnections(person1, person2)}
        disabled={person1 === person2}
      >
        Check connection
      </button>

      {res.length > 0 && res.reduce((acc, node) => node + " > " + acc, "")}
    </div>
  );
};
