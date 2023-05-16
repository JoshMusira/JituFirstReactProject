

const HighlightMain = () =>{
    const titles = ["Gold", "Crude Oil", "Platinum", "Silver"]
    return(
        <div>
            {titles.map((name,index) =>{
                return <h3 index = "index">{name}</h3>
            })}
        </div>
    )
}
export default HighlightMain;