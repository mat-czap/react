import React, { useState, useReducer, useEffect, useRef } from 'react';
import styled, {keyframes} from 'styled-components';
import _ from 'lodash';


const StyledHook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 350px;
  background-color: ${({ theme }) => theme.grey200};
  border-radius: 20px;
  margin: 10px 0 50px 0;
  padding-top: 20px;
  border-radius: 50px;

  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const Item = styled.div`
  
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  background: ${({ theme }) => theme.grey200};
  box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;
  position: relative;
  transform-origin: top left;
  transition: transform .5s;
   }

:hover {
opacity: 0.8;
z-index: 10;
transform: rotate(2deg) ;
}
`;

const ButtonWrapper = styled.div`
  width: 200px;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  margin-top: 20px;
`;

const MyButton = styled.button`
  padding: 0 20px 0;
  background-color: black;
`;

const reducer = (state, action) => {
  // if (action.type === 'inc') {
  //   return {
  //     ...state,
  //     myHumor: 'ok',
  //     value: state.value + 1,
  //   };
  // }
  // if (action.type === 'dic') {
  //   return {
  //     ...state,
  //     myHumor: 'bad',
  //     value: state.value - 1,
  //   };
  // }
  if (action.type === 'newItem') {
    const sizeObj = _.size(state.toDo);
    const ID = Math.random()
      .toString(36)
      .substr(2, 9);
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    console.log(time);
    return {
      ...state,
      toDo: [...state.toDo, { text: action.text, ready: false, idItem: ID }],
      value: state.value + 1,
    };
  }
  if (action.type === 'ready') {
    return {
      ...state,
      toDo: state.toDo.map((el, idx) => (idx === action.idItem ? { ...el, ready: !el.ready } : el)),
    };
  }
  if (action.type === 'delete') {
    console.log(state.toDo);
    console.log(`rozmiar obiektu.toDo: ${_.size(state.toDo)}, wartosc state.value ${state.value}`);

    return {
      ...state,
      toDo: state.toDo.filter(idx => idx.idItem !== action.id),
      value: state.value - 1,
    };
  }
};
export const PlayHooks = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0, myHumor: 'ok', toDo: [] });
  const [text, changeText] = useState('');

  
  const { value, myHumor, toDo } = state;


  return (
    <>
      <StyledHook>
        <h1 className="title is-3"> The number of tasks to do: {value}</h1>

        
        <br />

        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch({ type: 'newItem', text });
            changeText('');
          }}
        >
          <div className="control">
            <input
              onChange={e => changeText(e.target.value)}
              className="input  is-rounded is-large"
              type="text"
              placeholder="add  task"
            />
          </div>
          <hr />
        </form>

        {/* <ButtonWrapper>
          <MyButton
            className="button is-large is-warning  "
            onClick={() => dispatch({ type: 'inc' })}
          >
            +
          </MyButton>

          <MyButton
            className="button is-large is-warning  "
            onClick={() => dispatch({ type: 'dic' })}
          >
            -
          </MyButton> 
         </ButtonWrapper> */}

        <h3 className="title is-5">{text}</h3>
      </StyledHook>
      <div>
        {/* <pre>{JSON.stringify(toDo, null, 3)}</pre> */}
        <ul>
          {toDo.map((item, id) => (
            <Item
              key={item.text}
              className="notification"
              // style={{ textDecoration: item.ready ? 'line-through' : '' }}
            >
              <button
                onClick={() => dispatch({ type: 'delete', id: item.idItem })}
                className="delete"
              />

              <h3 className="title is-5">{item.text}</h3>
            </Item>
          ))}
        </ul>
      </div>
    </>
  );
};
