import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

	user;
  constructor(
  ) {
		// TODO: consultar el usuario en base de datos local
	}
}
