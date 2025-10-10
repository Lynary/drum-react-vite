import "./App.css";
import { Header } from "./components/Header/Header";
import { Drum } from "./components/drums/Drum";

function App() {
  return (
    <>
      <Header />
      <Drum keyButton="w">w</Drum>
      <Drum keyButton="a">a</Drum>
      <Drum keyButton="s">s</Drum>
      <Drum keyButton="d">d</Drum>
      <Drum keyButton="j">j</Drum>
      <Drum keyButton="k">k</Drum>
      <Drum keyButton="l">l</Drum>
    </>
  );
}

export default App;
