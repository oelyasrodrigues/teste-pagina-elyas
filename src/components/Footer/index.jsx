import "./footer.scss"

function Footer() {
  const date = new Date()

  return (
    <footer className='footer d-flex'>
      <div className="container">
        <div className="content">
          <p><span>Todos os direitos reservados</span> | <span>Elyas Rodrigues</span></p>
          <p>&copy; {date.getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer