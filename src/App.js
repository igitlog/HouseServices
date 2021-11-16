import Footer from "./components/Pages/common/Footer";
import Header from "./components/Pages/common/Header";
import './App.css';
import WorkWithUsersPageContainer from "./components/Pages/WorkWithUsersPage/WorkWithUsersPageContainer";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <WorkWithUsersPageContainer />
      <Footer />
    </div>
  )
}

export default App;
