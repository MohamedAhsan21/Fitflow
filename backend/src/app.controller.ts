import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return {
      status: 'ok',
      service: 'fitflow-backend',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('summary')
  summary() {
    return {
      app: 'FitFlow',
      tagline: 'Personalized fitness coaching with AI guidance',
      features: ['Workout plans', 'Nutrition', 'Progress tracking', 'Community'],
    };
  }
}
