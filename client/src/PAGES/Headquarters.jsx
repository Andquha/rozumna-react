import React, { useState , useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux'
import { useFetching } from '../hooks/useFetching';
import Button from '../components/UI/Button/Button';
import ShtabSection from '../components/Headquarters/ShtabSection';
import HeadquartersServise from '../api/HeadquartersServise';
import '../styles/Headquarters.scss';
import { useRef } from 'react';
import SmallButton from '../components/UI/Button/SmallButton';
import Modal from '../components/UI/Modal/Modal';


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
  
  useEffect(()=>{   //Виконуэмо функцію при загрузці сторінки
    fetchingShtab()
  },[])

  const [fetchingShtab, isLoading, isError] = useFetching( async () => {   //Відправляемо запрос в наш кастомний хук
    const response = await HeadquartersServise.getAll()
    setShtabs(response.data)   //Записуэмо результат в стаейт
  })

  const ShtabSectionMemo = useMemo(()=>{   //Виконуємо функцію запоминаємо і виводим результат
    if(isLoading) return (<div>Відбувається пошук штабів зачекайте будь-ласка...</div>)   //Виводимо статус загрузки чи помилки

    if(isError) return (<div>Виникла помилка: {isError}</div>)

    return(   //Нашу секцію на кожну область
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
    
  },[ shtabs , aidFilter, edit])


  const refs = useSelector(state => state.refs)
  
  // useEffect(() => {  //Відстежуємо області. Якщо розділ області на екрані то подсвічуємо навігацію справа
  //   if(refs.length){
  //     refs.forEach((el,index) => {
  //       if(observer.current[index]) observer.current[index].disconnect()
  //       var callback = function(entries, observer) {
  //       if(entries[0].isIntersecting){
  //         regionsLetterRef.current[index].className = `${regionsLetterRef.current[index].className} active`
  //       }else{
  //         regionsLetterRef.current[index].className = regionsLetterRef.current[index].className.split(" ")[0]
  //       }
  //     };
  //     observer.current[index] = new IntersectionObserver(callback);
  //     observer.current[index].observe(refs[index]);
  //     })
  //   }
  // },[refs])


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
            >Редагувати</SmallButton >
          </div>

          <div className='Shtab-list'>
            {ShtabSectionMemo}
          </div>

          <div className='Shtab-refs'>  
            {refs.length &&    
              refs.filter(el => el.offsetWidth>0).sort((a, b) => a.children[0].innerText[0].localeCompare(b.children[0].innerText[0])).map((el, index)=>{
                return(
                  <div key={el.children[0].innerText[0]} className='Shtab-refs-list'>
                    <div onClick={()=>{ScrollToElement(el)}} ref={el => regionsLetterRef.current[index] = el} className='Shtab-refs-list-letter'>{el.children[0].innerText[0]}</div>
                  </div>
                )
              })
            }
          </div>
          
        </div>
      </div>
    </main>
  )
}


