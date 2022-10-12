import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ShtabItem from '../components/Headquarters/ShtabItem';
import '../styles/Headquarters.scss';

export default function Headquarters() {
  const [headquarters, setHeadquarters] = useState([
    {id:1, name:"Київський штаб", region:"Kyiv", contactname:"Василь", contactphone:"+380992696082", link:"https://www.facebook.com/bf.rozumna.syla", maplink:"https://goo.gl/maps/syQuiKKd9GEpmeSR6", aid: true},
    {id:2, name:"Ровенский штаб", region:"Rivne", contactname:"Василь", contactphone:"+380992696082", link:"https://www.facebook.com/bf.rozumna.syla", maplink:"https://goo.gl/maps/syQuiKKd9GEpmeSR6", aid: true},
    {id:3, name:"Хмельницький штаб", region:"Hmelnitskiy", contactname:"Василь", contactphone:"+380992696082", link:"https://www.facebook.com/bf.rozumna.syla", maplink:"https://goo.gl/maps/syQuiKKd9GEpmeSR6", aid: true},
    {id:4, name:"Львівський штаб", region:"Lviv", contactname:"Василь", contactphone:"+380992696082", link:"https://www.facebook.com/bf.rozumna.syla", maplink:"https://goo.gl/maps/syQuiKKd9GEpmeSR6", aid: false},
    {id:5, name:"Луцкій штаб", region:"Lutsk", contactname:"Василь", contactphone:"+380992696082", link:"https://www.facebook.com/bf.rozumna.syla", maplink:"https://goo.gl/maps/syQuiKKd9GEpmeSR6", aid: false},
    {id:6, name:"Дніпропетровський штаб", region:"Dnipro", contactname:"Василь", contactphone:"+380992696082", link:"https://www.facebook.com/bf.rozumna.syla", maplink:"https://goo.gl/maps/syQuiKKd9GEpmeSR6", aid: false}
  ]);
  const [aidFilter, setAidFilter] = useState({get: true, give: false});
  const [stateBtn, setStateBtn] = useState(true);
  const [stateBtn2, setStateBtn2] = useState(false);

  const [shtabGet, setShtabGet] = useState([])
  const [shtabGive, setShtabGive] = useState([])

  useEffect(()=>{
    setShtabGet(headquarters.filter(shtab => (shtab.aid == true)))
    setShtabGive(headquarters.filter(shtab => (shtab.aid !== true)))
  },[stateBtn, stateBtn2])

  return (
    <main className='Headquarters'>
      <div className='Headquarters_container _container'>
        <div className='Headquarters_content'>
          <div className='buttons_filter'>
            <button className={`Button ${stateBtn? "active": ""}`} onClick={() => {setAidFilter({...aidFilter, get: !aidFilter.get}); setStateBtn(!stateBtn)}}>Приймаэмо допомогу</button>
            <button className={`Button ${stateBtn2? "active": ""}`} onClick={() => {setAidFilter({...aidFilter, get: !aidFilter.get}); setStateBtn2(!stateBtn2)}}>Надаэмо допомогу</button>
          </div>
          {stateBtn&&stateBtn2?<div>Штаби які приймають допомогу</div>:null}
          {stateBtn?
            shtabGet.map(shtab => 
              <ShtabItem key={shtab.id} shtab={shtab}/>
            )
          :null
          }
          {stateBtn&&stateBtn2?<div>Штаби які Надають допомогу</div>:null}
          {stateBtn2?
            shtabGive.map(shtab => 
              <ShtabItem key={shtab.id} shtab={shtab}/>
            )
          :null
          }
        </div>
      </div>
    </main>
  )
}
