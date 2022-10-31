export default class HeadquartersUtils {
    static ArraysFilter(Shtablist) {   //Отримуємо весь список штабів
        let vinitsia = {name: "B", fullname: 'Вінницька', shtablistAccept: [], shtablistProvide: []}
        let volin = {name: "B", fullname: 'Волинська', shtablistAccept: [], shtablistProvide: []}
        let dnipro = {name: "Д", fullname: 'Дніпропетровська', shtablistAccept: [], shtablistProvide: []}
        let donetsk = {name: "Д", fullname: 'Донецька', shtablistAccept: [], shtablistProvide: []}
        let gitomir = {name: "Ж", fullname: 'Житомирська', shtablistAccept: [], shtablistProvide: []}
        let zakarpat = {name: "З", fullname: 'Закарпатська', shtablistAccept: [], shtablistProvide: []}
        let zaporigia = {name: "З", fullname: 'Запоріжська', shtablistAccept: [], shtablistProvide: []}
        let frankivsk = {name: "І", fullname: 'Івано-Франківська', shtablistAccept: [], shtablistProvide: []}
        let kyiv = {name: "К", fullname: 'Київська', shtablistAccept: [], shtablistProvide: []}
        let kirovograd = {name: "К", fullname: 'Кіровоградська', shtablistAccept: [], shtablistProvide: []}
        let krim = {name: "К", fullname: 'Кримська', shtablistAccept: [], shtablistProvide: []}
        let lugansk = {name: "Л", fullname: 'Луганська', shtablistAccept: [], shtablistProvide: []}
        let lviv = {name: "Л", fullname: 'Львівська', shtablistAccept: [], shtablistProvide: []}
        let mukolaiv = {name: "М", fullname: 'Миколаївська', shtablistAccept: [], shtablistProvide: []}
        let odesa = {name: "О", fullname: 'Одеська', shtablistAccept: [], shtablistProvide: []}
        let poltava = {name: "П", fullname: 'Полтавська', shtablistAccept: [], shtablistProvide: []}
        let rivne = {name: "Р", fullname: 'Рівненська', shtablistAccept: [], shtablistProvide: []}
        let sumi = {name: "С", fullname: 'Сумська', shtablistAccept: [], shtablistProvide: []}
        let ternopil = {name: "Т", fullname: 'Тернопільська', shtablistAccept: [], shtablistProvide: []}
        let harkiv = {name: "Х", fullname: 'Харківська', shtablistAccept: [], shtablistProvide: []}
        let herson = {name: "Х", fullname: 'Херсонська', shtablistAccept: [], shtablistProvide: []}
        let hmelnitskiy = {name: "Х", fullname: 'Хмельницька', shtablistAccept: [], shtablistProvide: []}
        let cherkasi = {name: "Ч", fullname: 'Черкаська', shtablistAccept: [], shtablistProvide: []}
        let chernivci = {name: "Ч", fullname: 'Чернівецька', shtablistAccept: [], shtablistProvide: []}
        let chernigiv = {name: "Ч", fullname: 'Чернігівська', shtablistAccept: [], shtablistProvide: []}

        Shtablist.forEach(shtab => {
            switch (shtab.aid){
                case "accept":{
                    switch (shtab.region){
                        case"Vinitsia":
                            vinitsia = {...vinitsia, shtablistAccept: [...vinitsia.shtablistAccept, shtab]}
                            break;
                        case"Volin":
                            volin = {...volin, shtablistAccept: [...volin.shtablistAccept, shtab]}
                            break;
                        case"Dnipro":
                            dnipro = {...dnipro, shtablistAccept: [...dnipro.shtablistAccept, shtab]}
                            break;
                        case"Donetsk":
                            donetsk = {...donetsk, shtablistAccept: [...donetsk.shtablistAccept, shtab]}
                            break;
                        case"Gitomir":
                            gitomir = {...gitomir, shtablistAccept: [...gitomir.shtablistAccept, shtab]}
                            break;
                        case"Zakarpat":
                            zakarpat = {...zakarpat, shtablistAccept: [...zakarpat.shtablistAccept, shtab]}
                            break;
                        case"Zaporigia":
                            zaporigia = {...zaporigia, shtablistAccept: [...zaporigia.shtablistAccept, shtab]}
                            break;
                        case"Frankivsk":
                            frankivsk = {...frankivsk, shtablistAccept: [...frankivsk.shtablistAccept, shtab]}
                            break;
                        case"Kyiv":
                            kyiv = {...kyiv, shtablistAccept: [...kyiv.shtablistAccept, shtab]}
                            break;
                        case"Kirovograd":
                            kirovograd = {...kirovograd, shtablistAccept: [...kirovograd.shtablistAccept, shtab]}
                            break;
                        case"Krim":
                            krim = {...krim, shtablistAccept: [...krim.shtablistAccept, shtab]}
                            break;
                        case"Lugansk":
                            lugansk = {...lugansk, shtablistAccept: [...lugansk.shtablistAccept, shtab]}
                            break;
                        case"Lviv":
                            lviv = {...lviv, shtablistAccept: [...lviv.shtablistAccept, shtab]}
                            break;
                        case"Mukolaiv":
                            mukolaiv = {...mukolaiv, shtablistAccept: [...mukolaiv.shtablistAccept, shtab]}
                            break;
                        case"Odesa":
                            odesa = {...odesa, shtablistAccept: [...odesa.shtablistAccept, shtab]}
                            break;
                        case"Poltava":
                            poltava = {...poltava, shtablistAccept: [...poltava.shtablistAccept, shtab]}
                            break;
                        case"Rivne":
                            rivne = {...rivne, shtablistAccept: [...rivne.shtablistAccept, shtab]}
                            break;
                        case"Sumi":
                            sumi = {...sumi, shtablistAccept: [...sumi.shtablistAccept, shtab]}
                            break;
                        case"Ternopil":
                            ternopil = {...ternopil, shtablistAccept: [...ternopil.shtablistAccept, shtab]}
                            break;
                        case"Harkiv":
                            harkiv = {...harkiv, shtablistAccept: [...harkiv.shtablistAccept, shtab]}
                            break;
                        case"Herson":
                            herson = {...herson, shtablistAccept: [...herson.shtablistAccept, shtab]}
                            break;
                        case"Hmelnitskiy":
                            hmelnitskiy = {...hmelnitskiy, shtablistAccept: [...hmelnitskiy.shtablistAccept, shtab]}
                            break;
                        case"Cherkasi":
                            cherkasi = {...cherkasi, shtablistAccept: [...cherkasi.shtablistAccept, shtab]}
                            break;
                        case"Chernivci":
                            chernivci = {...chernivci, shtablistAccept: [...chernivci.shtablistAccept, shtab]}
                            break;
                        case"Chernigiv":
                            chernigiv = {...chernigiv, shtablistAccept: [...chernigiv.shtablistAccept, shtab]}
                            break;
                }
                } 
                break;
                case "provide":{
                    switch (shtab.region){
                        case"Vinitsia":
                            vinitsia = {...vinitsia, shtablistProvide: [...vinitsia.shtablistProvide, shtab]}
                            break;
                        case"Volin":
                            volin = {...volin, shtablistProvide: [...volin.shtablistProvide, shtab]}
                            break;
                        case"Dnipro":
                            dnipro = {...dnipro, shtablistProvide: [...dnipro.shtablistProvide, shtab]}
                            break;
                        case"Donetsk":
                            donetsk = {...donetsk, shtablistProvide: [...donetsk.shtablistProvide, shtab]}
                            break;
                        case"Gitomir":
                            gitomir = {...gitomir, shtablistProvide: [...gitomir.shtablistProvide, shtab]}
                            break;
                        case"Zakarpat":
                            zakarpat = {...zakarpat, shtablistProvide: [...zakarpat.shtablistProvide, shtab]}
                            break;
                        case"Zaporigia":
                            zaporigia = {...zaporigia, shtablistProvide: [...zaporigia.shtablistProvide, shtab]}
                            break;
                        case"Frankivsk":
                            frankivsk = {...frankivsk, shtablistProvide: [...frankivsk.shtablistProvide, shtab]}
                            break;
                        case"Kyiv":
                            kyiv = {...kyiv, shtablistProvide: [...kyiv.shtablistProvide, shtab]}
                            break;
                        case"Kirovograd":
                            kirovograd = {...kirovograd, shtablistProvide: [...kirovograd.shtablistProvide, shtab]}
                            break;
                        case"Krim":
                            krim = {...krim, shtablistProvide: [...krim.shtablistProvide, shtab]}
                            break;
                        case"Lugansk":
                            lugansk = {...lugansk, shtablistProvide: [...lugansk.shtablistProvide, shtab]}
                            break;
                        case"Lviv":
                            lviv = {...lviv, shtablistProvide: [...lviv.shtablistProvide, shtab]}
                            break;
                        case"Mukolaiv":
                            mukolaiv = {...mukolaiv, shtablistProvide: [...mukolaiv.shtablistProvide, shtab]}
                            break;
                        case"Odesa":
                            odesa = {...odesa, shtablistProvide: [...odesa.shtablistProvide, shtab]}
                            break;
                        case"Poltava":
                            poltava = {...poltava, shtablistProvide: [...poltava.shtablistProvide, shtab]}
                            break;
                        case"Rivne":
                            rivne = {...rivne, shtablistProvide: [...rivne.shtablistProvide, shtab]}
                            break;
                        case"Sumi":
                            sumi = {...sumi, shtablistProvide: [...sumi.shtablistProvide, shtab]}
                            break;
                        case"Ternopil":
                            ternopil = {...ternopil, shtablistProvide: [...ternopil.shtablistProvide, shtab]}
                            break;
                        case"Harkiv":
                            harkiv = {...harkiv, shtablistProvide: [...harkiv.shtablistProvide, shtab]}
                            break;
                        case"Herson":
                            herson = {...herson, shtablistProvide: [...herson.shtablistProvide, shtab]}
                            break;
                        case"Hmelnitskiy":
                            hmelnitskiy = {...hmelnitskiy, shtablistProvide: [...hmelnitskiy.shtablistProvide, shtab]}
                            break;
                        case"Cherkasi":
                            cherkasi = {...cherkasi, shtablistProvide: [...cherkasi.shtablistProvide, shtab]}
                            break;
                        case"Chernivci":
                            chernivci = {...chernivci, shtablistProvide: [...chernivci.shtablistProvide, shtab]}
                            break;
                        case"Chernigiv":
                            chernigiv = {...chernigiv, shtablistProvide: [...chernigiv.shtablistProvide, shtab]}
                            break;
                }
                }
                break;
            }
            
        });
        return [
        vinitsia,
        volin,
        dnipro,
        donetsk,
        gitomir,
        zakarpat,
        zaporigia,
        frankivsk,
        kyiv,
        kirovograd,
        krim,
        lugansk,
        lviv,
        mukolaiv,
        odesa,
        poltava,
        rivne,
        sumi,
        ternopil,
        harkiv,
        herson,
        hmelnitskiy,
        cherkasi,
        chernivci,
        chernigiv,
        ]
    }
}




