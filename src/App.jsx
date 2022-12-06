import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import NoayFoundPage from './pages/NoayFoundPage';



function App() {

  const [text, setText] = useState(false)

  const handleFocus = () => {
   {}

     }
  

  return (
    <div className="wrapper">
      <div className="home-content">
        <h2>Cover</h2>

        <div className="navLink">
<Link onFocus= {handleFocus} className='block home' to = "/">Home</Link>
 <Link className='block Features' to="/posts">Features</Link>
<Link className=' block Contact'  to="/contact">Contact</Link> 
       
        </div>
      </div>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<BlogPage />} />
        <Route path='/contact' element={<AboutPage />} />
        <Route path='*' element={<NoayFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
