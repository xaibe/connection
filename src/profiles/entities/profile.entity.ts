import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  photoUrl: string;

  @Column()
  jobTitle: string;

  @Column()
  personalWebsite: string;

  @Column()
  biography: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
