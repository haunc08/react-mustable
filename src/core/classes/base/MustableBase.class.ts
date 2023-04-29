import { VOID_VALUE } from "../../common/utils.constants";

export abstract class MustableBase {
  /** @deprecated Don't use the field name ***version*** in your class as it is preserved to ***Mustable***'s internal logics. */
  version: void = VOID_VALUE;

  /** @deprecated Don't use the field name ***instance*** in your class as it is preserved to ***Mustable***'s internal logics. */
  private readonly _instance: MustableBase;
  get instance(): MustableBase {
    return this._instance;
  }

  constructor() {
    this._instance = this;
  }
}
