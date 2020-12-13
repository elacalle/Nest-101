import { Test, TestingModule } from '@nestjs/testing';
import { CoffesController } from './coffes.controller';

describe('CoffesController', () => {
  let controller: CoffesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffesController],
    }).compile();

    controller = module.get<CoffesController>(CoffesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
