import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {message:string} {
    return {message:'Hola desde el backend con nestjs'};
  }
}
