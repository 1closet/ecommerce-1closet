import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registra a entidade User aqui
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Exporte se precisar usar em outros módulos
})
export class UsersModule {}