// const regions = [
//     {region: "Vinitsia", name:"Вінницька область"},{region: "Volin", name:"Волинська область"},{region: "Dnipro", name:"Дніпропетровська область"},
//     {region: "Donetsk", name:"Донецька область"},{region: "Gitomir", name:"Житомирська область"},{region: "Zakarpat", name:"Закарпатська область"},
//     {region: "Zaporigia", name:"Запорізька область"},{region: "Frankivsk", name:"Івано-Франківська область"},{region: "Kyiv", name:"Київська область"},
//     {region: "Kirovograd", name:"Кіровоградська область"},{region: "Krim", name:"Кримська область"},{region: "Lugansk", name:"Луганська область"},
//     {region: "Lviv", name:"Львівська область"},{region: "Mukolaiv", name:"Миколаївська область"},{region: "Odesa", name:"Одеська область"},
//     {region: "Poltava", name:"Полтавська область"},{region: "Rivne", name:"Рівненська область"},{region: "Sumi", name:"Сумська область"},
//     {region: "Ternopil", name:"Тернопільська область"},{region: "Harkiv", name:"Харківська область"},	{region: "Herson", name:"Херсонська область"},
//     {region: "Hmelnitskiy", name:"Хмельницька область"},{region: "Cherkasi", name:"Черкаська область"},{region: "Chernivci", name:"Чернівецька область"},
//     {region: "Chernigiv", name: "Чернігівська область"}
//   ]