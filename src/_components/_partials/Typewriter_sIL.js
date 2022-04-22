import React from 'react'
import '../../Styles/Typewriter_sIL.css'

const sILSectionStyle = {
    backgroundColor: 'black',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    width: '100vw',
    maxWidth: '100vw',
    overflowX: 'hidden',
    animation: 'animationFadeIn 5s ease-in-out'
}

const sILFigureStyle = {
    margin: '0 auto',
    width: 'fit-content',
    padding: '5vh 0',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column'
}

const sILH2Style = {
    position: 'relative',
    width: 'max-content',
    fontWeight: 'normal',
    fontFamily: 'Menlo Regular',
    fontSize: '1.75rem',
    letterSpacing: '0.125rem',
    color: 'silver'
}

export const StationInLife = () => {
  return (
        <section id="sILTypewriterSection" style={sILSectionStyle}>
            <figure id='sILTypewriter' className="mx-auto" style={sILFigureStyle}>
                <h2 id="sILTypewriter1" style={sILH2Style}>
                    <span style={{color: 'cornflowerblue'}}>stationInLife</span>
                    <span style={{color:'gray'}}>.</span>
                    <span style={{color:'darkorchid'}}>replace</span>(
                </h2>
                <h2 id="sILTypewriter2" style={sILH2Style}>
                    <span style={{color:'black',textShadow:'none'}}>__</span>'
                    <span style={{color: '#00857c'}}>Pharmaceutical Engineer</span>'
                    <span style={{color:'gray'}}>,</span>
                </h2>
                <h2 id="sILTypewriter3" style={sILH2Style}>
                    <span style={{color:'black',textShadow:'none'}}>__</span>'
                    <span style={{color:'lime'}}>Software Developer</span>')
                    <span style={{color:'gray'}}>;</span>
                </h2>
            </figure>
        </section>
    )
}
