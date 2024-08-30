import React from 'react'
import './styles/Ceremony.css'
import { Map, Marker } from "pigeon-maps"

const Ceremony = () => {
  const color = `#DD4336`

  return (
    <section className='ceremony' id='ceremony'>
      <article className='ceremony__article'>

        <div className='ceremony__article__map'>
          <Map
            height={300}
            width={300}
            defaultCenter={[10.86046498663506, -74.77381398126036]}
            defaultZoom={17}
          >
            <Marker
              width={30}
              anchor={[10.86046498663506, -74.77381398126036]}
              color={color}
            />
          </Map>
        </div>



        <div className='ceremony__article__address'>

          <span className='ceremony__article__address__tittle'>
            <i className='ceremony__article__address__tittle__i bx bxs-church'></i>
            <h2 className='ceremony__article__address__tittle__h2'>Ceremonia</h2>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-calendar'></i>
            <p className='ceremony__article__address__span__p'>27 de septiembre 2024</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-map'></i>
            <p className='ceremony__article__address__span__p'>Calle 10 #13-08, centro</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-building'></i>
            <p className='ceremony__article__address__span__p'>Salon Cindy Orellanos</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-time'></i>
            <p className='ceremony__article__address__span__p'>Ceremonia: 08:00 PM.</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-wine'></i>
            <p className='ceremony__article__address__span__p'>Recepción 09:00 PM. - 02:00 AM.</p>
          </span>

        </div>

      </article>
      <img className='ceremony__article__img' src="/bg_ceremony.webp" alt="novios_abrazados_img" />
      <img className='ceremony__article__address__i' src="/ceremony_ico.webp" alt="icono de iglesia" />
    </section>
  )
}

export default Ceremony