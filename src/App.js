import Header from "./Components/Header/Header";
import MainPage from "./Components/Pages/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import LoginModal from "./Components/LoginModal/LoginModal";

function App() {
  return (
    <div className="App">
      <LoginModal/>
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
