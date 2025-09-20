import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())




function App() {


  return (
    <>
      <div>
        
        <Suspense fallback={<h1>loading...</h1>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
      </div>
    </>
  )
}

export default App
