const BoxColor = ({ r, g, b }) => {
    let color = `rgb(${r}, ${g}, ${b})`;
    let boxStyle = {backgroundColor: color}; 
    return (
       <div className='box' style={boxStyle}> 
       rgb({r}, {g}, {b})
       </div>
    )
}
export default BoxColor;