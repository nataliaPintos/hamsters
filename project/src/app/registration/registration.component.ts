import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Registration {
  constructor(
    public name: string = '',
    public age: string = '',
    public owner: string = '',
    public cartelaVacinacao: string = '',
    public vets: Array<string> = new Array<string>()
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrations: Registration[] = [];
  regModel: Registration;
  showNew: Boolean = false;
  submitType: string = 'Save';
  selectedRow: number;
  constructor() {// o contrutor incializa esses registros, entao sempre que der f5 eles estarao lá (por enquanto)
    this.registrations.push(new Registration('Nati', '2', 'Ana Paula', 'vacina1, vacina2', ['vet1 ', 'vet2']));
    this.registrations.push(new Registration('Nati2', '2', 'Ana Paula', 'vacina', ['vet1 ', 'vet2']));
    this.registrations.push(new Registration('Nati3', '2', 'Ana Paula', 'vacina', ['vet1' , 'vet2']));
  }

  ngOnInit() {}

  onNew() {
    // mostra o form de novo
    this.regModel = new Registration();
    this.submitType = 'Save';
    this.showNew = true;
  }

  onSave() {
    // atribui os campos ao objeto de registro ao salvar ~ as variaveis só sao salvas em tempo de execução~
    if (this.submitType === 'Save') {
      this.registrations.push(this.regModel);
    } else {
      this.registrations[this.selectedRow].name = this.regModel.name;
      this.registrations[this.selectedRow].age = this.regModel.age;
      this.registrations[this.selectedRow].owner = this.regModel.owner;
      this.registrations[this.selectedRow].cartelaVacinacao = this.regModel.cartelaVacinacao;
      this.registrations[this.selectedRow].vets = this.regModel.vets;
    }
    this.showNew = false;
  }

  onEdit(index: number) {
    this.selectedRow = index;
    this.regModel = new Registration();
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  onDelete(index: number) {
    this.registrations.splice(index, 1);
  }

  onCancel(){
    this.showNew = false;
  }


}
