import'./App.css'
import React,{useState} from 'react';
import InputMask from "react-input-mask";

function App() {
  const [form, setForm] = useState("")

  function handleChange(event){
    console.log('event 1' , event.target.name)
    console.log('event 2' , event.target.value)
    setForm({...form,[event.target.name]: event.target.value})
    console.log('form', form.altura)
  }

  function handleSubmit(event){
    event.preventDefault()
    if((!form.altura && !form.peso) || !form.peso || !form.altura){
        alert('Por favor, digite corretamente')
    } else{
      const imc = form.peso/ (form.altura * form.altura)
      console.log("imc", imc)
      alert('O seu IMC é '   +  imc)
    }

  }

  return(
    <form onSubmit={handleSubmit}>
      <div className='container'>
      <div className='form'>
        <div className='container-input-label'>
          <div className='children-container-input-label'>
            <label >Altura</label>
            <InputMask placeholder= 'Digite a sua altura' mask="9.99" onChange={handleChange} name="altura" />            
        </div>
        <div className='children-container-input-label'>
            <label >Peso</label>
            <InputMask placeholder= 'Digite o seu peso' mask="999.99" onChange={handleChange} name="peso" />            
        </div>      
      </div>
      <div className='container-button'>
          <button>Calcular</button>
      </div>
      <div className='container-info'>
      <h1>
        Calssificação 
      </h1>
        

    </div>
    <h2 className='container-text'>
        <p >
        Menor que 18,5 = Magreza<br/>
        18,5 a 24,9 = Normal<br/>
        25 a 29,9 = Sobrepeso <br/>
        30 a 34,9 = Obesidade grau I <br/>
        35 a 39,9 = Obesidade grau II <br/>
        Maior que 40 = Obesidade grau III <br/>
        </p>
      </h2> 
    </div>
    

  </div>
    </form>
    
    
    
  )
}

export default App
