const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Type", function () {
  it("Should set Types", async () => {
    const [sig1,sig2,sig3,sig4,sig5] = await ethers.getSigners();
    const addressesToAdd = [sig1.address,sig2.address,sig3.address,sig4.address,sig5.address];

    const TypeFacory = await ethers.getContractFactory("Type");
    const type = await TypeFacory.deploy();
    await type.deployed();

    await type["setType(address[],bool)"](addressesToAdd, true);

  });
});
