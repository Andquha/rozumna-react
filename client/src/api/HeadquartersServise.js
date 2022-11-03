import axios from 'axios';

export default class HeadquartersServise {
    static async getAll() {   //Отримуємо весь список штабів
        return await axios.get('http://localhost:4000/RegionData')
    }
}
// '../php/Headquarters.php'

// 'http://localhost:4000/RegionData'