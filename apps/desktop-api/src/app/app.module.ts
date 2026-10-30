import { Module } from '@nestjs/common';
import { WakatimeModule } from '@dinary/plugin-integration-wakatime';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';

require('app-root-path').setPath(process.env.DINARY_USER_PATH);

@Module({
	imports: [DatabaseModule, WakatimeModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
