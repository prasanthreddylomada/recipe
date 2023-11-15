import HomePage from './HomePage';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeInfo from './RecipeInfo';

function App() {
  
  const theme = {
    colors: {
      heading: "rgb(3 3 3)",
      text: "rgba(3 ,3, 3, 1)",
      white: "#fff",
      black: " #212529",
      button: "#080a0b"
    },
    media: {
      mobile: "768px",
      tab: "1108px"
    },
  };

  const recipes = [
    {
      id: 1,
      name: 'Recipe 1',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C','Ingredient X', 'Ingredient Y', 'Ingredient Z'],
    },
    {
      id: 2,
      name: 'Recipe 2',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient X', 'Ingredient Y', 'Ingredient Z'],
    },
    {
      id: 3,
      name: 'Recipe 3',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'],
    },
    {
      id: 4,
      name: 'Recipe 4',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient X', 'Ingredient Y', 'Ingredient Z'],
    },
    {
      id: 5,
      name: 'Recipe 5',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'],
    },
    {
      id: 6,
      name: 'Recipe 6',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient X', 'Ingredient Y', 'Ingredient Z'],
    },
    {
      id: 7,
      name: 'Recipe 7',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'],
    },
    {
      id: 8,
      name: 'Recipe 8',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient X', 'Ingredient Y', 'Ingredient Z'],
    },
    {
      id: 9,
      name: 'Recipe 9',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'],
    },
    {
      id: 10,
      name: 'Recipe 10',
      image: 'https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
      ingredients: ['Ingredient X', 'Ingredient Y', 'Ingredient Z'],
    },
    // Add more recipes as needed
  ];


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage theme={theme}/>} />
          <Route path='/home' element={<HomePage theme={theme} recipes={recipes}/>} />
          <Route path='/recipe/:id' element={<RecipeInfo recipes={recipes} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
