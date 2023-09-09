import React, { Suspense } from 'react'
import Topbar from './components/topbar/Topbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Card from './components/card/Card'
import Loading from './components/loading/Loading'
import Banner from './components/banner/Banner'
import Section from './components/section/Section'

const LazyCard = React.lazy(() => import('./components/card/Card'));

const Dashboard = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/talenq-task' element={<React.Suspense fallback={<Loading/>}>
            <LazyCard />
          </React.Suspense>} />
          <Route path='/talenq-task/banner' element={<Banner />} />
          <Route path='/talenq-task/section' element={<Section />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Dashboard