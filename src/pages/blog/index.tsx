import type { NextPage } from 'next'

import { useEffect } from 'react'

const Sobre: NextPage = () => {
  useEffect(() => {
    console.log('Sobre')
    //document.getElementById('sobre').innerHTML = 'agora sim!'
  }, [])

  return (
    <>
      <div id="sobre">
        <h1 className='text-center'>Blog</h1>
        <p>Somos uma empresa familiar fundada em 2006.</p>
        <p>
          Nossa missão é sermos referência para nossos clientes no atendimento
          suas necessidades através de um trabalho personalizado, ágil e de
          qualidade.
        </p>
        <p>
          Conte sempre com nossos serviços e não hesite em nos procurar para
          qualquer esclarecimento.
        </p>
      </div>
    </>
  )
}

export default Sobre
