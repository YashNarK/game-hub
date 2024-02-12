interface Action {
  type: "YES" | "NO";
}

const hasSearchInputReducer = (state: boolean, action: Action): boolean => {
  if (action.type === "YES") return true;
  if (action.type === "NO") return false;
  throw new Error(`Action not supported. Current state:${state}`);
};

export default hasSearchInputReducer;