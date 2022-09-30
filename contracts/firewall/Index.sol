// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/access/Ownable.sol';
import './params/Constructor.sol';
import 'hardhat/console.sol';

contract Firewall is Ownable {

    FirewallConstructor.Struct firewall;
    mapping(bytes4 => mapping(address => address[])) public rules;

    constructor(
        FirewallConstructor.Struct memory _firewall
    ) {
        firewall = _firewall;
    }

    function indexOf(
        address[] memory array, 
        address matcher
    ) 
        private 
        pure 
        returns(bool) 
    {
        for ( uint256 i = 0 ; i < array.length ; ++i ) {
            if ( array[i] == matcher ) {
                return true;
            }
        }
        return false;
    }
    
    function setRules(
        bytes4[] memory signatures, 
        address[] memory permissions
    ) 
        external 
    {
        require(signatures.length == permissions.length);
        for ( uint256 i = 0 ; i < signatures.length ; ++i ) {
            require(signatures[i] == bytes4(0) ? msg.sender == owner() : !indexOf(rules[msg.sig][permissions[i]], msg.sender) && indexOf(firewall.council, msg.sender));
            rules[signatures[i]][permissions[i]].push(msg.sender);
        }
    }

    function isAllowed(
        address user, 
        bytes4 method
    ) 
        public 
        view 
        returns(bool) 
    {
        console.log("is allowed ...");
        console.log(user);
        console.log(rules[method][user].length, firewall.minCouncilApprovals);
        return rules[method][user].length >= firewall.minCouncilApprovals;
    }

    modifier allowed(
        address user, 
        bytes4 method
    ) {
        require(rules[method][user].length >= firewall.minCouncilApprovals);
        _;
    }
}