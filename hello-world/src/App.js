import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import Parent from './Components/Parent';
import UserGreeting from './Components/UserGreeting';
// import NameList from '. /Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Tables from './Components/Tables';
import PComp from './Components/PComp';
import ParentComp from './Components/ParentComp';
import RefDemo from './Components/RefDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CountreProp from './Components/CountreProp';
import {Func} from './Components/Func';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';
import React, {Component} from 'react';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Swetha">
        <ComponentC/>
      </UserProvider> */}
      {/* <Func name='sre' details='huwfb'/> */}
      {/* <CountreProp 
      render={(count, incrementCount) => (
      <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )}
      />
      <CountreProp 
      render={(count, incrementCount) => (
      <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      )}
      /> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'Swetha' : 'Guest'}/>  */}
      {/* <HoverCounter name='Swetha' />
      <ClickCounter name='Swetha'/>  */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput /> */}
      {/* <RefDemo/> */}
      {/* <ParentComp/> */}
      {/* <Tables/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA /> */}
      {/* <Form />  */}
      <ParentComp />
    
       {/* <Form /> */}
       {/* <Inline /> */}
       {/* <Stylesheet primary={true} /> */}
       {/* <NameList /> */}
       {/* <UserGreeting /> */}
       {/* <Parent /> */}
       {/* <EventBind /> */}
       {/* <ClassClick /> */}
       {/* <FunctionClick /> */}
       {/* <Counter/> */}
       {/* <Message/> */}
       {/* <Greet name="Diana" heroName="Wonder Woman" />
      // <Welcome name="Bruce" heroName="Batman" /> */}
      </div>
  );
}

export default App;
