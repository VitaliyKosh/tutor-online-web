import { userStateRepository } from "@/core/repositories/user-state";
import { UserStateService } from "./service";

export const userStateService = new UserStateService({ repository: userStateRepository });