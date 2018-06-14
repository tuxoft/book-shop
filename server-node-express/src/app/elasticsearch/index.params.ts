export interface IndexType<T> {
  new (...args: any[]): T;
}

export interface IndexParamsBody {
  body: object;
}

export interface IndexParamsBodies {
  getSettingsBody: () => IndexParamsBody;
  getMappingBody: () => IndexParamsBody;
  getSearchBody: (searchText: string) => IndexParamsBody;
  getSuggestBody: (searchText: string) => IndexParamsBody;
}

export class IndexParams<T> {
  indexName: string;
  indexType: string;
  bodies: IndexParamsBodies;

  constructor(indexType: IndexType<T>, bodies: IndexParamsBodies) {
    const instance: T = new indexType();
    this.indexName = this.generateIndexName(instance);
    this.indexType = this.indexName;
    this.bodies = bodies;
  }

  private generateIndexName = <T>(indexType: T) => {
    switch (indexType.constructor.name) {
      case 'Book' :
        return 'book';
      case 'Author':
        return 'author';
      default:
        throw new Error('Unsupported index type ' + indexType.constructor.name);
    }
  }

  public getIndicesParams = () => ({
    index: this.indexName,
  })

  public getMappingParams = () => ({
    index: this.indexName,
    type: this.indexType,
    body: this.bodies.getMappingBody().body,
  })

  public getSettingsParams = () => ({
    index: this.indexName,
    body: this.bodies.getSettingsBody().body,
  })

  public getIndexDocumentParams = (document: T) => ({
    index: this.indexName,
    type: this.indexType,
    id: document['id'],
    body: document,
  })

  public getDeleteDocumentParams = (document: T) => ({
    index: this.indexName,
    type: this.indexType,
    id: document['id'],
  })

  public getSearchParams = (text: string) => ({
    index: this.indexName,
    body: this.bodies.getSearchBody(text).body,
  })

  public getSuggestParams = (text: string) => ({
    index: this.indexName,
    body: this.bodies.getSuggestBody(text).body,
  })
}
