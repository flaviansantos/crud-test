import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Clients {
    id: number;
    name: string;
    lastName: string;
    email: string;
    document: string;
    documentType: string;
    phoneNumber: string;
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    url = 'https://localhost:7135/Clients';

    constructor(private http: HttpClient) {
    }
    ngOnInit() {
        console.log('ngOnInit');
        this.PegarTodos();
    }
    PegarTodos(): Observable<Clients[]> {
        return this.http.get<Clients[]>(this.url);
    }

    PegarPeloId(id: number): Observable<Clients> {
        const apiUrl = `${this.url}/${id}`;
        return this.http.get<Clients>(apiUrl);
    }

    SalvarClient(client: Clients): Observable<any> {
        return this.http.post<Clients>(this.url, client, httpOptions);
    }

    AtualizarClient(client: Clients): Observable<any> {
        return this.http.put<Clients>(this.url, client, httpOptions);
    }

    ExcluirClient(id: number): Observable<any> {
        const apiUrl = `${this.url}/${id}`;
        return this.http.delete<number>(apiUrl, httpOptions);
    }
}