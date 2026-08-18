import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor ( private router:Router, private fb:FormBuilder){
    this.registerForm = this.fb.group({
      /**Primer camo del formulario */
      nombre:['',[
        Validators.required,
        Validators.minLength(3)
      ]],
      /**segundo campo del formulario */
      apellido:[
        '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    /**Tercer campo formulario */
    correo:['',
    
      [
      
      Validators.required,
      Validators.email
      ]
   ],
   /**
    CUARTO campo formulario
    */
   password:['',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
    ]
  ],

  confirmarPassword:['',
    [
      Validators.required
    ]
  ]
   },
    {
      validators:this.passwordIguales
    }
  );
  }
  /**
   * Metodos Ger para acceder a los datos en el html
   */
  get nombre(){
    return this.registerForm.get('nombre')
  }

    get apellido(){
    return this.registerForm.get('apellido')
  }

    get correo(){
    return this.registerForm.get('correo')
  }

    get password(){
    return this.registerForm.get('password')
  }
  
  get confirmarPassword(){
    return this.registerForm.get('ConfirmarPassword')
  }

  passwordIguales(form: AbstractControl):ValidationErrors|null{
    const password = form.get('password')?.value;
    const confirmar = form.get('confirmarPassword')?.value;
    
    if( password===confirmar){
      return null;
    }
    return{
      passwordNoCoincide:true
    }
  }
  

   registroUsuario(): void{


    if(this.registerForm.invalid){
      /**Marca todo los campos que muestra error */
      this.registerForm.markAllAsTouched();
      return
    }
    console.log(this.registerForm.value)
    
    alert('usuario registrado')
    this.router.navigate(['/login'])
   }
}
