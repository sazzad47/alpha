import { DeltaProps } from "./props";
import { sidebarTypes } from "./types";

export interface sidebarAction {
    type: sidebarTypes;
    payload: DeltaProps;
  }