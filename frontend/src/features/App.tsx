import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { helloWorld, selectHello } from "./appSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const hello = useAppSelector(selectHello);

  useEffect(() => {
    dispatch(helloWorld());
  }, []);

  return <div className="bg-black">App {hello}</div>;
};

export default App;
