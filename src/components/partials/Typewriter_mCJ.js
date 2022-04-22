import React from 'react'
// import '../../styles/Typewriter_mCJ.css'

const mCJSectionStyle = {
    marginTop: '2rem !important',
    backgroundColor: 'rgb(50, 50, 50)',
    width: '100vw',
    maxWidth: '100vw',
    overflowX: 'hidden',
    marginBottom: '-3rem'
}

const mCJFigureStyle = {
    margin: '0 auto',
    width: 'fit-content',
    padding: '5vh 0',
    backgroundColor: 'rgb(50, 50, 50)',
    display: 'flex',
    flexDirection: 'column'
}

const mCJH2Style = {
    position: 'relative',
    width: 'max-content',
    fontWeight: 'normal',
    fontFamily: 'Menlo Regular',
    fontSize: '1.75rem',
    letterSpacing: '0.125rem',
    color: 'silver',
    textShadow: '1px 1px black'
}

export const MyCodingJourney = () => {
  return (
        <section id="mCJTypewriterSection" className='mt-5' style={mCJSectionStyle}>
            <figure id='mCJTypewriter' className="mx-auto mt-5" style={mCJFigureStyle}>
                <h2 style={{mCJH2Style}} id="mCJTypeWriter1">
                    <span style={{color:'darkorchid'}}>const </span>
                    <span style={{color:'lime'}}>myCodingJourney </span>
                    <span style={{color:'gray'}}>=</span> () 
                    <span style={{color:'gray'}}> {'=>'}</span> {'{'}
                </h2>
                <h2 style={{mCJH2Style}} id="mCJTypeWriter2">
                    <span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span>
                    <span style={{color:'darkorchid'}}>for</span> (
                    <span style={{color:'cornflowerblue'}}>article </span>
                    <span style={{color:'gray'}}>in </span>
                    <span style={{color:'#00857c'}}>blog</span>) {'{'}
                </h2>
                <h2 style={{mCJH2Style}} id="mCJTypeWriter3">
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
                <h2 style={{mCJH2Style}} id="mCJTypeWriter4">
                    <span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span>{'}'}
                </h2>
                <h2 style={{mCJH2Style}} id="mCJTypeWriter5">{'}'}
                    <span style={{color:'gray'}}>;</span>
                </h2>
            </figure>
        </section>
    )
}
