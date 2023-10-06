import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CutomerService } from "./cutomer.service";
import { CutomerControllerBase } from "./base/cutomer.controller.base";

@swagger.ApiTags("cutomers")
@common.Controller("cutomers")
export class CutomerController extends CutomerControllerBase {
  constructor(protected readonly service: CutomerService) {
    super(service);
  }
}
