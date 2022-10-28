import React, { useState , useEffect } from 'react'
import ShtabFilterName from './ShtabFilterName';
import ShtabItem from './ShtabItem';

export default function ShtabSection({region, name, shtabArray, filter, edit, setVisibleModal}) {
  const [filtredRegionsShtab, setFiltredRegionsShtab] = useState([])
  const [filtred, setFiltred] = useState(false)

  const [shtabAccept, setShtabAccept] = useState([]);
  const [shtabProvide, setShtabProvide] = useState([]);

  useEffect(()=>{                        
    setFiltredRegionsShtab(shtabArray.filter(shtab => (shtab.region === region)))
    setFiltred(true) 
  },[shtabArray])

  useEffect(()=>{
    let Accept = [];
    let Provide = [];
    
    filtredRegionsShtab.map(shtab=>{
      if(shtab.aid === "accept"){
        Accept.push(shtab)
      }else{
        Provide.push(shtab)
      }
    });

    setShtabAccept(Accept)
    setShtabProvide(Provide)

    return ()=>{setFiltred(false)}
  },[filtred , shtabArray])

  if(filter){
    if(shtabAccept.length >=1){
      return (
        <div className='Shtab-filter-region'>
            <ShtabFilterName name={name} filter={filter} shtabArray={shtabArray}/>
            {shtabAccept.map(shtab => <ShtabItem key={shtab.id} shtab={shtab} edit={edit} setVisibleModal={setVisibleModal}/>)}
        </div>
      )
    }
  }else{
    if(shtabProvide.length >=1){
      return (
        <div className='Shtab-filter-region'>
            <ShtabFilterName name={name} filter={filter} shtabArray={shtabArray}/>   
            {shtabProvide.map(shtab => <ShtabItem key={shtab.id} shtab={shtab} edit={edit} setVisibleModal={setVisibleModal}/>)}
        </div>
      )
    }
  }
}
{/* <div className='Shtab-filter-region-emty'>В даній області у нас немає даних по гуманітарних штабах</div> */}
