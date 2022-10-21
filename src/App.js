import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { TextContext } from './context/TextContext';
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
          <TextContext>
            <Header />
            <Card />
            <Footer />
          </TextContext>
        </ImgContextProvider>
      </HolidaysContextProvider>
    </div >
  );
}

export default App;
