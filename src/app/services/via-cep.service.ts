import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  // URL base da API ViaCEP
  private apiUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  // Método que retorna os dados do CEP
  getCep(cep: string): Observable<any> {
    // Fazendo a requisição para a API ViaCEP com o CEP informado
    return this.http.get<any>(`${this.apiUrl}${cep}/json/`);
  }
}
