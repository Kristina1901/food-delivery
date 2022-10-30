
import MainContainer from './Maincontainer/MainContainer';
import CreateContainer from './CreateContainer/CreateContainer';
import { lazy, Suspense } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
const Header = lazy(() => import('./Header/Header'));

export const App = () => {
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
    <Header/>
    <main className='mt-14 px-4 md:px-16 py-4 w-full'>
    <Routes> 
      <Route path='/' element={<MainContainer/>}/>
      <Route path='/CreateContainer' element={<CreateContainer/>}/>
      
    </Routes>
    </main>
    </div>
  );
};
