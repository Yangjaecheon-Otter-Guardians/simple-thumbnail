import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { helloWorld, selectHello } from './appSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const hello = useAppSelector(selectHello);

  useEffect(() => {
    dispatch(helloWorld());
  }, []);

  return <div>App {hello}</div>;
};

export default App;
