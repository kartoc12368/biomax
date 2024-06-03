import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BiometricGateway } from './modules/biometric/biometric.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BiometricGateway],
})
export class AppModule {}
