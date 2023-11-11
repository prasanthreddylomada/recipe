import React, { Component } from 'react';
import utensilsIcon from './images/Icon utensils.png';
import cooking from './images/cooking.png'
class HomePage extends Component {
  render() {
    const { theme } = this.props;

    const styles = {
      topcontainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',

      },
      logoContainer: { 
        margin: '2% 0 0 5%', // top right bottom left
      },
      logo: {
        width: '20px',
        height: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '2% 5% 0 0',
      },
      button: {
        backgroundColor: theme.colors.button,
        color: theme.colors.white,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        
      },
      bottomcontainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5% 0',
      },
      column: {
        width: '40%',
        margin: '0 5%',
      },
      column1: {
        textAlign: 'left',
      },
      bottombuttoncontainer:{
        display:'flex',
        justifyContent:'space-evenly',
        marginTop:'2%'
      }
    };



    return (
      <div>
        <div style={styles.topcontainer}>
            <div style={styles.logoContainer}>
            <img
                src={utensilsIcon}
                alt="Logo"
                style={styles.logo}
            />
            </div>
            <div style={styles.buttonContainer}>
            <button style={styles.button}>Join Now</button>
            </div>
        </div>
        <div style={styles.bottomcontainer}>
            <div style={{ ...styles.column, ...styles.column1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '70px', fontFamily: 'Roboto' }}>
                    Discover Delicious Recipes: Your Ultimate Cooking
                </div>
                <div style={{ fontFamily: 'Roboto', fontSize: '20px', marginLeft: '2%', marginTop: '2%' }}>
                    Introducing the Ultimate Recipe App:Explore,Find,Cook and Share
                </div>
                <div style={styles.bottombuttoncontainer}>
                    <button style={{...styles.button,fontSize:'20px',paddingInline:'7%'}}>Get Started</button>
                    <button style={{...styles.button,fontSize:'20px'}}>Find Recipes</button>
                </div>
            </div>
            <div style={{ ...styles.column}}>
                <img
                    src={cooking} 
                />
            </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
