import { useState } from 'react'

function Home(){
    return (
        <div>
            <h1>Olha isso Pet</h1>
            <Contador />
            <Container direction={['column', 'row', 'row']} top>
                <Container left>
                    <Input size="small" placeholder="Small" />
                </Container>

                <Container left>
                    <Input placeholder="Default" />
                </Container>

                <Container left>
                    <Input size="large" placeholder="Large" />
                </Container>
            </Container>
        </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home