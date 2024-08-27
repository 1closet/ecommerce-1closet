import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
@ApiTags('users') 
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })  // Descrição do endpoint
  @ApiResponse({ status: 201, description: 'O usuário foi criado com sucesso.', type: User })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async createUser(
    @Body('nome') nome: string,
    @Body('sobrenome') sobrenome: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.usersService.createUser(nome, sobrenome, email, password);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })  // Descrição do endpoint
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.', type: [User] })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
