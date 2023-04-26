import ChildComponent from "./ChildComponent"

const ParentComponent = () => {

    let texto = 'Hola, como estas?'
    let num = 1
    let obj = {name: 'Milton', age: 67, arr: [1,2,3,4]}


    return (
        <>
            <h1>Parent component</h1>
            <ChildComponent texto={texto} num={num} objeto={obj}/>
            <div className="estilos">
                <p>Un parrafo</p>
            </div>
        </>
    )
}

export default ParentComponent