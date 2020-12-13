import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffesController } from './coffes.controller';

@Module({ controllers: [CoffesController], providers: [CoffeesService] })
export class CoffeesModule {}
