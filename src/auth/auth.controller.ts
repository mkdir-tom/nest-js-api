import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { OwnerService } from 'src/owner/owner.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { RefreshTokenAuthGuard } from './refresh-token-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return {
      refreshToken: await this.authService.genarateRefreshToken(req.user),
    };
  }

  @UseGuards(RefreshTokenAuthGuard)
  @Get('accessToken')
  async erqusetAccessToken(@Req() req: any) {
    return {
      accessToken: await this.authService.gernaretAccessToken(req.user.userId),
    };
  }
}
