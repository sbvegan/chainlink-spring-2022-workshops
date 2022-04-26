// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "ds-test/test.sol";
import "../src/Contract.sol";

contract ContractTest is DSTest {
    Contract public myContract;

    function setUp() public {
        myContract = new Contract();
    }

    function testInitCorrectly() public {
        assertTrue(myContract.number() == 0);
    }

    function testSetNumber() public {
        myContract.setNumber(8);
        assertTrue(myContract.number() == 8);
    }
}
