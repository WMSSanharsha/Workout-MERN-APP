import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "UseWorkoutsContext must be used inside the WorkoutContextProvider"
    );
  }

  return context;
};
