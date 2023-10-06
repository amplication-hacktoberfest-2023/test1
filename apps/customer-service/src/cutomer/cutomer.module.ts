import { Module } from "@nestjs/common";
import { CutomerModuleBase } from "./base/cutomer.module.base";
import { CutomerService } from "./cutomer.service";
import { CutomerController } from "./cutomer.controller";
import { CutomerResolver } from "./cutomer.resolver";

@Module({
  imports: [CutomerModuleBase],
  controllers: [CutomerController],
  providers: [CutomerService, CutomerResolver],
  exports: [CutomerService],
})
export class CutomerModule {}
