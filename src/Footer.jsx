const Footer = () =>{

    const currentDate = new Date().toLocaleDateString();
  
    return(
      <div className="footer">
          <h3>Joshua Musira</h3>
          <h3> Current date: {currentDate}</h3>
      </div>
    )
  }
  export default Footer;