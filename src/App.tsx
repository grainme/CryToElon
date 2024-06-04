import FirstStats from "./comps/firstStats";
import Footer from "./comps/footer";
import Header from "./comps/header";
import SecondStats from "./comps/secondStats";
import SubHeader from "./comps/subHeader";

function App() {
  return (
    <div className="bg-[#ffffff] pt-[2rem] px-[10rem] flex flex-col">
      <Header />
      <SubHeader />
      <FirstStats />
      <SecondStats />
      <Footer />
    </div>
  );
}

export default App;
