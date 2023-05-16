import Blog from "./Blog"
import Highlight from "./Highlights"
const blogs = [
    {
        name : "Gold",
        updates : "Investing.com -- Gold prices fell slightly in early Asian trade on Tuesday as a slew of Federal Reserve officials warned that interest rates could still rise further amid relatively high inflation and a robust labor market."
    },
    {
        name : "Crude Oil",
        updates : "Investing.com -- Oil prices rose in Asian trade on Tuesday, extending gains from the prior session as the U.S. government confirmed plans to begin refilling its heavily-drawn on Strategic Petroleum Reserve (SPR), which sent a buy signal to markets"
    },
    {
        name : "Platinum",
        updates : "This addition to the Data Export module enables users to export Customer records, Sales Invoices and Credits in CSV file format. These can then be imported into the QuickBooks Online accounting package"
    },
    {
        name : "Silver",
        updates : "nvesting.com -- Gold prices fell slightly in early Asian trade on Tuesday as a slew of Federal Reserve officials warned that interest rates could still rise further amid relatively high inflation and a robust labor market."
    }
    
]
const BlogBody = () =>{
    return(
        <section className="blog-body-main">
           <div className="leftbar">
           {
                blogs.map(function(blog){
                    return <Blog name={blog.name} updates={blog.updates} />
                })
            }
           </div>
           <div className="rightSideBar">

                <Highlight />

           </div>
        </section>
      )
    
}
export default BlogBody;