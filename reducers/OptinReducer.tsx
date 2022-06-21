const OptinReducer = (
    state: { lastname: string; firstname: string; email: string },
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case "setLastname":
        return { ...state, lastname: action.payload };
      case "setFirstname":
        return { ...state, firstname: action.payload };
      case "setEmail":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };
  
  export default OptinReducer;