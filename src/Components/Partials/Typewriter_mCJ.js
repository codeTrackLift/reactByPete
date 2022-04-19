import React from 'react'
// import '../../Styles/Typewriter_mCJ.css'

const mCJSectionStyle = {
    
}

const mCJFigureStyle = {
   
}

const mCJH2Style = {
   
}

export const MyCodingJourney = () => {
  return (
        <section id="mCJTypewriterSection" className='mt-5' style={mCJSectionStyle}>
            <figure id='mCJTypewriter' className="mx-auto mt-5" style={mCJFigureStyle}>
                <h2 id="typeWriter1">
                    <span style={{color:'darkorchid'}}>const </span>
                    <span style={{color:'lime'}}>myCodingJourney </span>
                    <span style={{color:'gray'}}>=</span> () 
                    <span style={{color:'gray'}}> {'=>'}</span> {'{'}
                </h2>
                <h2 id="typeWriter2">
                    <span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span>
                    <span style={{color:'darkorchid'}}>for</span> (
                    <span style={{color:'cornflowerblue'}}>article </span>
                    <span style={{color:'gray'}}>in </span>
                    <span style={{color:'#00857c'}}>blog</span>) {'{'}
                </h2>
                <h2 id="typeWriter3">
                    <span style={{color:'rgb(50,50,50)',textShadow:'none'}}>____</span>
                    <span style={{color:'brown'}}>console</span>
                    <span style={{color:'gray'}}>.</span>
                    <span style={{color:'olive'}}>log</span>(
                    <span style={{color:'#00857c'}}>blog</span>
                    <span style={{color:'dodgerblue'}}>[</span>
                    <span style={{color:'cornflowerblue'}}>article</span>
                    <span style={{color:'dodgerblue'}}>]</span>)
                    <span style={{color:'gray'}}>;</span>
                </h2>
                <h2 id="typeWriter4">
                    <span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span>{'}'}
                </h2>
                <h2 id="typeWriter5">{'}'}
                    <span style={{color:'gray'}}>;</span>
                </h2>
            </figure>
        </section>
    )
}
