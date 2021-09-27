import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentModule } from './components/cars/components.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, GraphQLModule.forRoot({
    playground: true,
    debug: true,
    autoSchemaFile: true,
  }),
  ComponentModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
