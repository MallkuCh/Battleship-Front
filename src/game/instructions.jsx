import Navbar from "../components/NavBar/Navbar"

function Instructions(){
    return(
        <>
        <Navbar />
        <h1>Instrucciones</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam earum, beatae praesentium harum tempora explicabo cum ab nihil sint iure. Delectus, unde consequatur! Praesentium qui dolorum iste quo itaque?
        </p>
        <ul>
            <li key="{regla1}">Regla 1</li>
            <li key="{regla2}">Regla 2</li>
            <li key="{regla3}">Regla 3</li>

        </ul>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum rem architecto incidunt expedita totam nihil at ducimus dolorem molestias officiis, optio culpa perferendis ipsum, provident quo fugit atque cumque?
        </p>
        </>

    )
}
export default Instructions
