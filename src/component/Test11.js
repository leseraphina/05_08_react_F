const allColor = ['red','blue','yellow','orange','violet']

function ProColor({color}){
  // console.log(color)
  return (
    <p>
      <label htmlFor="color">color</label>
      <select id="color">
        {color.map((item,index) => (<option value={item} key={index}>{item}</option>))}
      </select>
    </p>
  );
}

export default function Test11(){
  return (
    <ProColor color={allColor} />
  )
}

// 45 - 55