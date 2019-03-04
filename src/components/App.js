import React, { Component } from 'react';
import Recipe from './Recipe'
import Navigation from './Navigation'


class App extends Component {
  constructor(props) {
    super(props);
      this.selectNewRecipe = this.selectNewRecipe.bind(this);
      this.state = {
        recipes: [
          {
          title: 'Zucchini Nacho Chips',
          ingredients:[
            '1 large zucchini',
            '1 tbs taco seasoning',
            'Coconut Oil for frying'
          ],
          steps: [
            'Cut the zucchini into thin strips using a mandolin',
            'Place slices in colander over the sink and sprinkle with lots of salt. Let sit for 5 minutes then press out water',
            'Heat the oil in a fryer or pan to 350 degrees F.',
            'Drop the sliced zucchini into the hot oil. Working in batches of about 20 chips at a time.',
            'Once the zucchini turn golden brown, remove from fryer and place onto paper towel.',
            'Sprinkle with taco seasoning and enjoy!'
          ],
          id: 'chips'
        },
        {
        title: 'Fried Salmon with Asparagus',
          ingredients:[
            '8 oz. green asparagus',
            '3 oz. butter',
            '9 oz. salmon, in pieces',
            'salt and pepper'
          ],
          steps: [
            'Rinse and trim the asparagus.',
            'Heat up a hearty dollop of butter in a frying pan where you can fit both the fish and vegetables.',
            'Fry the asparagus over medium heat for 3-4 minutes. Season with salt and pepper. Gather everything in one half of the frying pan.',
            'If necessary, add more butter and fry the pieces of salmon for a couple of minutes on each side. Stir the asparagus every now and then. Lower the heat towards the end.',
            'Season the salmon and serve with the remaining butter.'
        
          ],
          id: 'salmon'
        },
      ],
      selectedRecipe: null
      }
    
  }
selectNewRecipe(recipeId){
  if(recipeId) {
    this.setState({
      ...this.state,
      selectedRecipe: recipeId
    });
  }
}

  render() {

    let recipeToSelect;
    if(this.state.selectedRecipe) { 
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
      if(filteredRecipes.length > 0) { 
        recipeToSelect = filteredRecipes[0];
      }
    }
    return (
      <div className="App">
        <aside className='sidebar'>
          <h1 className='sidebar__title'>The Art of Keto</h1>
        <Navigation 
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
        {
          recipeToSelect ? 
            <Recipe
            ingredients={recipeToSelect.ingredients}
            steps={recipeToSelect.steps}
            title={recipeToSelect.title}
            />
            :
            null
        }
      </div>
    );
    }

    componentDidMount() {
      const recipeToShow = this.state.recipes[0].id || null;
      this.setState({
        ...this.state,
        selectedRecipe: recipeToShow
      });
    }
  }


export default App;
