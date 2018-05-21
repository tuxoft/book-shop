import * as es from 'elasticsearch';
import {
  getParamsForAddDocument,
  getParamsForIndex,
  getParamsForMappingBooks,
  getParamsForSearchBooks,
} from './params';

const config = {
  host: 'localhost:9200',
  log: 'error',
};

const client = new es.Client(config);

export function createIndex() {
  return client.indices.create(getParamsForIndex());
}

export function deleteIndex() {
  return client.indices.delete(getParamsForIndex());
}

export function indexExists() {
  return client.indices.exists(getParamsForIndex());
}

export function indexMapping() {
  return client.indices.putMapping(getParamsForMappingBooks());
}

export function addDocument(object) {
  return client.index(getParamsForAddDocument(object));
}

export function searchDocument(text: string) {
  return client.search(getParamsForSearchBooks(text));
}

export async function isAvailable(retryCount: number = 0, logging: boolean = false): Promise<void> {
  const prefix = 'Check connection with elasticsearch server ... ';
  const log = (message) => {
    if (logging) {
      console.log(message);
    }
  };

  do {
    try {
      await client.ping({ requestTimeout: 10000 });
      log(prefix + 'available');
      return;

    } catch (err) {
      if (retryCount) {
        log(prefix + `retry (${retryCount})`);
        await (new Promise(res => setTimeout(res, 1000)));
      } else {
        log(prefix + 'unavailable');
        throw(err);
      }
    }
  } while (retryCount--);
}
