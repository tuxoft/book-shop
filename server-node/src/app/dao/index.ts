import * as allCatsJson from './json/all-cats.json';
import * as allBirdsJson from './json/all-birds.json';
import * as allDogsJson from './json/all-dogs.json';

export const getAll = (what: string): any => {
  switch (what) {
    case 'cats': return allCatsJson;
    case 'birds': return allBirdsJson;
    case 'dogs': return allDogsJson;
    default: return [];
  }
};

export const findById = (what: string, id) => getAll(what).filter(e => String(e.id) === id);
