import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userTyping } from '../data/actions/actions.js';

import './InputComponent.css';

const InputComponent = () => {
   const [isInputActive, setIsInputActive] = useState(false);
   const inputRef = useRef(null);

   const dispatch = useDispatch();
   const names = useSelector(store => store.data.names);
   const inputValue = useSelector(store => store.input.userType);

   const handleChange = e => {
      dispatch(userTyping(e.target.value));
   };
   const handleAutoComplete = name => {
      dispatch(userTyping(name));
      setIsInputActive(false);
   };

   const getMatchingNames = names.filter(({ name }) =>
      inputValue !== ''
         ? name.toLowerCase().includes(inputValue.toLowerCase())
         : null
   );

   return (
      <div className='input-wrapper'>
         <input
            ref={inputRef}
            type='text'
            placeholder='Name'
            value={inputValue}
            onChange={handleChange}
            onFocus={() => setIsInputActive(true)}
         />
         {getMatchingNames.length > 0 && isInputActive ? (
            <ul className='input-autocomplete-list'>
               {getMatchingNames.map(({ name }) => (
                  <li onClick={() => handleAutoComplete(name)} key={name}>
                     {name}
                  </li>
               ))}
            </ul>
         ) : null}
      </div>
   );
};

export default InputComponent;
