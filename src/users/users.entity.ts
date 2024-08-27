import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único do usuário' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Nome do usuário' })
  nome: string;

  @Column()
  @ApiProperty({ description: 'Sobrenome do usuário' })
  sobrenome: string;

  @Column()
  @ApiProperty({ description: 'Email do usuário' })
  email: string;

  @Column()
  @ApiProperty({ description: 'Senha do usuário' })
  password: string;
}
