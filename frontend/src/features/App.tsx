import DivideLine from 'components/common/DivideLine';
import DownloadButton from 'components/DownloadButton';
import { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import RatioTool from 'sections/RatioTool';
import InteractiveContainer from '../components/InteractiveContainer';
import BackgroundTool from '../sections/BackgroundTool';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Preview from '../sections/Preview';
import TextTool from '../sections/TextTool';

const App = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <Preview previewRef={previewRef} />
      <InteractiveContainer>
        <RatioTool />
        <BackgroundTool />
        <TextTool />
        <DownloadButton previewRef={previewRef} />
      </InteractiveContainer>
      <ToastContainer />
      <DivideLine />
      <Footer />
    </>
  );
};

export default App;
