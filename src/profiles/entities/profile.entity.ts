import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  first_name: string;
}
