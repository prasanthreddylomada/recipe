// RecipeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeInfo = ({ recipes }) => {
  const { id } = useParams();

  // Find the recipe with the matching id
  const recipe = recipes.find((recipe) => recipe.id.toString() === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <div>Main Ingredients: {recipe.ingredients.join(', ')}</div>
      {/* Add more details as needed */}
    </div>
  );
};

export default RecipeInfo;
