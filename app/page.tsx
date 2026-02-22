export default function Home() {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>ZEESHAN BABA</h1>
      <h2 style={{ color: '#ff0000', letterSpacing: '5px' }}>FITTER STYLE</h2>
      <p style={{ marginTop: '20px', color: '#888' }}>Website is being repaired... Stay tuned.</p>
      
      <div style={{ marginTop: '40px', border: '1px solid #333', padding: '20px', borderRadius: '10px' }}>
         <p>Thumbnail Portfolio Loading...</p>
      </div>
    </div>
  )
}