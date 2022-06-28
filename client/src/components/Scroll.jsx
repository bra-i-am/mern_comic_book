function Scroll({ children }) {
  const scrollStyle = {
    overflow: 'scroll',
    border: '1px solid #00000040',
    height: '600px',
    margin: '1rem',
    borderRadius: '15px',
    boxShadow: 'inset 0 0 15px 2px #00000040',
    padding: '1rem',
    maxWidth: '700px'
  }

  return (
    <div style={scrollStyle}>
      {children}
    </div>
  )
}

export default Scroll