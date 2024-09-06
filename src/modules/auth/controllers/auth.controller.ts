import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { Response,Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(
    @Body() signInDto: Record<string, any>,
    @Res({ passthrough: true }) res: Response,
  ) {
    const jwt = await this.authService.signIn(signInDto.username, signInDto.password);
    res.cookie('access_token', jwt);
    return jwt;
  }

  @Get('profile')
  profile(@Req() req: Request) {
    return req.cookies['access_token'];
  }
}
