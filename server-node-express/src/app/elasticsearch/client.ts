import * as es from 'elasticsearch';
import { IndexParams } from './index.params';

const config = {
  host: 'localhost:9200',
  log: 'error',
};

const client = new es.Client(config);

export async function isAvailable(retryCount: number = 0, logging: boolean = false): Promise<void> {
  const prefix = 'Check connection with elasticsearch server ... ';
  const log = (message) => {
    if (logging) {
      console.log(message);
    }
  };

  let attempt = 0;
  do {
    attempt = attempt + 1;
    try {
      await client.ping({ requestTimeout: 10000 });
      log(prefix + 'available');
      return;

    } catch (err) {
      if (retryCount) {
        log(prefix + `retry (${retryCount - attempt + 1})`);
        await (new Promise(res => setTimeout(res, 1000)));
      } else {
        log(prefix + 'unavailable');
        throw err ;
      }
    }
  } while (attempt < retryCount);
}

export function createIndex<T>(indexParams: IndexParams<T>) {
  return client.indices.create(indexParams.getIndicesParams());
}

export function deleteIndex<T>(indexParams: IndexParams<T>) {
  return client.indices.delete(indexParams.getIndicesParams());
}

export function closeIndex<T>(indexParams: IndexParams<T>) {
  return client.indices.close(indexParams.getIndicesParams());
}

export function openIndex<T>(indexParams: IndexParams<T>) {
  return client.indices.open(indexParams.getIndicesParams());
}

export function indexExists<T>(indexParams: IndexParams<T>) {
  return client.indices.exists(indexParams.getIndicesParams());
}

export function indexMapping<T>(indexParams: IndexParams<T>) {
  return client.indices.putMapping(indexParams.getMappingParams());
}

export function indexSettings<T>(indexParams: IndexParams<T>) {
  return client.indices.putSettings(indexParams.getSettingsParams());
}

export function indexDocument<T>(indexParams: IndexParams<T>, document: T) {
  return client.index(indexParams.getIndexDocumentParams(document));
}

export function indexDocuments<T>(indexParams: IndexParams<T>, documents: T[]) {
  return client.bulk(indexParams.getIndexDocumentsParams(documents));
}

export function deleteDocument<T>(indexParams: IndexParams<T>, document: T) {
  return client.delete(indexParams.getDeleteDocumentParams(document));
}

export function search<T>(indexParams: IndexParams<T>, text: string) {
  return client.search(indexParams.getSearchParams(text));
}

export function suggest<T>(indexParams: IndexParams<T>, text: string) {
  return client.search(indexParams.getSuggestParams(text));
}
