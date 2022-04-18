import React from 'react'
import '../../Styles/Typewriter_cTL.css'

const cTLSectionStyle = {
    backgroundColor: 'rgb(50, 50, 50)',
    width: '100vw',
    maxWidth: '100vw',
    overflowX: 'hidden',
    marginBottom: '-3rem'
}

const cTLFigureStyle = {
    margin: '0 auto',
    width: 'fit-content',
    padding: '5vh 0',
    backgroundColor: 'rgb(50, 50, 50)',
    display: 'flex',
    flexDirection: 'column'
}

const cTLH2Style = {
    position: 'relative',
    width: 'max-content',
    fontWeight: 'normal',
    fontFamily: 'Menlo Regular',
    fontSize: '1.75rem',
    letterSpacing: '0.125rem',
    color: 'silver',
    textShadow: '1px 1px black'
}

export const CodeTrackLift = () => {
  return (
        <section id="cTLTypewriterSection" className='mt-5' style={cTLSectionStyle}>
            <figure id='cTLTypewriter' className="mx-auto" style={cTLFigureStyle}>
                <h2 id="cTLTypewriter1" style={cTLH2Style}>
                    <span style={{color:'darkorchid'}}>while</span> (
                    <span style={{color:'cornflowerblue'}}>alive</span>) {'{'}
                </h2>
                <h2 id="cTLTypewriter2" style={cTLH2Style}>
                    <span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span>
                    <span style={{color:'chocolate'}}>code</span>()
                    <span style={{color:'gray'}}>;</span>
                </h2>
                <h2 id="cTLTypewriter3" style={cTLH2Style}>
                    <span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span>
                    <span style={{color:'chocolate'}}>track</span>(
                    <span style={{color:'cornflowerblue'}}>macros</span>)
                    <span style={{color:'gray'}}>;</span>
                </h2>
                <h2 id="cTLTypewriter4" style={cTLH2Style}>
                    <span style={{color:'rgb(50,50,50)',textShadow:'none'}}>__</span>
                    <span style={{color:'chocolate'}}>lift</span>(
                    <span style={{color:'cornflowerblue'}}>weights</span>)
                    <span style={{color:'gray'}}>;</span>
                </h2>
                <h2 id="cTLTypewriter5" style={cTLH2Style}>{'}'}</h2>
            </figure>
        </section>
    )
}
