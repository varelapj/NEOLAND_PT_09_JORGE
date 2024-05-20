import { useState } from "react";
import "./App.css";
import { CV } from "./data/cv";
import Hero from "./components/hero/hero";
import Education from "./components/education/education";
const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);



  return (

    
    <>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Hero hero={hero} />
        )}
      </div>
    </>
  )
}

export default App
