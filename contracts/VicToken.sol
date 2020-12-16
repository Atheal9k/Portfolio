pragma solidity 0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VicToken is ERC20 {
    address public owner;
    
    constructor()ERC20 ("Victor Huang Token", "VHT") public {
        owner = msg.sender;
    }
    
    function mint(address to, uint amount) external {

        _mint(to, amount);
    }
    
    function burn(address account, uint amount) external {
        require(msg.sender == owner, 'only owner');
        _burn(account, amount);
    }
    
}