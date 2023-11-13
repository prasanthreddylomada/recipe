import React, { Component } from 'react';
import profile from './images/Icon utensils.png';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: [],
      searchText: '',
      filteredOptions: [],
      allOptions: [
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
        { id: 3, value: 'Option 3' },
      ],
    };
  }

  handleSelectChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    this.setState({ selectedOptions: selectedValues });
  };

  handleSearchChange = (event) => {
    const searchText = event.target.value;
    const filteredOptions = this.state.allOptions.filter((option) =>
      option.value.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({ searchText, filteredOptions });
  };

  handleOptionSelect = (selectedOption) => {
    const selectedOptions = [...this.state.selectedOptions, selectedOption.value];
    this.setState({
      selectedOptions,
      searchText: '',
      filteredOptions: [],
    });
  };

  handleRemoveOption = (removedOption) => {
    const selectedOptions = this.state.selectedOptions.filter((option) => option !== removedOption);
    this.setState({ selectedOptions });
  };

  render() {
    const { theme } = this.props;
    const { searchText, filteredOptions, selectedOptions } = this.state;

    const styles = {
      topnavcontainer: {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        padding: '10px',
      },
      searchBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
      },
      searchBar: {
        width: '50%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      },
      dropdown: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '51%',
        maxHeight: '100px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: '0 0 5px 5px',
        zIndex: 1,
      },
      selectedOptionsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '5px',
      },
      selectedOption: {
        background: '#eee',
        borderRadius: '3px',
        padding: '3px 8px',
        margin: '2px',
        display: 'flex',
        alignItems: 'center',
      },
      removeOption: {
        marginLeft: '5px',
        cursor: 'pointer',
      },
    };

    return (
      <div>
        <div style={styles.topnavcontainer}>
          <div style={styles.searchBarContainer}>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={this.handleSearchChange}
              style={styles.searchBar}
            />
            {searchText && (
              <div style={styles.dropdown}>
                {filteredOptions.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => this.handleOptionSelect(option)}
                    style={{ padding: '10px', cursor: 'pointer' }}
                  >
                    {option.value}
                  </div>
                ))}
              </div>
            )}
            <div style={styles.selectedOptionsContainer}>
              {selectedOptions.map((option) => (
                <div key={option} style={styles.selectedOption}>
                  {option}
                  <span
                    onClick={() => this.handleRemoveOption(option)}
                    style={styles.removeOption}
                  >
                    &#x2715;
                  </span>
                </div>
              ))}
            </div>
          </div>
          <img src={profile} alt="profile image" />
        </div>
      </div>
    );
  }
}

export default HomePage;
