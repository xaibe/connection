import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { LecturesModule } from './lectures/lectures.module';
import { PasswordsModule } from './passwords/passwords.module';
import { ProfilesModule } from './profiles/profiles.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('TYPEORM_HOST'),
        port: +configService.get<number>('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USER'),
        password: configService.get<string>('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
2        migrationsRun: true,

        logging: true,

        autoLoadEntities: true,
        synchronize: true,
        migrations: ['dist/migration/**/*.js'],

        // migrations: [
        //   'src/migration/**/*.ts',
        //   //dist / migration/**/ * {.js,.ts }'
        // ],
        cli: {
          //entitiesDir: 'src/entity',
          //migrationsDir: 'src/migration',
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    CoursesModule,
    LecturesModule,
    ProfilesModule,
    UsersModule,
    PasswordsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
