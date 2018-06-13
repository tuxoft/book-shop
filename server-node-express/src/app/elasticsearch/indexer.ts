import * as client from './client';
import { IndexParams } from './index.params';

export abstract class Indexer<T> {

  indexReady: boolean = false;
  indexParams: IndexParams<T>;

  protected abstract getDocumentsForIndexing(): Promise<T[]>;

  constructor(indexParams: IndexParams<T>) {
    this.indexParams = indexParams;
  }

  public init = async () => {
    this.indexReady = false;
    await this.deleteIndex();
    await this.createIndex();
    await this.fillIndex();
    this.indexReady = true;
  }

  public isIndexReady = () => this.indexReady;

  public searchDocument = (text: string) => client.searchDocument(this.indexParams, text);

  public indexDocument = (document: T) => client.indexDocument(this.indexParams, document);

  public deleteDocument = (document: T) => client.deleteDocument(this.indexParams, document);

  private deleteIndex = async () => {
    if (await client.indexExists(this.indexParams)) {
      await client.deleteIndex(this.indexParams);
    }
  }

  private createIndex = async () => {

    await client.createIndex(this.indexParams);

    await client.closeIndex(this.indexParams);
    await client.indexSettings(this.indexParams);
    await client.openIndex(this.indexParams);

    await client.indexMapping(this.indexParams);
  }

  private fillIndex = async () => {
    const documents = await this.getDocumentsForIndexing();

    await Promise.all(documents.map(document =>
      client.indexDocument(this.indexParams, document)));
  }
}
