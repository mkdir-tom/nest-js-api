import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { OwnerModule } from 'src/owner/owner.module';
import { OwnerService } from 'src/owner/owner.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { RefreshTokenStrategy } from './refresh-token.strategy';

@Module({
  imports: [
    OwnerModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configuration: ConfigService) => {
        return {
          secret: configuration.get('jwt.secret'),
        };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, RefreshTokenStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
