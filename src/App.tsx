import Header from "./components/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutProject from "./components/Pages/about/AboutProject";
import PostsRouter from "./components/Pages/posts/PostsRouter/PostsRouter";


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <div className="container my-5">

          <Routes>
            <Route path="/" element={<AboutProject />} />
            <Route path="/posts/*" element={<PostsRouter />}></Route>
          </Routes>
        </div>



      </BrowserRouter>
    </>
  );
}

export default App;
