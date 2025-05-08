import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import { getEmotionImage } from './util/get-emotion-images';
import Button from './components/Button';
import Header from './components/Header';



// 1. '/' : 모든 일기를 조회하는 Home 페이지
// 2. '/new' : 새로운 일기를 작성하는 New 페이지
// 3. '/diary' : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
     <Header title={"Header"} leftChild={<Button text={"Left"}/>} rightChild={<Button text={"Right"}/>}/>
      {/* default 는 type값 작성하지 않아도 되긴하지만, Button_undefined 이렇게 작성되어서 렌딩됨 */}
      <Button text={"123"} onClick={()=>{console.log("클릭");}}/>
      <Button text={"123"} type={"POSITIVE"} onClick={()=>{console.log("클릭");}}/>
      <Button text={"123"} type={"NAGATIVE"} onClick={()=>{console.log("클릭");}}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
