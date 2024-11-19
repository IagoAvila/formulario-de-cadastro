import { Component } from '@angular/core';
import { ViaCepService } from './services/via-cep.service'; // Importa o serviço

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cep: string = ''; // Valor digitado no campo CEP
  logradouro: string = ''; // Valor do logradouro retornado pela API
  bairro: string = ''; // Valor do bairro retornado pela API
  cidade: string = ''; // Valor da cidade retornada pela API
  numero: string = ''; // Número preenchido manualmente
  complemento: string = ''; // Complemento preenchido manualmente

  constructor(private viaCepService: ViaCepService) {}

  // Método que será chamado toda vez que o valor do campo cep mudar
  buscarCep(): void {
    if (this.cep.length === 8) { // Verifica se o CEP tem 8 caracteres
      this.viaCepService.getCep(this.cep).subscribe(
        (dados) => {
          if (dados.erro) {
            alert('CEP não encontrado!');
            return;
          }
          // Atualiza os campos do formulário com os dados retornados
          this.logradouro = dados.logradouro;
          this.bairro = dados.bairro;
          this.cidade = dados.localidade;
        },
        (error) => {
          console.error('Erro ao buscar o CEP:', error);
          alert('Erro ao buscar o CEP. Tente novamente.');
        }
      );
    } else {
      // Caso o CEP não tenha 8 dígitos
      this.logradouro = '';
      this.bairro = '';
      this.cidade = '';
    }
  }
}
