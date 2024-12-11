function Food(){

    const food1 = "laranja"
    const food2 = "banana"

    return(
        <ul>
            <li>Maça</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food