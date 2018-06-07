import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UploadService {
  private uploadUrl = 'api/upload/cover';

  constructor(private http: HttpClient) { }

  postFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('cover', file, file.name);
    return this.http.post(this.uploadUrl, formData);
  }
}
