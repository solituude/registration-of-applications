import { makeAutoObservable } from 'mobx';
import {ApplicationType} from "../types/types";
import {dataForLogTable} from "../assets/data/exampleData";

class LogStore {
    allAppsArray: ApplicationType[] = dataForLogTable; // все заявки
    lastId: number = this.allAppsArray.length + 1;
    page: number = 1; // текущая страница
    countPages: number = 1; // количество страниц
    currAppsArray: ApplicationType[] = this.allAppsArray.slice(0, 15); // массив заявок н-ой страницы

    currApp: ApplicationType = {
        id: 0,
        address: 'string',
        coordinates: 'string',
        accidentType: 'string',
        priority: 0,
        name: 'string',
        phone: 'string'
    }; // текущая выбранная/новая заявка

    constructor() {
        makeAutoObservable(this)
    }

    getAppsArrayByPage = (page: number): void => {
        this.page = page;
        this.currAppsArray = this.allAppsArray.slice(15 * (page - 1), 15 * page);
    }

    getAppById = (id: number): void  => {
        this.currApp = this.allAppsArray[id - 1];
    }

    editApp = (id: number): void => {
        this.currApp = this.allAppsArray[id - 1];
        // ....
    }

    createApp = (newApp: ApplicationType): void => {
        newApp.id = this.lastId;
        this.lastId++;
        this.allAppsArray.push(newApp);
    }

}

const logs = new LogStore()
export default logs;