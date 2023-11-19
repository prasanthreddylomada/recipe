import React, { Component } from 'react';
import Select from 'react-select';

class AddRecipePopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeName: '',
      selectedIngredients: [],
      timeNeeded: '',
      process: '',
      precautions: '',
      allIngredients: [],
    };
  }
  componentDidMount() {
    // Call handleIngredients to populate allIngredients
    this.handleIngredients();
  }
  handleIngredients = ()=> {
    const  {ingredientsdata} = this.props
    this.setState({allIngredients:ingredientsdata})
  }

  handleRecipeNameChange = (event) => {
    this.setState({ recipeName: event.target.value });
  };

  handleIngredientsChange = (selectedIngredients) => {
    this.setState({ selectedIngredients });
  };

  handleTimeNeededChange = (event) => {
    this.setState({ timeNeeded: event.target.value });
  };

  handleProcessChange = (event) => {
    this.setState({ process: event.target.value });
  };

  handlePrecautionsChange = (event) => {
    this.setState({ precautions: event.target.value });
  };

  

  handleAddRecipe = () => {
    // Implement logic to add the recipe (e.g., API call or state update)
    const { recipeName, selectedIngredients, timeNeeded, process, precautions } = this.state;
    console.log('Adding recipe:', { recipeName, selectedIngredients, timeNeeded, process, precautions });

    // Close the popup
    this.handleClosePopup();
  };

  handleClosePopup = () => {
    this.setState({
      recipeName: '',
      selectedIngredients: [],
      timeNeeded: '',
      process: '',
      precautions: '',
    });
    this.props.onClosePopup();
  };

  render() {
    const { theme } = this.props;
    const { recipeName, selectedIngredients, timeNeeded, process, precautions, allIngredients } = this.state;

    const styles = {
    popupContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    padding: '40px',
    borderRadius: '5px',
    minWidth: '50%',
    textAlign: 'center',
    },
    title: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px',
    },
    inputField: {
    marginTop: '5px',
    marginBottom: '5px',
    fontSize: '20px',
    width: '100%',
    boxSizing: 'border-box',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    },
      selectContainer: {
        marginTop: '5px',
        marginBottom: '5px',
        width: '100%',
        textAlign: 'left',
      },
      textArea: {
        marginTop: '5px',
        marginBottom: '5px',
        fontSize: '20px',
        width: '100%',
        minHeight: '100px',
        boxSizing: 'border-box',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '10px',
      },
      addrecipebutton: {
        backgroundColor: theme.colors.button,
        color: theme.colors.white,
        width: '30%',
        minHeight: '40px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '15px',
      },
    };

    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }}>
        <div style={styles.popupContainer}>
          <div style={styles.title}>Create Recipe</div>
          <input
            style={styles.inputField}
            type="text"
            placeholder="Recipe name"
            value={recipeName}
            onChange={this.handleRecipeNameChange}
          />
          <div style={styles.selectContainer}>
            <Select
              isMulti
              options={allIngredients}
              value={selectedIngredients}
              onChange={this.handleIngredientsChange}
              placeholder="Select Ingredients"
            />
          </div>
          <input
            style={styles.inputField}
            type="text"
            placeholder="Time needed"
            value={timeNeeded}
            onChange={this.handleTimeNeededChange}
          />
          <textarea
            style={styles.textArea}
            placeholder="Process"
            value={process}
            onChange={this.handleProcessChange}
          />
          <textarea
            style={styles.textArea}
            placeholder="Precautions"
            value={precautions}
            onChange={this.handlePrecautionsChange}
          />
          <div style={styles.buttonContainer}>
            <button style={styles.addrecipebutton} onClick={this.handleAddRecipe}>
              Add Recipe
            </button>
            <button style={styles.addrecipebutton} onClick={this.handleClosePopup}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRecipePopup;
