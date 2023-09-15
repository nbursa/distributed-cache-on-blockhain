// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedCache {
    mapping(bytes32 => string) private cache;

    event DataStored(bytes32 indexed key, string data);

    function storeData(bytes32 key, string memory data) public {
        require(bytes(data).length > 0, "Data cannot be empty");
        cache[key] = data;
        emit DataStored(key, data);
    }

    function retrieveData(bytes32 key) public view returns (string memory) {
        return cache[key];
    }
}
