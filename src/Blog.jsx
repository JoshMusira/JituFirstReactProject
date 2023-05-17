


const Blog = ({name, updates}) =>{

    return(
      <div className="mainContainer">
          <div className="container">
              <h2>{name}</h2>
              <p>{updates}</p>
          </div>

        
         
      </div>
    )
  }
  export default Blog;