import * as graphql from "@nestjs/graphql";
import { CutomerResolverBase } from "./base/cutomer.resolver.base";
import { Cutomer } from "./base/Cutomer";
import { CutomerService } from "./cutomer.service";

@graphql.Resolver(() => Cutomer)
export class CutomerResolver extends CutomerResolverBase {
  constructor(protected readonly service: CutomerService) {
    super(service);
  }
}
