import React from 'react'
import './ShtabItem.scss'

export default function ShtabItem({shtab}) {

  return (
    <div className='Shtab'>
        <div className='Shtab_map'>
            <img src={"img/Headquarters/" + shtab.region + ".svg"} alt="Region" />
            <div className='Shtab_map_info'>
                <p className='Shtab_map_region'>{shtab.region}</p>
                <a href={shtab.maplink} className='Shtab_map_link'>Google map</a>
            </div>
        </div>
        <div className='Shtab_info'>
            <h3 className='Shtab_name'>{shtab.name}</h3>
            <h2 className='Shtab_region'>{shtab.region}</h2>
            <div className='Shtab_contacts'>
                <p className='Shtab_contacts_name'>{shtab.contactname}</p>
                <a href={"tel:" + shtab.contactphone} className='Shtab_contacts_phone'>{shtab.contactphone}</a>
            </div>
            <a href={shtab.link} target="blank" className='Shtab_contacts_link'>Джерело</a>
        </div>
    </div>
  )
}


//Cherkasi
//Chernigiv
//Chernivci
//Dnipro
//Donetsk
//Frankivsk
//Gitomir
//Harkiv
//Herson
//Hmelnitskiy
//Kirovograd
//Krim
//Kyiv
//Lugansk
//Lutsk
//Lviv
//Mukolaiv
//Odesa
//Poltava
//Rivne
//Sumi
//Ternopil
//Ujgorod
//Vinitsia
//Zaporigia


