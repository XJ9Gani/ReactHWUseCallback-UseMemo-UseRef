import ArrSumComponent from './components/ArrSumComponent'
import InputFocus from './components/InputFocus'
import AddTaskUseCallBack from './components/AddTaskUseCallBack'
import './style/style.css'
export default function App(){
    return (
        <>
    <h1>Задание 1</h1>
     <AddTaskUseCallBack/>
    <hr/>
        <h1>Задание 2</h1>
        <ArrSumComponent numbers={[1 , 2 , 34 , 4 , 5]}/>
        <hr/>
        <h1>Задание 3</h1>
        <InputFocus/>
   </>

    )
}