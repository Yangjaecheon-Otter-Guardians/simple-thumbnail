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
        <BackgroundTool />
        <TextTool />
      </InteractiveContainer>
      <Footer />
    </>
  );
};

export default App;
