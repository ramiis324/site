import ColorBends from './components/ColorBends'

export default function App() {
  return (
    <div style={{ width: '100vw', height: '200vh', overflow: 'hidden', display: 'flex', justifyContent: 'center'}}>
      <ColorBends />

      <div style={{ width: 'clamp(100px, 25vw, 500px)', height: '6vh', background: 'rgba(255, 255, 255, 0.15)', backdropFilter: "blur(10px)", boxShadow: '0 8px 32px 0 rgba(133, 133, 133, 0.37)', position: 'fixed', top: '10px', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '45vh'}}>

      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center'
        }}
      >
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Ryder Unger
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.85, textAlign: 'center'}}>
            Developer • Designer • Builder
          </p>
        </div>
      </div>
    </div>
  )
}
