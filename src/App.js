import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPostsControl from "./pages/AddPost/AddPostsControl";
import ListPostsControl from "./pages/ListPosts/ListPostsControl";
import "./styles/styles.css"

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<ListPostsControl/>}/>
    <Route path="/add-post" element={<AddPostsControl/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
