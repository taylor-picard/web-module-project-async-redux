import React,{ useEffect }  from 'react';
import './App.css';
import { getFacts } from './actions/actions';
import { connect } from 'react-redux';


function App(props) {
  const {data, isFetching, getFacts} = props;

  useEffect(()=> {
    getFacts();
  }, []);
  
  const handleClick = () => {
    getFacts();
  }

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <div>
        {data}
      </div>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, {getFacts})(App);