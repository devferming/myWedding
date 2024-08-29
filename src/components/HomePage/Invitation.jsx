import React from 'react'
import './styles/Invitation.css'

const Invitation = ({ id }) => {

  const guests = {
    1: ['Luiggi Parra', 'Querido', 4],
    2: ['Fredy Valencia', 'Estimado', 4],
    3: ['Rocío Salazar', 'Estimada', 1],
    4: ['Astrid Pérez', 'Amada', 1],
    5: ['Antonio Palencia', 'Amado', 3],
    6: ['Erick Palencia', 'Querido', 4],
    7: ['Peyo Pérez', 'Querido', 4],
    8: ['Jesus Pérez', 'Querido', 4],
    9: ['Adid Pérez', 'Querido', 4],
    10: ['Yimi Pérez', 'Querido', 4],
    11: ['Wendy Pérez', 'Estimada', 2],
    12: ['Marlene Pérez', 'Querida', 3],
    13: ['Emilio Pérez', 'Estimado', 2],
    14: ['Harold Cervantes', 'Estimado', 1],
    15: ['Yenis Orozco', 'Estimada', 2],
    16: ['José Orozco', 'Estimado', 2],
    17: ['Betsy Fuentes', 'Estimada', 1],
    18: ['Karina Solorzano', 'Estimada', 1],
    19: ['Claribel xxxxx', 'Estimada', 2],
    20: ['Octavio Requena', 'Estimado', 1],
    21: ['Dayana Fuentes', 'Estimada', 1],
    22: ['Bleidy xxxxxx', 'Estimada', 2],
    23: ['José Profesor', 'Estimado', 2]
  }

  const quotas = [
    ['invitarte a ser testigo', 'una persona tan querida cómo tú', 'te invitamos', 'Tu presencia'],
    ['invitarte a ti y a tu bella familia a ser testigos', 'personas tan queridas cómo ustedes', 'los invitamos', 'La presencia de ustedes']
  ];

  // Seleccionar el contenido apropiado basado en el número de cupos
  const quotaIndex = (guests[id] && guests[id][2] > 1) ? 1 : 0;
  const [invitationPart1, invitationPart2, invitationPart3, invitationPart4] = quotas[quotaIndex];

  return (
    <section className='invitation' id='invitation'>
      {
        id && guests[id] ? (
          <article className='invitation__article'>
            <p className='invitation__article__p'>
              {guests[id][1]} <br />
              <span className='invitation__article__p--guest'>
                {guests[id][0]} <small>{`(${guests[id][2]} ${guests[id][2] === 1 ? 'cupo' : 'cupos'})`}</small>,
              </span>
            </p>
            <p className='invitation__article__p'>
              En el destino que el amor ha trazado para nosotros, hemos encontrado en el otro un refugio de paz, alegría y complicidad. Hoy, con corazones llenos de gratitud, hemos decidido entrelazar nuestras vidas en un compromiso eterno.
            </p>
            <p className='invitation__article__p'>
              Es un verdadero honor para nosotros {invitationPart1} de este momento tan significativo, en el que celebraremos no solo nuestro amor, sino también la bendición de contar con {invitationPart2}.
            </p>
            <p className='invitation__article__p'>
              Con profunda emoción, {invitationPart3} a acompañarnos este 27 de septiembre de 2024 en <strong>Calle 10 #13-08, Centro, Salon Cindy Orellanos, Piso 2</strong>, donde juntos daremos inicio a esta nueva y hermosa etapa, rodeados de aquellos que han sido parte esencial de nuestro viaje.
            </p>
            <p className='invitation__article__p'>
              {invitationPart4} en este día tan especial será un regalo que atesoraremos por siempre.
            </p>
            <p className='invitation__article__p'>
              Con todo nuestro cariño,
            </p>
            <p className='invitation__article__signature'>Zenith & Fermín</p>
          </article>
        ) : (
          <p className='invitation__article__p'>Cargando...</p>
        )
      }

      <img className='invitation_corner' src="/corner.webp" alt="corner_img" />
      <img className='invitation_corner2' src="/corner.webp" alt="corner_img" />
    </section>
  )
}

export default Invitation
