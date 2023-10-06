import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CutomerServiceBase } from "./base/cutomer.service.base";

@Injectable()
export class CutomerService extends CutomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
