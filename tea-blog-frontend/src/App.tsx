import ArticleList from './ArticleList';
import './css/App.css';
import Header from './Header';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleEdit from './ArticleEdit';
import ArticleView from './ArticleView';
import ArticleCreate from './ArticleCreate';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/articles/new" element={<ArticleCreate />} />
          <Route path="/articles/:articleId" element={<ArticleView />} />
          <Route path='/' element={<ArticleList />} />
          <Route path="/articles/:articleId/edit" element={<ArticleEdit />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
