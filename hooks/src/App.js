import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterUseEffect from './components/ClassCounterUseEffect';
import UseEffectOne from './components/UseEffectOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContaier from './components/MouseContaier';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import React, { useReducer } from 'react';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import MultipleUseReducer from './components/MultipleUseReducer';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import DataFetchingRed from './components/DataFetchingRed';
import DataFetchingRedTwo from './components/DataFetchingRedTwo';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CustomCounterOne from './components/CustomCounterOne';
import CustomCounterTwo from './components/CustomCounterTwo';
import UserForm from './components/UserForm';


// export const UserContext = React.createContext()

// export const ChannelContext = React.createContext()   for context

// export const CountContext = React.createContext()


// from this to end for useReducer with useContext...
// const initialState = 0
// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// } //...


function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      <UserForm/>
      {/* <CustomCounterTwo/>
      <CustomCounterOne/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <ClassTimer/> */}
      {/* <HookTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter /> */}
      {/* <ParentComponent/> */}
      {/* <DataFetchingRedTwo/> */}
      {/* <DataFetchingRed/> */}
      {/* Count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      </div>
    </CountContext.Provider> */}
       {/* <MultipleUseReducer/>  */}
       {/* <CounterTwo/> */}
       {/* <CounterOne/> */}
       {/* <UserContext.Provider value={'Swetha'}>
    //     <ChannelContext.Provider value={'Codevolution'}>
    //       <ComponentC/>
    //     </ChannelContext.Provider>
    //   </UserContext.Provider> */}
       {/* <DataFetching/> */}
       {/* <IntervalHookCounter/> */}
       {/* <IntervalClassCounter/> */}
       {/* <MouseContaier/> */}
       {/* <HookMouse/> */}
       {/* <ClassMouse/> */}
       {/* <UseEffectOne/> */}
       {/* <ClassCounterUseEffect/> */}
       {/* <HookCounterFour/> */}
       {/* <HookCounterThree/> */}
       {/* <HookCounterTwo/> */}
       {/* <HookCounter /> */}
       {/* <ClassCounter/> */}
     </div>
  );
}

export default App;
