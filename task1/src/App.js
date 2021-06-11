import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNames } from './data/actions/actions.js';

import LoadingIndicator from './LoadingIndicator';
import InputComponent from './InputComponent';

const App = () => {
   const isDataLoading = useSelector(store => store.data.isDataLoading);
   const names = useSelector(store => store.data.names);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchNames());
   }, []);
   return !isDataLoading && names !== undefined ? (
      <InputComponent />
   ) : (
      <LoadingIndicator />
   );
};

export default App;
