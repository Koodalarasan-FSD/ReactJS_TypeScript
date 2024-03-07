import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User1} from './components/context/User1';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Counter1 } from './components/class/Counter1';
import { Private } from './components/auth/Private';
import { profile } from 'console';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';

// Reactjs Tutorial for Beginners - https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
// Reactjs - TypeScript Tutorial - Getting Started - https://www.youtube.com/watch?v=Kt4PQlcLHco
// Reactjs - Typing Props - https://www.youtube.com/watch?v=KpA6oEaCHtk

/* Inorder to create typescript file in reactjs use below command
  npx create-react-app react_typescript_demo --template typescript
*/

function App() {
  const personName={
    first:'Bruce',
    last:'Wayne'
  }
  const nameList=[
    {
      first:"Bruce",
      last:"Wayne"
    },
    {
      first:"Clark",
      last:"Kent"
    },
    {
      first:"Princess",
      last:"Diana"
    }
  ]
  return (
    <div className="App">
      <Greet name='Koodalarasan' messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}></PersonList>
      <Status status='loading'/>
      {/* Below Passing with children prop Placeholder Text */}
      <Heading>Placeholder Text</Heading>
      <Oscar>
        {/*Below passing component */}
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name='Koodalarasan' isLoggedIn={true}/>
      <Button handleClick={(event)=>{
        console.log('Button Clicked',event)
      }}/>
      <Input value='' handleChange={(event)=>console.log(event)}/>
      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
      <LoggedIn/>
      <User/>
      <Counter/>
      {/*<ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>*/}
      <UserContextProvider>
        <User1/>
      </UserContextProvider>
      <DomRef/>
      <MutableRef/>
      <Counter1 message='The Count Value is'/>
      <Private isLoggedIn={true} component={Profile}/>
      <List items={['Batman','Superman','WonderWoman']} onClick={(item)=>console.log(item)}/>
      <RandomNumber value={10} isPositive/>
      <Toast position="center"/>
      <CustomButton variant='primary' onClick={()=>console.log('Clicked')}>
        Primary Button
      </CustomButton>
      <h3>Polymorphic Components - Please check Text.tsx under polymorphic folder</h3>
      <Text as='h1' size='lg'>
        Heading
      </Text>
      <Text as='p' size='md'>
        Paragraph
      </Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>
        Label
      </Text>
    </div>
  );
}

export default App;
