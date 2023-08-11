import React,{ useEffect }  from 'react';
import axios from 'axios';
import './App.css';
import { fetchStart, fetchSuccess } from './actions/actions';
import { connect } from 'react-redux';

function App(props) {
  const {data, isFetching,} = props;

  useEffect(()=> {
    fetchStart();
    axios.get('https://catfact.ninja/fact')
      .then(res => {
        console.log(res.data.fact);
        fetchSuccess(res.data.fact);
      })
  }, []);
  
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <div>
        
      </div>
      <button >Generate</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(App);