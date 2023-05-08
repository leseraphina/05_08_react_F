
function ReactBook({title,level,price,num='no05'}){
  return(
    <dl>
      <dt>{title}</dt>
      <dd>{level}</dd>
      <dd>{price}</dd>
      <dd>{num}</dd>
    </dl>
  )
}
export default function Test07(){
return (
  <ReactBook
    title="react"
    level={5}
    price="5000" />
)
}