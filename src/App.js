import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { TextContextProvider } from './context/TextContext';
import { ImgContextProvider } from './context/ImgContext';
import { HolidaysContextProvider } from './context/holidaysContext';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  hight: '100vh',
}

const App = () => {
  return (
    <div style={wrapper}>
      <HolidaysContextProvider>
        <ImgContextProvider>
          <TextContextProvider>
            <Header />
            <Card />
            <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </HolidaysContextProvider>
    </div >
  );
}

export default App;
