import { lazy, Suspense } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
const Header = lazy(() => import('./Header/Header'));
const MainContainer = lazy(() => import('./Maincontainer/MainContainer'));
const CreateContainer = lazy(() => import('./CreateContainer/CreateContainer'));
export const App = () => {
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
    <Header/>
    <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
    <Routes> 
      <Route path='/' element={<MainContainer/>}/>
      <Route path='./createItem' element={<CreateContainer/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </main>
    </div>
  );
};
