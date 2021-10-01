//SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

contract StringManipulation {
    function strings(string memory str) public pure returns (uint256) {
        bytes memory str_bytes = bytes(str);
        return str_bytes.length;
    }

    function concatination(string memory str1, string memory str2)
        public
        pure
        returns (string memory)
    {
        bytes memory str1_bytes = bytes(str1);
        bytes memory str2_bytes = bytes(str2);
        string memory str = new string(str1_bytes.length + str2_bytes.length);
        bytes memory str_bytes = bytes(str);

        uint256 j = 0;
        for (uint256 i = 0; i < str_bytes.length; i++) {
            str_bytes[j] = str1_bytes[i];
            j++;
        }
        for (uint256 i = 0; i < str_bytes.length; i++) {
            str_bytes[j] = str2_bytes[i];
            j++;
        }

        return string(str_bytes);
    }
}
