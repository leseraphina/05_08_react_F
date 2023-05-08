const allColor = ['red','blue','yellow','orange','violet']

function ProColor({color}){
  // console.log(color)
  function optionColor(){
    console.log(color);
    return color.map((item,index) => (<option value={item} key={index}>{item}</option>))
  }
  return (
    <p>
      <label htmlFor="color">color</label>
      <select id="color">
        {/* {color.map((item,index) => (<option value={item} key={index}>{item}</option>))} */}
        {optionColor()}
      </select>
    </p>
  );
}

export default function Test12(){
  return (
    <ProColor color={allColor} />
  )
}

// 45 - 55