import React from "react"

import "./tables.css"

function Tables () {
    return (
        <div className="Parenttable">
            <div className="Titulo"> Estadisticas </div>
            <div className="Card_Tables">
                <div className="cardtable">
                <thead>
                        <th>Posicion</th>
                        <th>Nombre</th>
                        <th>Numero victorias</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Carlitos777</td>
                            <td>432</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Exmachina</td>
                            <td>402</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Ted Lasso</td>
                            <td>352</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Montgomery</td>
                            <td>322</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>JOji7</td>
                            <td>300</td>
                        </tr>
                    </tbody>
                </div>
                <div className="cardtable">
                    <thead>
                        <th>Posicion</th>
                        <th>Nombre</th>
                        <th>Numero de puntos</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Carlitos777</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Machina</td>
                            <td>1250</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Ted Lasso</td>
                            <td>1230</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Montgomery</td>
                            <td>1100</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>JOji7</td>
                            <td>1020</td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    )
}

export default Tables;
