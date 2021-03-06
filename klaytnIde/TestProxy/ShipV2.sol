// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ShipV2 is Initializable {
    string public name;
    uint256 public fuel;

    function initialize(string memory _name, uint256 _fuel) external initializer {
        name = _name;
        fuel = _fuel;
    }

    function move() public {
        require(fuel > 0, "No fuel");
        fuel = fuel - 1;
    }

    function refuel() public {
        fuel = fuel + 1;
    }
}