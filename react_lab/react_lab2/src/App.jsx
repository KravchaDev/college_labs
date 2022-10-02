import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';
// TODO: Import IngredientList
import IngredientList from './IngredientList'

import StepsList from './StepsList'

function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        steps: [
            { name: 'Добавьте нарезанный картофель в кастрюлю с соленой водой.', prepared: false },
            { name: 'Вскипятите воду в кастрюле.', prepared: false },
            { name: 'Отварите картофель до готовности (около 15–20 минут).', prepared: false },
            { name: 'Очистите картофель.', prepared: false },
            { name: 'Поместите картофель обратно в кастрюлю.', prepared: false },
            { name: 'Добавьте масло, сливки, соль и перец по вкусу.', prepared: false },
            { name: 'Разомните картофель.', prepared: false },
            { name: 'Добавьте специи, масло и сливки по желанию.', prepared: false },
        ],
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
            
            <IngredientList ingredients={recipe.ingredients} />
            {/* TODO: Add StepList component */}
            <StepsList steps={recipe.steps} />
        </article>
    )
}

export default App;
