import React from 'react';
import './description.css';

const Description = () => {
  return (
    <div className='ltd__description'>
        <div className='ltd__description-nous'>
            <h1>Qui Sommes Nous</h1>
            <div className='ltd__description-dividerv'></div>
            <p>Nous sommes Julien et Aurélien, deux frères cuisiniers très différents. Tandis que Julien s'attache à une cuisine traditionnelle, Aurélien mitonne à la mode végérarienne.</p>
        </div>
        <div className='ltd__description-dividerh'></div>
        <div className='ltd__description-restaurant'>
            <h1>Notre Restaurant</h1>
            <div className='ltd__description-dividerv'></div>
            <p>Posé au bord de l'eau avec une irrésistible vue sur le Clain, ce restaurant est le trait d'union entre deux univers culinaires et rassemble, autour de la même table, tous les palais.</p>
        </div>
    </div>
  )
}

export default Description