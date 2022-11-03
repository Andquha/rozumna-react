import React, { useState , useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux'
import { useFetching } from '../hooks/useFetching';
import HeadquartersServise from '../api/HeadquartersServise';
import HeadquartersUtils from '../utils/HeadqartersUtils';
import Button from '../components/UI/Button/Button';
import SmallButton from '../components/UI/Button/SmallButton';
import ShtabSection from '../components/Headquarters/ShtabSection';
import Modal from '../components/UI/Modal/Modal';
import '../styles/Headquarters.scss';

export default function Headquarters() {
  const regions = [
    {region: "Vinitsia", name:"Вінницька область"},{region: "Volin", name:"Волинська область"},{region: "Dnipro", name:"Дніпропетровська область"},
    {region: "Donetsk", name:"Донецька область"},{region: "Gitomir", name:"Житомирська область"},{region: "Zakarpat", name:"Закарпатська область"},
    {region: "Zaporigia", name:"Запорізька область"},{region: "Frankivsk", name:"Івано-Франківська область"},{region: "Kyiv", name:"Київська область"},
    {region:"Kirovograd", name:"Кіровоградська область"},{region: "Krim", name:"Кримська область"},{region: "Lugansk", name:"Луганська область"},
    {region: "Lviv", name:"Львівська область"},{region: "Mukolaiv", name:"Миколаївська область"},{region: "Odesa", name:"Одеська область"},
    {region: "Poltava", name:"Полтавська область"},{region: "Rivne", name:"Рівненська область"},{region: "Sumi", name:"Сумська область"},
    {region: "Ternopil", name:"Тернопільська область"},{region: "Harkiv", name:"Харківська область"},	{region: "Herson", name:"Херсонська область"},
    {region: "Hmelnitskiy", name:"Хмельницька область"},{region: "Cherkasi", name:"Черкаська область"},{region: "Chernivci", name:"Чернівецька область"},
    {region: "Chernigiv", name: "Чернігівська область"}
  ]
  const [shtabs, setShtabs] = useState([]);
  const [aidFilter, setAidFilter] = useState(true);
  const [edit, setEdit] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const regionsLetterRef = useRef([]);
  const refs = useSelector(state => state.refs)
  const observer = useRef([])
  
  useEffect(()=>{   //Виконуэмо функцію при загрузці сторінки
    fetchingShtab();
  },[])

  const [fetchingShtab, isLoading, isError] = useFetching( async () => {   //Відправляемо запрос в наш кастомний хук
    const response = await HeadquartersServise.getAll()
    setShtabs(response.data)   //Записуэмо результат в стаейт
  })

  const ShtabSectionMemo = useMemo(()=>{   //Виконуємо функцію запоминаємо і виводим результат
    if(isLoading) return (<div>Відбувається пошук штабів зачекайте будь-ласка...</div>)   //Виводимо статус загрузки чи помилки

    if(isError) return (<div>Виникла помилка: {isError}</div>)

    return(   //Повертаэмо нашу секцію на кожну область
        regions.map(region => (
        <ShtabSection 
          key={region.region} 
          region={region.region} 
          name={region.name} 
          shtabArray={shtabs} 
          filter={aidFilter}
          edit={edit}
          setVisibleModal={setVisibleModal}
        />
        ))
    )
  
  },[ shtabs , aidFilter, edit, isLoading])


  const ShtabRefMemo = useMemo(()=>{
    const shtabfiltred = HeadquartersUtils.ArraysFilter(shtabs); //Проходимся пр масиву і отримуем літери областей в яких є хоч якісь штаби
    const currentRefs = refs.filter(el => el.offsetWidth>0).sort((a, b) => a.children[0].innerText[0].localeCompare(b.children[0].innerText[0]))
    return( //Повертаємо літери з силками на самі області в залежності від фільтру(надають/приймають)
      shtabfiltred.map((element, index) => {
        if(aidFilter){
          if(element.shtablistAccept.length >=1 ){
            return(
            <div key={element.fullname} className='Shtab-refs-list'>
              <div 
                className='Shtab-refs-list-letter' 
                onMouseOver={(e)=>{e.target.innerText = element.fullname}}
                onMouseLeave={(e)=>{e.target.innerText = element.name}}
                onClick={()=>{ScrollToElement(currentRefs.filter(el => el.children[0].innerText.split(' ')[0] === element.fullname)[0])}} 
                ref={el => regionsLetterRef.current[index] = el}
                >
                  {element.name}
                </div>
            </div>)
          }
        }else{
          if(element.shtablistProvide.length >=1 ){
            return(
            <div key={element.fullname} className='Shtab-refs-list'>
              <div 
                className='Shtab-refs-list-letter' 
                onMouseOver={(e)=>{e.target.innerText = element.fullname}}
                onMouseLeave={(e)=>{e.target.innerText = element.name}}
                onClick={()=>{ScrollToElement(currentRefs.filter(el => el.children[0].innerText.split(' ')[0] === element.fullname)[0])}} 
                ref={el => regionsLetterRef.current[index] = el}
                >
                  {element.name}
                </div>
            </div>)
          }
        }
      })
    )

  },[shtabs,aidFilter, refs])

  useEffect(() => {  //Відстежуємо області. Якщо розділ області на екрані то подсвічуємо навігацію справа
    if(refs.length){
      refs.filter(el => el.offsetWidth>0).sort((a, b) => a.children[0].innerText[0].localeCompare(b.children[0].innerText[0])).forEach((el,index) => {
        if(observer.current[index]) observer.current[index].disconnect()
        var callback = function(entries, observer) {
        if(entries[0].isIntersecting){
          regionsLetterRef.current.filter(el => el !== null)[index].className = `${regionsLetterRef.current.filter(el => el!== null)[index].className} active`
        }else{
          regionsLetterRef.current.filter(el => el !== null)[index].className = regionsLetterRef.current.filter(el => el!== null)[index].className.split(" ")[0]
        }
      };
      observer.current[index] = new IntersectionObserver(callback);
      observer.current[index].observe(refs.filter(el => el.offsetWidth>0).sort((a, b) => a.children[0].innerText[0].localeCompare(b.children[0].innerText[0]))[index]);
      })
    }
  })

  const ScrollToElement = (el) =>  el.scrollIntoView({behavior: 'smooth' })  //Скрол до розділа області

  return (
      <main className='Headquarters'>
      <div className='Headquarters_container _container'>
        <div className='Headquarters_content'>
          <Modal visible={visibleModal} setVisible={setVisibleModal}>Тут Будет форма</Modal>
          <div className='buttons_filter'>
            <Button 
              aidFilterAccept={aidFilter}  //Передаємо значеня фільтру
              onClick={() => {!aidFilter && setAidFilter(true)}} //Якщо фільтр активний: нічого не робимо, фільтр не активний: робимо його активним
            >Приймаэмо допомогу</Button >
            <Button  
              aidFilterProvide={!aidFilter}
              onClick={() => {aidFilter && setAidFilter(false)}}
            >Надаэмо допомогу</Button>
          </div>

          <div className='buttons_Edit'>
            <SmallButton
              active={edit}  //Вкл/Викл кнопки редагування
              onClick={() => setEdit(!edit)}
            >
              Редагувати
            </SmallButton >
          </div>

          <div className='Shtab-list'>
            {ShtabSectionMemo}
          </div>

          <div className='Shtab-refs'> 
            {ShtabRefMemo} 
          </div>

        </div>
      </div>
    </main>
  )
}


