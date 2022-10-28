import React, { useRef , useEffect } from 'react'
import clases from './ShtabFilterName.module.scss'
import { useDispatch , useSelector } from 'react-redux'


export default function ShtabFilterName({name}) {
  const ref = useRef(null)
  const dispatch = useDispatch();
  const refs = useSelector(state => state.refs)

  useEffect(()=>{
    if(ref.current && !refs.includes(ref.current)){
      dispatch({type:"ADD-REF", add: ref.current})
    };
  },[])

  return (
    <div className={clases.ShtabFilterRegion} ref={ref}>
      <p className={clases.ShtabFilterRegionName}>{name}</p>
    </div>
  )
}
