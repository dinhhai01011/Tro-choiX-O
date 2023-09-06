import { useState } from "react"
import Board from "./components/broard"
// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
const App = () => {
    // const user = {
    //     name: "Nguyen Anh Tu",
    //     age: 20,
    // }
    // // JSX
    // return (
    //     <div>
    //         <h1>Hello world</h1>
    //         <Avavtar user={user} showInfo={() => console.log(user)}>
    //             <h2>Lớp we17304</h2>
    //         </Avavtar>
    //     </div>
    // )


    // const [counter, setCounter] = useState(10)
    // // const [time, settime] = useState(new Date());
    // var date = new Date();
    // var times = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    // function increase() {
    //     setCounter(counter + 10)
    //     // settime(times)
    // }

    // // console.log(counter);
    // return <div >
    //     <h1>{counter}</h1>
    //     <h1>{ time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}</h1>
    //     <button onClick={increase} >Tăng dần</button>
    // </div>

    return <div className="h-[100vh] flex flex-col justify-center items-center">
        <Board>

        </Board>
    </div>
}

export default App