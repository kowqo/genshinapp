import { makeAutoObservable } from 'mobx';
import { fetchWithMethodGet } from './api';
import { API_URL } from './api';

class Chars {
  charList: Characters[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCharList = (data: Characters[]) => {
    this.charList = data;
  };

  getAllChars = async () => {
    const data = await fetchWithMethodGet('/characters/all', 'gelAllChars');
    const formattedData = data.map(this.transformChar);
    this.setCharList(formattedData);
  };

  transformChar = (item: any) => {
    return {
      name: item.name,
      vision: item.vision_key,
      weapon: item.weapon,
      title: item.title,
      nation: item.nation,
      town: item.affiliation,
      rarity: item.rarity,
      desc: item.description,
      icon: `${API_URL}/characters/${
        item.name.includes(' ')
          ? item.name.toLowerCase().split(' ').join('-')
          : item.name.toLowerCase()
      }/icon`,
    };
  };
}

export default new Chars();

export interface Characters {
  name: String;
  vision: String;
  weapon: String;
  title: String;
  nation: String;
  town: String;
  rarity: String;
  desc: String;
  icon: String;
}
