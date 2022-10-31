import axios from 'axios';

export default class HeadquartersServise {
    static async getAll() {   //Отримуємо весь список штабів
        return await axios.get('../php/Headquarters.php')
    }
}
// '../php/Headquarters.php'

// 'http://localhost:4000/RegionData'