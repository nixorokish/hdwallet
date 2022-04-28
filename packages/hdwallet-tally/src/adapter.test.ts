import * as core from "@shapeshiftoss/hdwallet-core";

import { TallyAdapter } from "./adapter";

describe("TallyAdapter", () => {
  it("throws error if provider is not preset", async () => {
    const keyring = new core.Keyring();
    const adapter = TallyAdapter.useKeyring(keyring);
    await expect(async () => await adapter.pairDevice()).rejects.toThrowError("Could not get Tally accounts.");
  });
});
