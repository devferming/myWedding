import React from 'react'
import './styles/Invitacion.css'

const Invitation = () => {
  return (
    <section className='invitacion'>
      <article className='invitacion__article'>
        <p className='invitacion__article__p'>Querido <span className='invitacion__article__p--guest'>Luiggi Parra,</span></p>
        <p className='invitacion__article__p'>En el destino que el amor ha trazado para nosotros, hemos encontrado en el otro un refugio de paz, alegría y complicidad. Hoy, con corazones llenos de gratitud, hemos decidido entrelazar nuestras vidas en un compromiso eterno.</p>
        <p className='invitacion__article__p'>Es un verdadero honor para nosotros invitarte a ser testigo de este momento tan significativo, en el que celebraremos no solo nuestro amor, sino también la bendición de contar con personas tan queridas como tú.</p>
        <p className='invitacion__article__p'>Con profunda emoción, te invitamos a acompañarnos el 27 de septiembre de 2024 en "Dirección por confirmar", donde juntos daremos inicio a esta nueva y hermosa etapa, rodeados de aquellos que han sido parte esencial de nuestro viaje.</p>
        <p className='invitacion__article__p'>Tu presencia en este día tan especial será un regalo que atesoraremos por siempre.</p>
        <p className='invitacion__article__p'>Con todo nuestro cariño,</p>
        <p className='invitacion__article__signature'>Fermín & Zenith</p>
      </article>
      <img className='invitacion_corner' src="/corner.png" alt="corner_img"/>
      <img className='invitacion_corner2' src="/corner.png" alt="corner_img"/>
    </section>
  )
}

export default Invitation