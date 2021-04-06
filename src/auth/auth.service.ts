import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OwnerService } from 'src/owner/owner.service';
import { OwnerDoucment } from 'src/owner/schemas/owner.schema';

@Injectable()
export class AuthService {
  constructor(
    private ownerService: OwnerService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async validateUser(username: string, password: string) {
    const user = await this.ownerService.findOne(username);
    if (user && user.lastname === password) {
      return user;
    }
    return null;
  }

  async genarateRefreshToken(owner: OwnerDoucment) {
    const playload = {
      userId: owner.id,
    };
    const token = await this.jwtService.sign(playload);
    const user = await this.ownerService.findOne(owner.firstname);
    user.refreshTokens = [...user.refreshTokens, token];
    await user.save();
    return token;
  }

  async gernaretAccessToken(userId: string) {
    const playload = { userId };
    const token = await this.jwtService.sign(
      playload,
      this.configService.get('jwt.options'),
    );
    return token;
  }
}
