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
      <InteractiveContainer>
        <Preview previewRef={previewRef} />
        <RatioTool />
        <BackgroundTool />
        <TextTool />
        {/* <DownloadButton previewRef={previewRef} /> */}
      </InteractiveContainer>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
