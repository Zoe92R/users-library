import { useEffect } from "react";
import { useDispatch } from "react-redux";

import UsersLibrary from "./pages/UsersLibrary/UsersLibrary";
import { getUsers } from "./users/usersSlice";
import "./App.css";
import { AppDispatch } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <UsersLibrary />;
}

export default App;
