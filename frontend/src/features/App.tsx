import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import InteractiveContainer from '../components/InteractiveContainer';
import BackgroundTool from '../sections/BackgroundTool';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import LayoutTool from '../sections/LayoutTool';
import Preview from '../sections/Preview';
import TextTool from '../sections/TextTool';
import { helloWorld, selectHello } from './appSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const hello = useAppSelector(selectHello);

  useEffect(() => {
    dispatch(helloWorld());
  }, []);

  return (
    <>
      <Header />
      <InteractiveContainer>
        <Preview />
        <BackgroundTool />
        <LayoutTool />
        <TextTool />
      </InteractiveContainer>
      <Footer />
    </>
  );
};

export default App;
