import React, {useState, useEffect} from 'react';
import Pie from './Pie/Pie'
import './Pies.css'


const Pies = (props) => {
    const [pies, setPies] = useState([])

    // const pumpkinPie = {
    //     nameOfPie:  "Pumpkin",
    //     baseOfPie: "Pumpkin puree",
    //     crust: "Pastry",
    //     timeToBake: 50,
    //     servings: 8,
    //     rating: 4.2
    // }
   
    const testDataPies = [
        {
            nameOfPie: 'Pumpkin',
            baseOfPie: 'Pumpkin puree',
            crust: 'Pastry',
            timeToBake: 50,
            servings: 8,
            rating: 4.2
        },
        {
            nameOfPie: 'Apple',
            baseOfPie: 'Jam',
            crust: 'Graham cracker',
            timeToBake: 30,
            servings: 6,
            rating: 4.0
        },
        {
            nameOfPie: 'Chocolate',
            baseOfPie: 'Pudding',
            crust: 'Pastry',
            timeToBake: 20,
            servings: 8,
            rating: 5.0
        }
    ]


    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name of Pie</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Bake Time</th>
                        <th>Servings</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>    
                    {/* testData     =   testDataPies
                    The name of prop we    The name of the variable
                    are accepting into     were passing in the current
                    the next component     component  */}
                  <Pie testData={testDataPies}  /> 
                </tbody>
            </table>
        </div>
    )
}

export default Pies; 