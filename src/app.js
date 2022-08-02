import { Component } from 'react'
import Car from './car'




class App extends Component {
    state = {  // object
        cars: [
            {
                name: "Mazda 4",
                year: 2020,
                color: "rgba(144, 144, 144, 0)"
            },
            {
                name: "Ford",
                year: 2015,
                color: "rgba(144, 144, 144, 0)",
            },
            {
                name: "Ferari",
                year: 2022,
                color: "rgba(144, 144, 144, 0)",
            },
            {
                name: "Matiz",
                year: 2015,
                color: "rgba(144, 144, 144, 0)",
            },
            {
                name: "Damas",
                year: 2022,
                color: "rgba(144, 144, 144, 0)",
            },
            
        ],
        title: 'React components',
        showCars: false
    }

    changeTitleHandler = (e) => {
        this.setState({
            title: 'Changed!'
        })
    }

    toggleCarsHandler = (e) => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    inputChangeHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    changeTitleCarsHandler = (name) => {
        this.setState({
            title: name
        })
    }

    carTitleHandler = (value, idx) => {
        let cars = [...this.state.cars]
        cars[idx].name = value

        this.setState({
            cars
        })
    }
   
    removeCar = (idx)=> {
        let cars = [...this.state.cars]

        cars.splice(idx, 1)
        this.setState({
            cars
        })
    }

    onRGB = (idx) => {
        let cars = [...this.state.cars];
        cars[idx].color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
    
        this.setState({
          cars
        });
      };

  
    render() {
        const appStyle = {
            textAlign: 'center',
        }

        let div = null

        if (this.state.showCars) {
            div = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        idx={index}
                        name={car.name}
                        year={car.year}
                        onCarClick={this.carTitleHandler}
                        onChange={
                            () => { this.changeTitleCarsHandler(car.name) }
                        }
                        color={car.color}
                        onRGB={(e) => {
                            this.onRGB(index);
                        }}
                        onRemove={
                            () => {this.removeCar(car) }
                        }
                    />
                )
            })
        }

        return (
            <div className="App" style={appStyle} id='rdev' >
                <h1 >
                    {this.state.title}
                </h1>
                <input type="text" onChange={this.inputChangeHandler} />
                <br />
                <button onClick={this.toggleCarsHandler} id='ckbtn'>Click</button>
                <br />
                {div}
            </div>
        )
    }
}

export default App