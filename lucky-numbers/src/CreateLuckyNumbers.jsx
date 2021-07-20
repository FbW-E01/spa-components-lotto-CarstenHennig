import React from 'react';

class CreateLuckyNumbers extends React.Component {
    constructor() {
        super();
        this.state = {
                luckyNum1: 0,
                luckyNum2: 0,
                luckyNum3: 0,
                luckyNum4: 0,
                luckyNum5: 0,
                luckyNum6: 0,
                extraNum: 0,
                resetNum: false
        }
    }

    getNewNumbers = () => {
        this.setState({resetNum: false})
        this.setState({luckyNum1: Math.round(Math.random() * 49 + 1)})
        this.setState({luckyNum2: Math.round(Math.random() * 49 + 1)})
        this.setState({luckyNum3: Math.round(Math.random() * 49 + 1)})
        this.setState({luckyNum4: Math.round(Math.random() * 49 + 1)})
        this.setState({luckyNum5: Math.round(Math.random() * 49 + 1)})
        this.setState({luckyNum6: Math.round(Math.random() * 49 + 1)})
        this.setState({extraNum: Math.round(Math.random() * 10 + 1)})
    }

    resetNumbers = () => {
        // this.setState({luckyNum1: 0, luckyNum2: 0, luckyNum3: 0, luckyNum4: 0, luckyNum5: 0, luckyNum6: 0, extraNum: 0})
        this.setState({resetNum: true})
    }

    render() {
        console.log(123);
        return (
        <main>
            { this.state.resetNum === false ? <div>
                <span className="circle">{this.state.luckyNum1}</span>
                <span className="circle">{this.state.luckyNum2}</span>
                <span className="circle">{this.state.luckyNum3}</span>
                <span className="circle">{this.state.luckyNum4}</span>
                <span className="circle">{this.state.luckyNum5}</span>
                <span className="circle">{this.state.luckyNum6}</span>
                <span className="extraCircle">{this.state.extraNum}</span>
            </div> : <div className="resetWarning"><h3>Press Reset</h3></div>
            }
            <div className="buttonsSection"> 
                <button onClick={this.resetNumbers}>Reset</button>
                <button onClick={this.getNewNumbers}>Create Lucky Numbers</button>
            </div>
        </main>
        )
    }
}

export default CreateLuckyNumbers;