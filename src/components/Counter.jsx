import React, { useState, useEffect } from "react"
import "./Counter.css"
function Counter() {
    //Check LocalStorage
    let checker = 0
    if (localStorage.getItem("counter") !== 0) {
        checker = localStorage.getItem("counter")
    }

    //Counter
    const [counter, setCounter] = useState(checker)

    //Sync with LocalStorage
    useEffect(() => {
        localStorage.setItem("counter", counter)
    }, [counter])

    //handle Controllers
    const handleBtnMinus = () => {
        setCounter((prev) => --prev)
    }
    const handleBtnMPlus = () => {
        setCounter((prev) => ++prev)
    }

    return (
        <div className="container">
            <div className="container-title">Счетчик:</div>
            <div className="container-counter">{counter}</div>
            <div className="container-contollers">
                <button
                    className="button button-minus"
                    onClick={handleBtnMinus}
                >
                    - Минус
                </button>
                <button className="button button-plus" onClick={handleBtnMPlus}>
                    Плюс +
                </button>
            </div>
        </div>
    )
}

export default Counter
