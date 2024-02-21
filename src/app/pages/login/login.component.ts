import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  login() {
    this.loginService.login(this.form.value.email, this.form.value.senha)
      .subscribe(() =>{
        this.router.navigate(['/home']);
      }
    );
  }

  private createForm(): void{
    this.form = this.fb.group({ 
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(11)]]
    });
  }

}
