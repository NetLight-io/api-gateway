import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApihubModule } from './apihub/apihub.module';
import { ProductModule } from './product/product.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { BlocklyModule } from './blockly/blockly.module';

@Module({
  imports: [AuthModule, ApihubModule, ProductModule,PassportModule.register({ defaultStrategy: 'oauth2' }), BlocklyModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
