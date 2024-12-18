import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

function WorkoutForm() {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const workout = { title, load, reps };
    const response = await fetch("http://localhost:4000/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // My Backend POST handle Response
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      // Reset Form
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("New Workout Added");
      dispatch({ type: "CREATE_WORKOUT", payload: data });
    }
  }
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label>Load (in Kg):</label>
      <input
        type="number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
      />
      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => {
          setReps(e.target.value);
        }}
        value={reps}
      />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
