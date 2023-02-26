import React, { useEffect } from 'react';
import RatioTool from 'sections/RatioTool';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import InteractiveContainer from '../components/InteractiveContainer';
import BackgroundTool from '../sections/BackgroundTool';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Preview from '../sections/Preview';
import TextTool from '../sections/TextTool';

const App = () => {
  return (
    <>
      <Header />
      <InteractiveContainer>
        <Preview />
        <RatioTool />
        <BackgroundTool />
        <TextTool />
      </InteractiveContainer>
      <Footer />
    </>
  );
};

export default App;
