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

  constructor(type: { new(): T }, bodies: IndexParamsBodies) {
    const instance: T = new type();
    this.indexName = this.generateIndexName(instance);
    this.indexType = this.indexName;
    this.bodies = bodies;
  }

  private generateIndexName = <T>(type: T) => {
    switch (type.constructor.name) {
      case 'Book' :
        return 'book';
      case 'Author':
        return 'author';
      default:
        throw new Error('Unsupported type ' + type.constructor.name);
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

  public getSearchDocumentParams = (text: string) => ({
    index: this.indexName,
    body: this.bodies.getSearchBody(text).body,
  })
}
