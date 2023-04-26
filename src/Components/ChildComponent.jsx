
const ChildComponent = ({texto, num, objeto}) => {
  // console.log('texto', texto, 'num', num)

  let resultado = num + 15
  return (
    <>
      {texto}
      {objeto.name}
      {resultado}
    </>
  )
}

export default ChildComponent