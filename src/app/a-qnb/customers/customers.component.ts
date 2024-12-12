import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputDemoModule } from 'src/app/demo/components/uikit/input/inputdemo.module';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,InputDemoModule,InputNumberModule,ChipsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

}
