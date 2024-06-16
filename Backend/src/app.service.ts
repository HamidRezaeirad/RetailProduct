import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Get app version
   *
   * @returns string
   */
  getVerion(): string {
    return 'Version: 1.0.0';
  }
}
