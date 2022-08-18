import { useState } from "react";

export const AddNewRelation = () => {
  const [relationship, setRelationship] = useState("");
  return (
    <div>
      <input
        placeholder="type new relationship"
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
      />
      <button onClick={() => setRelationship("")}>Add new relationship</button>
    </div>
  );
};
