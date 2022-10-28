import React from 'react'
import ModerTool from './ModerTool'
import './ShtabItem.scss'

export default function ShtabItem({shtab, edit, setVisibleModal}) {

  return (
    <div className='Shtab'>
        {edit && <ModerTool setVisibleModal={setVisibleModal}/>}
        <div className='Shtab_map'>
            <img src={"img/Headquarters/" + shtab.region + ".svg"} alt="Region" />
            <div className='Shtab_map_info'>
                <p className='Shtab_map_region'>{shtab.region}</p>
                <a href={shtab.maplink} target="blank" className='Shtab_map_link'>Google map</a>
            </div>
        </div>
        <div className='Shtab_info'>
            <h3 className='Shtab_name'>{shtab.name}</h3>
            <h4 className='Shtab_city'>{shtab.city}</h4>
            <h4 className='Shtab_adress'>{shtab.adress}</h4>
            <div className='Shtab_contacts'>
                <p className='Shtab_contacts_name'>{shtab.contactname} {shtab.contactlastname}</p>
                <a href={"tel:" + shtab.contactphone} className='Shtab_contacts_phone'>{shtab.contactphone}</a>
            </div>
            <a href={shtab.link} target="blank" className='Shtab_contacts_link'>Джерело</a>
        </div>
    </div>
  )
}

//Vinitsia
//Volin
//Dnipro
//Donetsk
//Gitomir
//Zakarpat
//Zaporigia
//Frankivsk
//Kyiv
//Kirovograd
//Krim
//Lugansk
//Lviv
//Mukolaiv
//Odesa
//Poltava
//Rivne
//Sumi
//Ternopil
//Harkiv
//Herson
//Hmelnitskiy
//Cherkasi
//Chernivci
//Chernigiv


// [{region: "Vinitsia", name:"Вінницька область"},
// {region: "Volin", name:"Волинська область"},
// {region: "Dnipro", name:"Дніпропетровська область"},
// {region: "Donetsk", name:"Донецька область"},
// {region: "Gitomir", name:"Житомирська область"},
// {region: "Zakarpat", name:"Закарпатська область"},
// {region: "Zaporigia", name:"Запорізька область"},
// {region: "Frankivsk", name:"Івано-Франківська область"},
// {region: "Kyiv", name:"Київська область"},
// {region: "Kirovograd", name:"Кіровоградська область"},
// {region: "Krim", name:"Кримська область"},
// {region: "Lugansk", name:"Луганська область"},
// {region: "Lviv", name:"Львівська область"},
// {region: "Mukolaiv", name:"Миколаївська область"},
// {region: "Odesa", name:"Одеська область"},
// {region: "Poltava", name:"Полтавська область"},
// {region: "Rivne", name:"Рівненська область"},
// {region: "Sumi", name:"Сумська область"},
// {region: "Ternopil", name:"Тернопільська область"},
// {region: "Harkiv", name:"Харківська область"},	
// {region: "Herson", name:"Херсонська область"},
// {region: "Hmelnitskiy", name:"Хмельницька область"},
// {region: "Cherkasi", name:"Черкаська область"},
// {region: "Chernivci", name:"Чернівецька область"},
// {region: "Chernigiv", name: "Чернігівська область"}]