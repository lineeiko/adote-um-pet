import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista'


const Home: NextPage = () => {
  return (
    <div >
      <Titulo titulo=""
       subtitulo={
         <span>
           Com um pequeno valor mensal, você <br />
           pode <strong>adotar um pet virtualmente</strong>
          </span>
        } />

        <Lista 
        pets={[
         {
           id: 1,
           nome: 'Bidu',
           historia: 'asiojfaesw jaseoi fasf jaiosfjiaesj fosoajkdjks',
           foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlfQwP71Vgu4VsNVrIkJiodcxn2t08BdWNGzz5elOtZQqOOOmhY_P1FWJw6LSRc7bv-Y&usqp=CAU'
         },
         {
         id: 2,
           nome: 'Scooby',
           historia: 'asiojfaesw jaseoi fasf jaiosfjiaesj fosoajkdjks',
           foto: 'https://meusanimais.com.br/wp-content/uploads/2020/11/cachorro-pequeno-campo.jpg'
         },
        ]}
      />
    </div>
  )
}

export default Home
